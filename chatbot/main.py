import asyncio
import websockets
from flask import Flask
from transformers import T5Tokenizer, T5ForConditionalGeneration
import torch

# Load Flan-T5 model and tokenizer
model_name = "google/flan-t5-base"
tokenizer = T5Tokenizer.from_pretrained(model_name)
model = T5ForConditionalGeneration.from_pretrained(model_name)

# Set model to CPU only
device = torch.device("cpu")
model.to(device)

# Stamp data (same as before)
stamp_data = [
    # Your stamp data...
]

# Define keywords related to stamps
stamp_keywords = ["stamp", "philately", "postal", "air mail", "commemorative", "collector", "rare", "vintage"]

# Function to check if the query is related to stamps
def is_stamp_related(user_input):
    return any(keyword in user_input.lower() for keyword in stamp_keywords)

# Function to fetch data based on user input
def get_stamp_info(user_input):
    for stamp in stamp_data:
        if any(keyword in user_input.lower() for keyword in [stamp['description'].lower(), stamp['category'].lower(), stamp['type'].lower()]):
            return f"Description: {stamp['description']}\nPrice: {stamp['price']}\nCategory: {stamp['category']}\nType: {stamp['type']}\nImage: {stamp['image']}"
    return None

# Function to generate a response using Flan-T5 model
def generate_response(user_input, max_length=100):
    task_instruction = f"Answer based on this question: {user_input}"
    inputs = tokenizer.encode(task_instruction, return_tensors="pt").to(device)
    outputs = model.generate(
        inputs, 
        max_length=max_length, 
        do_sample=False
    )
    response = tokenizer.decode(outputs[0], skip_special_tokens=True)
    return response.strip()

# Main chatbot function to handle logic
def chatbot_response(user_input):
    if not is_stamp_related(user_input):
        return "I can only answer questions related to stamps. Please ask about stamps, philately, postal services, or stamp collecting."

    stamp_info = get_stamp_info(user_input)
    if stamp_info:
        return stamp_info
    
    return generate_response(user_input)

# Create Flask app
app = Flask(__name__)

# WebSocket server handler
async def websocket_handler(websocket, path):
    async for message in websocket:
        print(f"Received message: {message}")
        response = chatbot_response(message)
        await websocket.send(response)

# Start WebSocket server
start_server = websockets.serve(websocket_handler, "localhost", 8765)

# Start the event loop for the WebSocket server
if __name__ == "__main__":
    loop = asyncio.get_event_loop()
    loop.run_until_complete(start_server)
    loop.run_forever()
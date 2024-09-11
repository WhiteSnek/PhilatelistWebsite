import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Chatbot from "./components/ChatBot/Chatbot";
import UserProvider from "./provider/UserProvider";

function App() {
  return (
    <>
      <UserProvider>
        <Header />
        <Outlet />
        <Chatbot />
      </UserProvider>
    </>
  );
}

export default App;

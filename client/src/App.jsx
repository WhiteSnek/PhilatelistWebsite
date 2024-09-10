
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Chatbot from './components/ChatBot/Chatbot'

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Chatbot />
    </>
  )
}

export default App

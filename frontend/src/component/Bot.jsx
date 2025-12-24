import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import {FaUserCircle} from 'react-icons/fa'

const Bot = () => {

const [messages , setMessages] = useState([])// variable = messages, function= setMessages (backend se data lega -> aur variable me dalega , why array because coming data is also an array)
const [input, setInput]= useState("")
const [loading, setLoading]=useState(false)

const messagesEndRef = useRef(null);

useEffect(() => {
  if (messagesEndRef.current) {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }
}, [messages]);




const handleSendMessage = async () =>{
  setLoading(true);
  if(!input.trim()) return;
  try {
    // call backend api, by axios(http)
    const res = await axios.post("http://localhost:4002/bot/v1/message", {
      text:input
    })// post because in chatbot.route server also in post
 
    if(res.status==200) { 
      setMessages([...messages, {text: res.data.userMessage, sender:'user'}, {text: res.data.botMessage, sender:'bot'}]);
    }
   console.log(res.data);

  } catch (error) {
    console.error("Error sending message:", error);
  }
  setInput("");
  setLoading(false);
}

const handleKeyPress = (e)=>{
  if(e.key === 'Enter') handleSendMessage()
}


 return (
  <div className="flex flex-col h-screen bg-[#0b0f14] text-white">

    {/* Navbar & Header */}
    <header className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
      <div className="text-lg font-semibold">BotSpoof</div>
      <FaUserCircle className="text-2xl text-gray-400" />
    </header>

    {/* Chat Area */}
    <main className="flex-1 overflow-y-auto px-4 py-6 flex flex-col items-center justify-center">

      {messages.length === 0 && (
        <div className="text-gray-400 text-sm flex items-center gap-2">
          👋 Hi, I’m <span className="text-green-400 font-medium">BotSpoof</span>.
        </div>
      )}

      <div className="w-full max-w-3xl space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`px-4 py-2 rounded-xl text-sm max-w-[75%] ${
                msg.sender === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-100'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {loading && (
          <div className="text-gray-500 text-sm italic">Bot is typing...</div>
        )}

        <div ref={messagesEndRef}></div>
      </div>
    </main>

    {/* Input & Footer */}
    <footer className="px-4 py-4 border-t border-gray-800">
      <div className="flex items-center gap-3 max-w-3xl mx-auto bg-[#11161d] rounded-full px-4 py-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Ask BotSpoof..."
          className="flex-1 bg-transparent outline-none text-sm text-white placeholder-gray-500"
        />
        <button
          onClick={handleSendMessage}
          disabled={loading}
          className="bg-green-500 hover:bg-green-600 text-black text-sm px-4 py-1.5 rounded-full disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </footer>

  </div>
);

}

export default Bot

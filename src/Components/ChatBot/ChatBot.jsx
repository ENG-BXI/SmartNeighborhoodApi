import React, {useState} from 'react';
import './ChatBot.css';
import axios from 'axios';
import {BASEURL, CHAT_AI} from '../../Api/EndPoint';
import {ChatBotLogo} from '../../Assets/Images';

function ChatBot() {
  let [messages, setMessages] = useState([{sender: 'bot', text: 'أهلاً بك! كيف يمكنني مساعدتك؟'}]);
  let [input, setInput] = useState(''); // تخزين النص المكتوب
    let [isShowBot, setIsShowBot] = useState(false);
    // رساله تعرفيه للبوت عن النظام 
  let startMessage ="";
  let sendMessage = async e => {
    e.preventDefault();
    if (!input.trim()) return;

    let newMessages = [...messages, {sender: 'user', text: input}];
    setMessages(newMessages);
    let senderMessage = messages.length > 1 ? input : startMessage + input;
    try {
      let response = await axios.post(`${BASEURL}/${CHAT_AI}?message=${encodeURIComponent(senderMessage)}`);
         setInput('');
      setMessages([...newMessages, {sender: 'bot', text: response.data.data}]);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages([...newMessages, {sender: 'bot', text: 'حدث خطأ، حاول لاحقًا!'}]);
    }

   
  };

  return (
    <>
      <div className={`chat-bot ${isShowBot && 'show'}`}>
        <div className='chat-bot-header d-flex align-items-center justify-content-between px-3 flex-row-reverse'>
          <img src={ChatBotLogo} alt='ChatBotLogo' />
          <p className='text-white mb-0 fs-4'>المساعد الذكي</p>
          <i onClick={() => setIsShowBot(false)} className='ri-close-circle-line text-white fs-4'></i>
        </div>
        <div className='chat-box'>
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <form className='input-chat-bot'>
          <input type='text' value={input} onChange={e => setInput(e.target.value)} placeholder='اكتب رسالتك...' />
          <button onClick={sendMessage}>إرسال</button>
        </form>
      </div>
      <button
        onClick={() => {
          setIsShowBot(!isShowBot);
        }}
        className='chat-bot-button px-3 '
      >
        <i className='ri-chat-ai-line fs-4 '></i>
      </button>
    </>
  );
}

export default ChatBot;

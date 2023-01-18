// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';
import MyAvatar from './MyAvatar'
import MessageParser from './MessageParser'
import MyCustomAvatar from './MyCustomAvatar'
import MyCustomChatMessage from './MyCustomChatMessage'
import MyCustomUserChatMessage from './MyCustomUserChatMessage'

const botName = 'ExcitementBot';

const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`)],
  botName: 'Mohamed Bourema Traoré',
  customStyles: {
    botMessageBox: {
      backgroundColor: '',
      color : 'black'
    },
    chatButton: {
      backgroundColor: 'black',
    },
  },
  customComponents: {
    // Replaces the default header
   header: () => <div style={{ backgroundColor: 'black', padding: "20px", borderRadius: "3px", color:'white' }}>
   </div>,
   // Replaces the default bot avatar
   //botAvatar: (props) => <MyAvatar {...props} />,
   // Replaces the default bot chat message container
 //  botChatMessage: (props) => <MyCustomChatMessage {...props} />,
   // Replaces the default user icon
  // userAvatar: (props) => <MyCustomAvatar {...props} />,
   // Replaces the default user chat message
   //userChatMessage: (props) => <MyCustomUserChatMessage {...props} />
 },
};

export default config;
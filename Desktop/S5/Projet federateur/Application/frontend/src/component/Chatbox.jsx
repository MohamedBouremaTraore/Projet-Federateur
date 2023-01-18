import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import React, { Component } from 'react'; 
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css'

import config from "./Chatbox/config";
import MessageParser from "./Chatbox/MessageParser";
import ActionProvider from "./Chatbox/ActionProvider";
import '../index.css';
import { AiFillWechat } from 'react-icons/ai';

class Chatbox extends Component {

    render(){
    return (
      <div class= 'chatbox'>
 
        <a class="bot" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
           <AiFillWechat size={50} color={"black"}/>
        </a>
  
      <div class="collapse" id="collapseExample">
      <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
            />
      </div>
            
      </div>
    );
    }
  }
  
  export default Chatbox;
  
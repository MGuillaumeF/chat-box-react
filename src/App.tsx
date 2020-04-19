import React, { useState } from 'react';

import './App.css';
import Formulaire from './components/formulaire/Formulaire';
import Message from './components/message/Message';

const EMPTY_MESSAGES: any = {};

interface IAppProps {
  match: { params: { pseudo: string } }
}

function App(props: IAppProps) {
  const [messages, setMessages] = useState(EMPTY_MESSAGES);
  const [pseudo] = useState(props.match.params.pseudo);

  const addMessage = (message: any) => {
    const newMessages = { ...messages };
    newMessages[`message-${Date.now()}`] = message;
    setMessages(newMessages);

  };
  return (
    <div className="box">
      <div>

        <div className="messages">
          {Object.keys(messages).map((id) => {
            return (
              <Message key={id}>{messages[id].message}</Message>
            )
          })}
        </div>
        <Formulaire 
        pseudo={pseudo} 
        addMessage={addMessage} 
        length={140}
        />
      </div>
    </div>
  );
}

export default App;

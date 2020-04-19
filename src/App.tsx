import React, { Component, createRef } from 'react';

import './App.css';
import './animation.css';
import Formulaire from './components/formulaire/Formulaire';
import Message from './components/message/Message';
import base from './base';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
const EMPTY_MESSAGES: any = {};

class App extends Component {
  internalProps: any = this.props
  state = {
    messages: EMPTY_MESSAGES,
    pseudo: this.internalProps.match.params.pseudo
  };

  messageRef: any = createRef();

  componentDidMount() {
    base.syncState('/', { context: this, state: 'messages' });
  }

  componentDidUpdate() {
    const ref: any = this.messageRef.current;
    ref.scrollTop = ref.scrollHeight;
  }

  addMessage = (message: any) => {
    const messages = { ...this.state.messages };
    messages[`message-${Date.now()}`] = message;
    Object.keys(messages).slice(0, -10).forEach((key) => {
      messages[key] = null;
    });
    this.setState({ messages: messages });
  };

  isUser = (pseudo: string) => this.state.pseudo === pseudo;

  render() {

    return (
      <div className="box">
        <div>

          <div className="messages" ref={this.messageRef}>
            <TransitionGroup className="message">

              {Object.keys(this.state.messages).map((id) => {
                return (
                  <CSSTransition key={id} timeout={200} classNames='fade'>
                    <Message isUser={this.isUser} pseudo={this.state.messages[id].pseudo}>{this.state.messages[id].message}</Message>
                  </CSSTransition>
                )
              })}
            </TransitionGroup>
          </div>
          <Formulaire
            pseudo={this.state.pseudo}
            addMessage={this.addMessage}
            length={140}
          />
        </div>
      </div>
    );
  }
}

export default App;

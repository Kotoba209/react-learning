import React, { Component } from 'react';
import { render } from 'react-dom';

function FancyBorder (props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function Dialog (props) {
  return (
    <FancyBorder color='blue'>
      <h1 className='Dialog-title'>
        {props.title}
      </h1>
      <p className='Dialog-message'>
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  )
}

function WelcomeDialog () {
  return (
    // <FancyBorder color='blue'>
    //   <h1 className='Dialog-title'>
    //     welcome
    //   </h1>
    //   <p className='Dialog-message'>
    //     Thank you for visiting our spacecraft!
    //   </p>
    // </FancyBorder>
    <Dialog
      title='Welcome'
      message='Thank you for visiting our spacecraft!'
    />
  )
}

function SplitPane (props) {
  return (
    <div className='SplitPane'>
      <div className='SplitPane-left'>
        {props.left}
      </div>
      <div className='SplitPane-right'>
        {props.right}
      </div>
    </div>
  )
}

function Contact () {
  return (
    <div>Contact</div>
  )
}

function Chat () {
  return (
    <div>Chat</div>
  )
}

class SignUpDialog extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = { login: '' };
  }

  render () {
    return (
      <Dialog
        title='Mars Exploration Program'
        message='How should we refer to you'
      >
        <input value={this.state.login}
        onChange={this.handleChange}
        />
        <button onClick={this.handleSignUp}>
          Sign Me Up!
        </button>
      </Dialog>
    )
  }

  handleChange (e) {
    this.setState({ login: e.target.value });
  }

  handleSignUp (e) {
    alert(`Welcome aboard, ${this.state.login}!`)
  }
}



function App () {
  return (
    <div>
      <WelcomeDialog />
      <br />
      <SplitPane left={
        <Contact/>
      } />
      <SplitPane right={
        <Chat/>
      } />
      <br />
      <SignUpDialog/>
    </div>
  )
}

render(
  <App />,
  document.getElementById('root')
);
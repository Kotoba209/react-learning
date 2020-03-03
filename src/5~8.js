import React from 'react';
import { render } from 'react-dom';


class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = { date: new Date(), counter: 1 };

    // this.testFn = this.testFn.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  testFn(props) {
    // console.log(props, '<-->props');
    this.setState((state) => ({
      counter: state.counter += 1
    }))
  }

  render () {
    return (
      <div>
        <h1>Hello, World!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
        <h2>{this.state.counter}</h2>
        <button increment={1} onClick={this.testFn.bind(this, {num: 1})}>Click</button>
      </div>
    );
  }
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render () {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    )
  }
}

function UserGreeting(props) {
  return <h1>Welcome back!</h1>
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>
}

function Greeting(props) {
  const { isLoggedIn } = props;
  if (isLoggedIn) {
    return <UserGreeting/>
  }
  return <GuestGreeting/>
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  )
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  )
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick () {
    this.setState({ isLoggedIn: false });
  }

  render () {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
        <div>
          The user is <b>{isLoggedIn ? 'currently' : 'not'}</b>
        </div>
      </div>
    )
  }
}

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}

const messages = ['React', 'Re:React', 'Re:Re:React'];

function WarningBanner (props) {
  if (!props.warn) {
    return null;
  }
  return (
    <div className='warining'>
      Warning!
    </div>
  )
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showWarning: true };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick () {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render () {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    )
  }
}

const numbers = [1, 2, 3, 4, 5];

const listItems = numbers.map((number) =>
  <li key={number}>{number}</li>
);

function NumberList (props) {
  const numbers = props.numberss;
  const listItems = numbers.map(number => <li key={number}>{number}</li>);

  return (
    <ul>{listItems}</ul>
  )
}

const numberss = [1, 2, 3, 4, 5];

function App () {
  return (
    <div>
      <Clock />
      <Toggle />
      <Greeting isLoggedIn={false} />
      <LoginControl />
      <Mailbox unreadMessages={messages} />
      <Page />
      <ul>{listItems}</ul>
      <NumberList numberss={numberss} />
    </div>
  )
}

render(
  <App />,
  document.getElementById('root')
);

// setInterval(tick, 1000);
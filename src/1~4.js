import React from 'react'

import {render} from 'react-dom'

// import App from './App';

// const Header = ()=> <h1 style={{"color": "red"}}> 类组件 </h1>

// class App extends React.Component {
//   render(props) {
//     return(
//       <div>
//         <Header/>
//         <p>{this.props.desc}</p>
//       </div>
//     )
//   }
// }

// const app = new App({
//   desc: '测试数测试'
// }).render()

// const name = 'Josh Perez';
// const element = <h1>Hello, {name}</h1>;

// function formatName(user) {
//   // return user.firstName + ' ' + user.lastName;
//   return user;
// };
// const user = {
//   firstName: 'Harper',
//   lastName: 'Perez',
// };

// const element = (
//   <h1>
//     Hello, {formatName(user)}!
//   </h1>
// )

// function getGreeting(user) {
//   if (user) {
//     return <h1>Hello, {formatName(user)}!</h1>;
//   }
//   return <h1>Hello, stranger</h1>
// }

// const user = 'kotoba';

// const element = getGreeting(user);

// const element = <div tabIndex='0'>1</div>

// const user = {
//   avatarUrl: '/images/avatar.png'
// }

// const element = <img src={user.avatarUrl} />;

// const element = (
//   <div>
//     <h1>Hello!</h1>
//     <h2>Good to see you here.</h2>
//   </div>
// )

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}</h2>
//     </div>
//   );
//   render(
//     element,
//     document.querySelector('#root')
//   )
// };

// setInterval(tick, 1000);

// function Welcome(props) {
//   console.log(props, '<-props->');
//   return <h1>Hello, {props.name}</h1>
// }

// const obj = {
//   name: 'kotoba',
// };


// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>
//   }
// }

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>
// };

// const element = <Welcome name='Sara'/>

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
};

// function App() {
//   return (
//     <div>
//       <Welcome name='Sara' />
//       <Welcome name='Cahal' />
//       <Welcome name='Edite' />
//     </div>
//   )
// };

// comment 组件
function comment(props) {
  return (
    <div className='Comment'>
        {/* <div className='UserInfo'> */}
        {/* <img className='Avatar'
          src={props.author.avatarUrl}
          alt={props.author.name}
        /> */}
        {/* <Avatar user={props.author} />
        <div className='UserInfo-name'>
        {props.author.name}
        </div>
        </div> */}
        <UserInfo user={props.author} />
        <div className='Comment-text'>
        {props.text}
        </div>
        <div className='Comment-date'>
        {props.date}
        </div>
    </div>
  )
};

function Avatar(props) {
  return(
    <img className='Avatar'
    src={props.user.avatarUrl}
    alt={props.user.name}/>
  );
};

function UserInfo(props) {
  return(
    <div className='userInfo'>
    <Avatar user={props.user} />
    <div className='UserInfo-name'>
    {props.user.name}
    </div>
    </div>
  )
}

render(
  // <App desc="测试数据" />,
  // <App/>,
  // <Welcome name='kotoba'/>,
  // element,
  document.querySelector('#root')
)~
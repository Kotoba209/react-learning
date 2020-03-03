import React, { Component } from 'react';
import { render } from 'react-dom';

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    // textareaVal: '请撰写一篇关于你喜欢的DOM元素的文章'

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    // console.log(event.target.value, '<-->');
    this.setState({ value: event.target.value });
    // this.setState({ value: event.target.value.toUpperCase() });
  }

  handleSubmit (event) {
    // this.setState({value: event})
    alert('提交的名字:' + this.state.value)
    event.preventDefault();
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          名字:
          <input type='text' value={this.state.value}
            onChange={this.handleChange} />
        </label>
        <input type='submit' value='提交' />
        {/* <textarea>
          这里是textarea的文本
        </textarea> */}
      </form>
    );
  }
}

class EssayForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '请撰写一篇关于你喜欢的DOM元素的文章' };
    // textareaVal: '请撰写一篇关于你喜欢的DOM元素的文章'

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    // console.log(event.target.value, '<-->');
    this.setState({ value: event.target.value });
    // this.setState({ value: event.target.value.toUpperCase() });
  }

  handleSubmit (event) {
    // this.setState({value: event})
    alert('提交的文章:' + this.state.value)
    event.preventDefault();
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          文章:
          <textarea type='text' value={this.state.value}
            onChange={this.handleChange} />
        </label>
        <input type='submit' value='提交' />
        {/* <textarea>
          这里是textarea的文本
        </textarea> */}
      </form>
    );
  }
}

class FlavorForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 'account' };
    // textareaVal: '请撰写一篇关于你喜欢的DOM元素的文章'

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    // console.log(event.target.value, '<-->');
    this.setState({ value: event.target.value });
    // this.setState({ value: event.target.value.toUpperCase() });
  }

  handleSubmit (event) {
    // this.setState({value: event})
    alert('提你喜欢的风味是:' + this.state.value)
    event.preventDefault();
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          选择你喜欢的风味:
          {/* <input type='text' value={this.state.value}
            onChange={this.handleChange} /> */}
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">葡萄柚</option>
            <option value="lime">酸橙</option>
            <option value="coconut">椰子</option>
            <option value="mango">芒果</option>
          </select>
        </label>
        <input type='submit' value='提交' />
        {/* <textarea>
          这里是textarea的文本
        </textarea> */}
      </form>
    );
  }
}

class Reservation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange (event) {
    console.log(event.target, '<-->event.target');
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  render () {
    return (
      <form>
        <label>
          参与
          <input
            name='isGoing'
            type='checkbox'
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
          />
          <br/>
        </label>
        <label>
          来宾人数：
          <input
            name='numberOfGuests'
            type='number'
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
          />
        </label>
      </form>
    )
  }
}


function App () {
  return (
    <div>
      <NameForm />
      <br/>
      <EssayForm />
      <br/>
      <FlavorForm />
      <br />
      <Reservation/>
    </div>
  )
}

render(
  <App />,
  document.getElementById('root')
);
import React from 'react';

// 定义一个React组件
class TodoList extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      list: [],
      inputValue: ''
    }
  }
  handleBtnClick () {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  handleInputChange (e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleItemClick (index) {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list
    })
  }

  render () {
    return (
      <div>
        <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)} />
        <button onClick={this.handleBtnClick.bind(this)}>add</button>
        <ul>
          {
            this.state.list.map((item, index) => {
              return <li onClick={this.handleItemClick.bind(this, index)} key={index}>{item}</li>
            })
          }
        </ul>
      </div>
    );
  }

}

export default TodoList;

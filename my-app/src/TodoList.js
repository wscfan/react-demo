import React from 'react';

// 定义一个React组件
class TodoList extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      list: [
        'learn react',
        'learn english',
        'sdfsdf'
      ]
    }
  }
  handleBtnClick () {
    console.log(this)
    this.setState({
      list: [...this.state.list, 'hello world']
    })
  }

  render () {
    return (
      <div>
        <input />
        <button onClick={this.handleBtnClick.bind(this)}>add</button>
        <ul>
          {
            this.state.list.map((item, key) => {
              return <li key={key}>{item}</li>
            })
          }
        </ul>
      </div>
    );
  }

}

export default TodoList;

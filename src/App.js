import React, { Component } from 'react';

class App extends Component {
  state = {
    tasks: [
      { title: 'the first title' },
      { title: 'the second title' },
      { title: 'the third title' },
    ],
  };

  removeItem = (title) => {
    //you dont have acces to the state directly it's immutable you can acces it through the "this.setState({})"
    this.setState({
      tasks: this.state.tasks.filter((task) => {
          return task.title !== title
      })
    })
  }

  render() {
    return (
      <div>
        <TasksComponent titles={this.state.tasks} removeItem={this.removeItem} />
      </div>
    );
  }
}

const TasksComponent = ({ titles, removeItem }) => {
  return (
    <div>
      {titles.map((item, index) => {
        return <Task key={index} title={item.title} index={index} removeItem={removeItem} />;
      })}
    </div>
  );
};

const Task = ({ title, index, removeItem}) => {
  return (
    <div>
      {' '}
      <p>
        Todo: <span>{title}</span>
        <button onClick={() => removeItem(title)}>x</button>
      </p>
    </div>
  );
};

export default App;

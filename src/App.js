import React, { Component } from 'react';

class App extends Component {
  state = {
    tasks: [
      { title: 'the first title' },
      { title: 'the second title' },
      { title: 'the third title' },
    ],

    addTodoValue: '',
  };

  removeItem = (title) => {
    this.setState({
      tasks: this.state.tasks.filter((task) => {
        return task.title !== title;
      }),
    });
  };

  addItem = (title) => {
    const newTitle = {
      title: title,
    };
    this.setState({
      tasks: [...this.state.tasks, newTitle],
    });
  };

  handleChange = (e) => {
    this.setState({
      addTodoValue: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      addTodoValue: '',
    });
    
    this.addItem(this.state.addTodoValue);
  };

  render() {
    return (
      <div>
        <TasksComponent
          titles={this.state.tasks}
          removeItem={this.removeItem}
        />
        <form>
          <input
            type="text"
            value={this.state.addTodoValue}
            name="title"
            placeholder="add a task"
            onChange={(e) => this.handleChange(e)}
          />
          <button type="submit" onClick={(e) => this.handleSubmit(e)}>
            Add
          </button>
        </form>
      </div>
    );
  }
}

const TasksComponent = ({ titles, removeItem }) => {
  return (
    <div>
      {titles.map((item, index) => {
        return (
          <Task
            key={index}
            title={item.title}
            index={index}
            removeItem={removeItem}
          />
        );
      })}
    </div>
  );
};

const Task = ({ title, index, removeItem }) => {
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

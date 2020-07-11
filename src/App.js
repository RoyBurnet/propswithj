import React, { Component } from 'react';

class App extends Component {
  state = {
    text: 'this is text from the state',
    secondState: 'this is second state'
  };

  render() {
    const { text, secondState } = this.state;
    return (
      <div>
        <TextComponent textA="text as props" text={text} />
        <AnotherTextComponent text={text} />
        <StateComponent testState={secondState} />
      </div>
    );
  }
}

const TextComponent = ({textA, text}) => {
  return (
    <div>
      <p>{textA}</p>
      <p>{text}</p>
    </div>
  );
};

const AnotherTextComponent = (props) => {
  return (
    <div>
      <p>
        title: <strong>{props.text}</strong>
      </p>
    </div>
  );
};

const  StateComponent = ({secondState}) => {
  return (
    <div>
      <p>{secondState}</p>
    </div> 
  )
}

export default App;

import React from 'react';

import './App.css';
import Todo from './components/Todo';

export class App extends React.Component{
  state={
   todos:[{
      id:1,
      task:'node'
    },
    {
      id:2,
      task:'Angular'
    },
    {
      id:3,
      task:'React'
    }]
  }
  render(){

  
    return(
    <div>
      <Todo todos={this.state.todos}/>
    </div>
     
    )
  }
}

export default App;

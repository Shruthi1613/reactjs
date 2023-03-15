import React,{Component} from "react"
import "./global2.css"


class App extends Component
{
  constructor()
  {
    super()
    this.state={
      count : 0}
  }

  handleIncrement=()=> {
    this.setState({count : this.state.count+1})
  }

  handledecrement=()=>{
    this.setState({count : this.state.count-1})
  }

  handleReset=()=> {
    this.setState({count:0})
  }

  render()
  {
    return (
      <>
      <global/>
      <div className="mainBlock">
        <h1>{this.state.count}</h1>
        <div className="Block">
          <button onClick={this.handleIncrement}>+ Increment</button>
          <button onClick={this.handledecrement}>- Decrement</button>
          <button onClick={this.handleReset}>Reset</button>  
          
      </div>
      </div>
      </>
    )

    }
  }


export default App
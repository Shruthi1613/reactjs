import React, { Component } from 'react'

export default class App extends Component {

    constructor()
    {
        super()
        this.state={
            username :"Upendra"
        }
    }

    componentDidMount()
    {
        let btn=document.querySelector('button')
        btn.addEventListener('click',()=> {
            this.setState({username :this.state.username ="Kabza"})
        })
    }


  render() {
    return (
        <>
      <div>{this.state.username}</div>
      <button>Change</button>
      </>
    )
  }
}

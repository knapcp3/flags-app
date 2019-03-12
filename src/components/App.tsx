import React, { Component } from 'react'
import Flags from './Flags/Flags'
import TopNav from './TopNav/TopNav'

class App extends Component<any, any> {
  constructor(props: any) {
    super(props)
    // this.state = {
      // questionTree,
      // currentNode
    // }
  }

  public componentDidMount() {
    // this.setState({
    // })
  }

  public render() {
    return (
      <section className="app-container">
        <TopNav question="questionxd?"/>
        <Flags />
      </section>
    )
  }
}

export default App

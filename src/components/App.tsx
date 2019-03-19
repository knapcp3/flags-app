import React, { Component } from 'react'
import Flags from './Flags/Flags'
import TopNav from './TopNav/TopNav'
import { importAll } from './../modules/helpers'
import Flag from './../models/Flag.model'
import FT from './../modules/FlagsTree'
import Node from './../modules/Node'
import { flagPathsSubTree } from './../modules/helpers'
import NV from '../models/NodeValue.model'
import Stage from './../modules/Stage'

class App extends Component<any, any> {
  constructor(props: any) {
    super(props)

    const flags = importAll(
      require.context('./../img/flags', false, /\.(png|jpe?g|svg)$/)
    )
      .map((f: string) => Flag.create(f))
      .reduce((acc: any, f: Flag) => {
        acc[f.path] = f
        return acc
      }, {})

    this.state = {
      isFlagSelected: false,
      flags,
      currentNode: FT.root,
      stage: Stage.FlagSelecting
    }
  }

  public selectedFlag = (path: string) => {
    const selected = this.state.flags[path].setIsSelected(true)
    const flags = {
      ...this.state.flags
    }
    flags[path] = selected
    this.setState({
      flags,
      stage: Stage.Questions
    })
  }

  public selectedAnswer = (answer: boolean) => {
    const { currentNode } = this.state
    const nextNode: Node<NV> = answer ? currentNode.right : currentNode.left
    // console.log(flagPathsSubTree(nextNode))
    console.log(nextNode)
    if (nextNode.isLeaf()) {
      console.log(nextNode.value.flagPaths)
      this.setState({
        stage: Stage.End
      })
      // zmien stan na end, zebyw  pasku pojawilo sie pytanie o ponowna gre
      // wyswietl modal z wynikami
    } else {
      this.setState({
        currentNode: nextNode
      })
    }
  }

  public render() {
    const { flags, currentNode, isFlagSelected, stage } = this.state

    return (
      <section className="app-container">
        <TopNav
          question={currentNode.value.question}
          stage={stage}
          selectedAnswer={this.selectedAnswer}
        />
        <Flags flags={Object.values(flags)} selectedFlag={this.selectedFlag} />
      </section>
    )
  }
}

export default App

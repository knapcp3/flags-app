import React, { Component, KeyboardEvent } from 'react'
import { Icon } from 'antd'
import Flags from './Flags/Flags'
import TopNav from './TopNav/TopNav'
import Modal from './Modal/Modal'
import Flag from './../models/Flag.model'
import NV from '../models/NodeValue.model'
import { importAll } from './../modules/helpers'
import FT from '../FlagsTree/FlagsTree'
import Node from './../modules/Node'
import Stage from './../modules/Stage'
import { flagPathsSubTree } from './../modules/helpers'
import './app.scss'

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
      flags,
      currentNode: FT.root,
      stage: Stage.FlagSelecting,
      finalFlags: null
    }
  }

  public onSelectedFlag = (path: string) => {
    const selected = this.state.flags[path]
    selected.setIsSelected(true)
    this.setState({
      stage: Stage.Questions
    })
  }

  public onSelectedAnswer = (answer: boolean) => {
    const { currentNode, stage, flags } = this.state
    if (stage !== Stage.Questions) {
      return
    }
    const nextNode: Node<NV> = answer ? currentNode.right : currentNode.left

    App.rejectFlags(flags, nextNode)

    if (nextNode.isLeaf()) {
      this.setState({
        stage: Stage.End,
        finalFlags: nextNode.value.flagPaths
      })
    } else {
      this.setState({
        currentNode: nextNode
      })
    }
  }

  private static rejectFlags(flags: Flag[], node: Node<NV>) {
    const nextFlagsLeft: string[] = flagPathsSubTree(node)

    Object.entries<Flag>(flags).forEach(([path, flag]) => {
      if (!nextFlagsLeft.includes(path)) {
        flag.setIsRejected(true)
      }
    })
  }

  public onFinalFlagsClose = () => {
    this.setState({ finalFlags: null })
  }

  public handleKeyAnswer = (e: KeyboardEvent) => {
    if (e.key === 'n') {
      this.onSelectedAnswer(false)
    } else if (e.key === 'y') {
      this.onSelectedAnswer(true)
    }
  }

  public handleReset = () => {
    const { flags } = this.state
    Object.entries<Flag>(flags).forEach(([_, flag]) => {
      flag.reset()
    })

    this.setState({
      currentNode: FT.root,
      stage: Stage.FlagSelecting,
      finalFlags: null
    })
  }

  public render() {
    const { flags, finalFlags, currentNode, stage } = this.state

    return (
      <section
        className="app-container"
        tabIndex={0}
        onKeyDown={this.handleKeyAnswer}
      >
        <TopNav
          question={currentNode.value.question}
          stage={stage}
          onSelectedAnswer={this.onSelectedAnswer}
          reset={this.handleReset}
        />
        <Flags
          flags={Object.values(flags)}
          finalFlags={finalFlags}
          onFinalFlagsClose={this.onFinalFlagsClose}
          stage={stage}
          onSelectedFlag={this.onSelectedFlag}
        />
      </section>
    )
  }
}

export default App

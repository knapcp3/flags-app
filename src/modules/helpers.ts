import Node from './../modules/Node'
import NV from './../models/NodeValue.model'

export function importAll(r: any) {
  return r.keys().map(r)
}

export const flagPathsSubTree = (node: Node<NV>): any => {
  const { left, right, value } = node
  const { flagPaths } = value
  if (left != null && right != null) {
    const LR = flagPathsSubTree(left).concat(flagPathsSubTree(right))
    return (flagPaths || []).concat(LR)
  } else if (left == null && node.right == null) {
    return flagPaths || []
  } else if (left != null) {
    return (flagPaths || []).concat(flagPathsSubTree(left))
  } else {
    return (flagPaths || []).concat(flagPathsSubTree(right!))
  }
}

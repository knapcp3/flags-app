import BinaryTree from '../modules/BinaryTree'
import Node from '../modules/Node'
import NV from '../models/NodeValue.model'
import { tx1, tx2, tx3, tx4 } from './t11'

const t1half = new Node<NV>(
  {
    question:
      'Czy flaga zawiera czerwony i bialy oraz nie zawiera białych gwiazd?'
  },
  tx1,
  tx2
)

const t2half = new Node<NV>(
  {
    question:
      'Czy flaga zawiera odcien czerwonego oraz nie zawiera czerwonego krzyża?'
  },
  tx3,
  tx4
)

const bt: BinaryTree<NV> = new BinaryTree(
  new Node<NV>(
    {
      question:
        'Czy flaga zawiera odcień niebieskiego lub granatowego i zawiera mniej niż 7 gwiazd 5-cio ramiennych?'
    },
    t1half,
    t2half
  )
)

export default bt

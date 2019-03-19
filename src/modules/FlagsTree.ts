import BinaryTree from './../modules/BinaryTree'
import Node from './../modules/Node'
import NV from './../models/NodeValue.model'

const bt: BinaryTree<NV> = new BinaryTree(
  new Node<NV>(
    {
      question:
        'Czy flaga zawiera odcień niebieskiego lub granatowego i zawiera mniej niż 7 gwiazd 5-cio ramiennych?'
    },
    new Node<NV>(
      {
        question:
          'Czy flaga zawiera czerwony i bialy oraz nie zawiera białych gwiazd?'
      },
      new Node<NV>({ flagPaths: ['g1', 'g2'] }, null, null),
      new Node<NV>({ flagPaths: ['s1', 's2'] }, null, null)
    ),
    new Node<NV>(
      {
        // question:
        //   'Czy flaga zawiera odcien czerwonego oraz nie zawiera czerwonego krzyża?',
        flagPaths: ['f1', 'f2', 'f3']
      },
      null,
      null
    )
  )
)

export default bt

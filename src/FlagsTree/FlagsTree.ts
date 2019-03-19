import BinaryTree from '../modules/BinaryTree'
import Node from '../modules/Node'
import NV from '../models/NodeValue.model'
import { t1, t2 } from './t01'

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
      new Node<NV>(
        {
          question:
            'Czy flaga zawiera żółty lub złoty oraz nie zawiera białych gwiazd?'
        },
        new Node<NV>(
          {
            question: 'Czy flaga zawiera gwiazdy?'
          },
          new Node<NV>(
            {
              question:
                'Czy flaga zawiera dokładnie 3 paski poziome lub 3 pionowe?'
            },
            t1,
            null
          ),
          null
        ),
        null
      ),
      new Node<NV>({ question: '' }, null, null)
    ),
    new Node<NV>(
      {
        question:
          'Czy flaga zawiera odcien czerwonego oraz nie zawiera czerwonego krzyża?'
      },
      null,
      null
    )
  )
)

export default bt

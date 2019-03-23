import BinaryTree from '../modules/BinaryTree'
import Node from '../modules/Node'
import NV from '../models/NodeValue.model'
import { tx1, tx2, tx3, tx4 } from './t11'
import { t17, t18 } from './t00'
// import { t09, t10, t11, t12, t13, t14, t15, t16 } from './t00'
// import { t01, t02, t03, t04, t05, t06, t07, t08 } from './t00'

const t1half = new Node<NV>(
  {
    question:
      'Czy flaga zawiera czerwony i bialy oraz nie zawiera białych gwiazd?'
  },
  tx1,
  tx2
)

const bt: BinaryTree<NV> = new BinaryTree(
  new Node<NV>(
    {
      question:
        'Czy flaga zawiera odcień niebieskiego lub granatowego i zawiera mniej niż 7 gwiazd 5-cio ramiennych?'
    },
    t1half,
    new Node<NV>(
      {
        question:
          'Czy flaga zawiera odcien czerwonego oraz nie zawiera czerwonego krzyża?'
      },
      new Node<NV>(
        {
          question: 'Czy flaga zawiera żółty lub złoty kolor?'
        },
        new Node<NV>(
          {
            question: 'Czy flaga zawiera krzyż?'
          },
          new Node<NV>(
            {
              question: 'Czy flaga zawiera dokładnie 1 biały poziomy pasek?'
            },
            t17,
            t18
          ),
          null
        ),
        null
      ),
      null
    )
  )
)

export default bt

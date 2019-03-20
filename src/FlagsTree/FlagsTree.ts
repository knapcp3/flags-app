import BinaryTree from '../modules/BinaryTree'
import Node from '../modules/Node'
import NV from '../models/NodeValue.model'
import { tx1, tx2, tx3, tx4 } from './t11'
import { t09 } from './t00';
// import { t01, t02, t03, t04, t05, t06, t07, t08 } from './t00'

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
      tx1,
      new Node<NV>(
        {
          question: 'Czy flaga zawiera gwiazdę, krzyż lub okrąg?'
        },
        new Node<NV>(
          {
            question: 'Czy flaga zawiera kolor czarny?'
          },
          new Node<NV>(
            {
              question: 'Czy flaga zawiera kolor zielony?'
            },
            t09,
            null
          ),
          null
        ),
        null
      )
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

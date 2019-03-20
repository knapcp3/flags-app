import BinaryTree from '../modules/BinaryTree'
import Node from '../modules/Node'
import NV from '../models/NodeValue.model'
import { t01, t02, t03, t04, t05, t06, t07, t08 } from './t00'

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
            t01,
            t02
          ),
          new Node<NV>(
            {
              question: 'Czy flaga zawiera 1 gwiazdę lub 2 gwiazdy lub krzyż?'
            },
            t03,
            t04
          )
        ),
        new Node<NV>(
          {
            question: 'Czy flaga zawiera gwiazdy?'
          },
          new Node<NV>(
            {
              question: 'Czy flaga zawiera zielony pasek?'
            },
            t05,
            t06
          ),
          new Node<NV>(
            {
              question:
                'Czy flaga zawiera jedną gwiazdę oraz nie zawiera księżyca?'
            },
            t07,
            t08
          )
        )
      ),
      null
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

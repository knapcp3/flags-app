import Node from '../modules/Node'
import NV from '../models/NodeValue.model'
import {
  t01,
  t02,
  t03,
  t04,
  t05,
  t06,
  t07,
  t08,
  t09,
  t10,
  t11,
  t12,
  t13,
  t14,
  t15,
  t16,
  t17,
  t18,
  t19,
  t20,
  t21,
  t22,
  t23,
  t24,
  t25,
  t26,
  t27,
  t28,
  t29,
  t30,
  t31,
  t32
} from './t00'

const tx1 = new Node<NV>(
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
        question: 'Czy flaga zawiera dokładnie 3 paski poziome lub 3 pionowe?'
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
        question: 'Czy flaga zawiera jedną gwiazdę oraz nie zawiera księżyca?'
      },
      t07,
      t08
    )
  )
)

const tx2 = new Node<NV>(
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
      t10
    ),
    new Node<NV>(
      {
        question: 'Czy flaga zawiera dokładnie 3 poziome paski?'
      },
      t11,
      t12
    )
  ),
  new Node<NV>(
    {
      question: 'Czy flaga zawiera gwiazdę?'
    },
    new Node<NV>(
      {
        question: 'Czy flaga zawiera krzyż?'
      },
      t13,
      t14
    ),
    new Node<NV>(
      {
        question: 'Czy flaga zawiera dokładnie 1 gwiazdę?'
      },
      t15,
      t16
    )
  )
)

const tx3 = null

const tx4 = null

export { tx1, tx2, tx3, tx4 }

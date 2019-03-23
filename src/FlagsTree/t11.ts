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

const tx3 = new Node<NV>(
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
    new Node<NV>(
      {
        question: 'Czy flaga zawiera krzyż św. Jerzego?'
      },
      t19,
      t20
    )
  ),
  new Node<NV>(
    {
      question: 'Czy flaga zawiera krzyż lub białe gwiazdy?'
    },
    new Node<NV>(
      {
        question: 'Czy flaga zawiera poziome paski?'
      },
      t21,
      t22
    ),
    new Node<NV>(
      {
        question: 'Czy flaga zawiera ciemnoniebieskie tło oraz czerwony krzyż?'
      },
      t23,
      t24
    )
  )
)

const tx4 = new Node<NV>(
  {
    question: 'Czy flaga zawiera żółty lub złoty kolor bez krzyża?'
  },
  new Node<NV>(
    {
      question: 'Czy flaga zawiera gwiazdę lub kształt tarczy lub herbu?'
    },
    new Node<NV>(
      {
        question: 'Czy flaga składa się tylko i wyłącznie z poziomych pasków?'
      },
      t25,
      t26
    ),
    new Node<NV>(
      {
        question: 'Czy flaga zawiera 5-cio ramienną gwiazdę?'
      },
      t27,
      t28
    )
  ),
  new Node<NV>(
    {
      question: 'Czy flaga zawiera gwiazdę lub ptaka?'
    },
    new Node<NV>(
      {
        question: 'Czy flaga zawiera biały kolor?'
      },
      t29,
      t30
    ),
    new Node<NV>(
      {
        question: 'Czy flaga zawiera żółtą lub złotą gwiazdę?'
      },
      t31,
      t32
    )
  )
)

export { tx1, tx2, tx3, tx4 }

import NV from '../models/NodeValue.model'
import Node from '../modules/Node'

const t1 = new Node<NV>(
  {
    question: 'Czy flaga zawiera biały kolor?'
  },
  new Node<NV>(
    {
      question: 'Czy flaga zawiera figurę w kształcie okręgu?'
    },
    new Node<NV>(
      {
        question: 'Czy flaga zawiera zielony kolor?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/albanian-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/libyan-flag']
        },
        null,
        null
      )
    ),
    new Node<NV>(
      {
        flagPaths: ['img/bangladeshi-flag']
      },
      null,
      null
    )
  ),
  new Node<NV>(
    {
      question: 'Czy flaga zawiera kolor pomarańczowy?'
    },
    new Node<NV>(
      {
        question: 'Czy flaga zawiera szablę?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/qatar-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/saudi_arabian-flag']
        },
        null,
        null
      )
    ),
    new Node<NV>(
      {
        flagPaths: ['img/cypriot-flag']
      },
      null,
      null
    )
  )
)

const t2 = null

export { t1, t2 }

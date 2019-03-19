import NV from '../models/NodeValue.model'
import Node from '../modules/Node'

const t01 = new Node<NV>(
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

const t02 = new Node<NV>(
  {
    question: 'Czy flaga zawiera biały pionowy pasek?'
  },
  new Node<NV>(
    {
      question: 'Czy flaga zawiera biały poziomy pasek?'
    },
    new Node<NV>(
      {
        question: 'Czy flaga zawiera orła?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/malawi-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/zambian-flag']
        },
        null,
        null
      )
    ),
    new Node<NV>(
      {
        question: 'Czy flaga zawiera czarny?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/niger-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/latvian-flag']
        },
        null,
        null
      )
    )
  ),
  new Node<NV>(
    {
      question: 'Czy flaga zawiera dokładnie 2 zielone paski?'
    },
    new Node<NV>(
      {
        question: 'Czy flaga zawiera zielony pasek po prawej stronie?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/irish-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: [`img/cote_d'ivoire-flag`]
        },
        null,
        null
      )
    ),
    new Node<NV>(
      {
        question: 'Czy flaga zawiera symbol drzewa?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/nigerian-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/norfolk_island-flag']
        },
        null,
        null
      )
    )
  )
)

const t03 = null

const t04 = null

export { t01, t02, t03, t04 }

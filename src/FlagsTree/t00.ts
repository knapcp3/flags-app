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

const t03 = new Node<NV>(
  {
    question: 'Czy flaga zawiera odcień niebieskiego oraz nie zawiera księzyca?'
  },
  new Node<NV>(
    {
      question: 'Czy flaga zawiera księżyc zwrócony w prawo?'
    },
    new Node<NV>(
      {
        question: 'Czy flaga zawiera księżyc?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/papua_new_guinea-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/turkmenistan-flag']
        },
        null,
        null
      )
    ),
    new Node<NV>(
      {
        question: 'Czy flaga zawiera dokładnie 5 gwiazd?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/uzbekistan-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/singapore-flag']
        },
        null,
        null
      )
    )
  ),
  new Node<NV>(
    {
      question: 'Czy flaga zawiera zółty kolor?'
    },
    new Node<NV>(
      {
        question: 'Czy flaga zawiera czerwone paski?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/burman-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/united_states_america-flag']
        },
        null,
        null
      )
    ),
    new Node<NV>(
      {
        question: 'Czy flaga zawiera czerwony kolor?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/venezuelan-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/bosnia_and_herzegovina-flag']
        },
        null,
        null
      )
    )
  )
)

const t04 = new Node<NV>(
  {
    question: 'Czy flaga zawiera dokładnie 1 białą gwiazdę?'
  },
  new Node<NV>(
    {
      question: 'Czy flaga zawiera dokładnie 2 gwiazdy?'
    },
    new Node<NV>(
      {
        question: 'Czy flaga zawiera dokładnie 1 gwiazdę?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/cook_islands-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/morocco-flag']
        },
        null,
        null
      )
    ),
    new Node<NV>(
      {
        question: 'Czy flaga zawiera 5-cio ramienne gwiazdy?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/nepalese-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/saint_kitts_and_nevis-flag']
        },
        null,
        null
      )
    )
  ),
  new Node<NV>(
    {
      question: 'Czy flaga zawiera księżyc?'
    },
    new Node<NV>(
      {
        question: 'Czy flaga zawiera czarny kolor?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/togo-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/east_timor-flag']
        },
        null,
        null
      )
    ),
    new Node<NV>(
      {
        question: 'Czy flaga zawiera biały pasek?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/turkish-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/pakistani-flag']
        },
        null,
        null
      )
    )
  )
)

const t05 = new Node<NV>(
  {
    question: 'Czy flaga zawiera okrąg lub krzyż?'
  },
  new Node<NV>(
    {
      question: 'Czy flaga zawiera ukośny pasek?'
    },
    new Node<NV>(
      {
        question: 'Czy flaga zawiera pionowe paski?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/german-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/belgian-flag']
        },
        null,
        null
      )
    ),
    new Node<NV>(
      {
        flagPaths: ['img/congo_republic_of-flag']
      },
      null,
      null
    )
  ),
  new Node<NV>(
    {
      question: 'Czy flaga zawiera okrąg?'
    },
    new Node<NV>(
      {
        flagPaths: ['img/jamaican-flag']
      },
      null,
      null
    ),
    new Node<NV>(
      {
        question: 'Czy flaga zawiera całe żółte koło?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/kyrgyzstan-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/macedonian-flag']
        },
        null,
        null
      )
    )
  )
)

const t06 = null

const t07 = null

const t08 = null

export { t01, t02, t03, t04, t05, t06, t07, t08 }

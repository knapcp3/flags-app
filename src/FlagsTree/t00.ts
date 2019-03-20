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

const t06 = new Node<NV>(
  {
    question: 'Czy flaga zawiera poziomy, zielony pasek?'
  },
  new Node<NV>(
    {
      question: 'Czy flaga zawiera dokładnie 3 pionowe paski?'
    },
    new Node<NV>(
      {
        question: 'Czy flaga zawiera symbol lwa?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/benin-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/sri_lankan-flag']
        },
        null,
        null
      )
    ),
    new Node<NV>(
      {
        question: 'Czy flaga zawiera czerwony pasek po lewej stronie?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/malian-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/guinea-flag']
        },
        null,
        null
      )
    )
  ),
  new Node<NV>(
    {
      question: 'Czy flaga zawiera czarny kolor?'
    },
    new Node<NV>(
      {
        question: 'Czy flaga zawiera żółty kolor na samej górze?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/bolivian-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/lithuanian-flag']
        },
        null,
        null
      )
    ),
    new Node<NV>(
      {
        flagPaths: ['img/vanuatu-flag']
      },
      null,
      null
    )
  )
)

const t07 = new Node<NV>(
  {
    question: 'Czy flaga zawiera dokładnie 5 gwiazd?'
  },
  new Node<NV>(
    {
      question: 'Czy flaga zawiera czarne gwiazdy?'
    },
    new Node<NV>(
      {
        question: 'Czy flaga zawiera księżyc?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/grenadan-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/mauritanian-flag']
        },
        null,
        null
      )
    ),
    new Node<NV>(
      {
        flagPaths: ['img/sao_tome_and_principe-flag']
      },
      null,
      null
    )
  ),
  new Node<NV>(
    {
      question: 'Czy flaga zawiera księżyc?'
    },
    new Node<NV>(
      {
        question: 'Czy flaga zawiera kolor czerwony?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/macau-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/chinese-flag']
        },
        null,
        null
      )
    ),
    new Node<NV>(
      {
        flagPaths: ['img/cocos_(keeling)_islands-flag']
      },
      null,
      null
    )
  )
)

const t08 = new Node<NV>(
  {
    question: 'Czy flaga zawiera żółtą gwiazdę?'
  },
  new Node<NV>(
    {
      question: 'Czy flaga zawiera czarną gwiazdę?'
    },
    new Node<NV>(
      {
        question: 'Czy flaga zawiera czerwoną gwiazdę?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/senegalese-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/french_guiana-flag']
        },
        null,
        null
      )
    ),
    new Node<NV>(
      {
        question: 'Czy flaga zawiera gwiazdę na samym środku?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/guinea-bissau-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/ghana-flag']
        },
        null,
        null
      )
    )
  ),
  new Node<NV>(
    {
      question: 'Czy flaga zawiera dokładnie 2 poziome paski?'
    },
    new Node<NV>(
      {
        question: 'Czy flaga zawiera pionowe paski?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/vietnamese-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/cameroon-flag']
        },
        null,
        null
      )
    ),
    new Node<NV>(
      {
        question: 'Czy gwiazda jest jedynym symbolem na fladze?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/angolan-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/burkina_faso-flag']
        },
        null,
        null
      )
    )
  )
)

const t09 = new Node<NV>(
  {
    question: 'Czy flaga zawiera dokładnie 2 lub 3 poziome paski?'
  },
  new Node<NV>(
    {
      question: 'Czy flaga zawiera symbol na środku?'
    },
    new Node<NV>(
      {
        question: 'Czy flaga zawiera dokładnie 3 paski?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/bahrain-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/peru-flag']
        },
        null,
        null
      )
    ),
    new Node<NV>(
      {
        question: 'Czy flaga zawiera liść klonu?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/hong_kong-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/canada-flag']
        },
        null,
        null
      )
    )
  ),
  new Node<NV>(
    {
      question: 'Czy flaga zawiera biały pasek na samym dole i czerwony na samej górze?'
    },
    new Node<NV>(
      {
        question: 'Czy flaga zawiera dokładnie 2 paski?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/austrian-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/poland-flag']
        },
        null,
        null
      )
    ),
    new Node<NV>(
      {
        flagPaths: ['img/indonesian-flag', 'img/monaco-flag']
      },
      null,
      null
    )
  )
)

const t10 = null
const t11 = null
const t12 = null
const t13 = null
const t14 = null
const t15 = null
const t16 = null


const t17 = null
const t18 = null
const t19 = null
const t20 = null
const t21 = null
const t22 = null
const t23 = null
const t24 = null


const t25 = null
const t26 = null
const t27 = null
const t28 = null
const t29 = null
const t30 = null
const t31 = null
const t32 = null

export {
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
}

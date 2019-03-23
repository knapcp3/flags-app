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
          question: 'Czy flaga zawiera dokładnie 5 gwiazd?'
        },
        new Node<NV>(
          {
            flagPaths: ['img/abkhazian-flag']
          },
          null,
          null
        ),
        new Node<NV>(
          {
            flagPaths: ['img/papua_new_guinea-flag']
          },
          null,
          null
        )
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
          question: 'Czy flaga zawiera zielony kolor?'
        },
        new Node<NV>(
          {
            flagPaths: ['img/bosnia_and_herzegovina-flag']
          },
          null,
          null
        ),
        new Node<NV>(
          {
            flagPaths: ['img/brazilian-flag']
          },
          null,
          null
        )
      ),
      new Node<NV>(
        {
          flagPaths: ['img/venezuelan-flag']
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
      question:
        'Czy flaga zawiera biały pasek na samym dole i czerwony na samej górze?'
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

const t10 = new Node<NV>(
  {
    question: 'Czy flaga zawiera dokładnie 3 poziome paski?'
  },
  new Node<NV>(
    {
      question: 'Czy flaga zawiera dokładnie 2 poziome paski?'
    },
    new Node<NV>(
      {
        question: 'Czy flaga zawiera księżyc?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/italian-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/maldives-flag']
        },
        null,
        null
      )
    ),
    new Node<NV>(
      {
        question: 'Czy flaga zawiera czerwony wzór na białym pasku?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/madagascar-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/belarusian-flag']
        },
        null,
        null
      )
    )
  ),
  new Node<NV>(
    {
      question: 'Czy flaga zawiera symbol na środku?'
    },
    new Node<NV>(
      {
        question: 'Czy flaga zawiera biały pasek na środku?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/bulgarian-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/hungarian-flag']
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
          flagPaths: ['img/iranian-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/lebanese-flag']
        },
        null,
        null
      )
    )
  )
)

const t11 = new Node<NV>(
  {
    question: 'Czy flaga zawiera 3 lub więcej pasków?'
  },
  new Node<NV>(
    {
      question: 'Czy flaga zawiera smoka?'
    },
    new Node<NV>(
      {
        question: 'Czy flaga zawiera zamek?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/guyanan-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/gibraltar-flag']
        },
        null,
        null
      )
    ),
    new Node<NV>(
      {
        question: 'Czy flaga zawiera czerwonego smoka?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/bhutan-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/welsh-flag']
        },
        null,
        null
      )
    )
  ),
  new Node<NV>(
    {
      question: 'Czy flaga zawiera dokładnie 3 pionowe paski?'
    },
    new Node<NV>(
      {
        question: 'Czy flaga zawiera zielony kolor?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/trinidad_and_tobago-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/kenyan-flag']
        },
        null,
        null
      )
    ),
    new Node<NV>(
      {
        question: 'Czy flaga zawiera biały pasek na środku?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/afghanistan-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/mexican-flag']
        },
        null,
        null
      )
    )
  )
)

const t12 = new Node<NV>(
  {
    question: 'Czy flaga zawiera trójkąt lub trapez?'
  },
  new Node<NV>(
    {
      question: 'Czy flaga zawiera symbol na środku?'
    },
    new Node<NV>(
      {
        question: 'Czy flaga zawiera dokładnie 3 kolory?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/united_arab_emirates-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/yemen-flag']
        },
        null,
        null
      )
    ),
    new Node<NV>(
      {
        question: 'Czy flaga zawiera żółty lub złoty symbol?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/iraqi-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/egyptian-flag']
        },
        null,
        null
      )
    )
  ),
  new Node<NV>(
    {
      question: 'Czy flaga zawiera trójkąt?'
    },
    new Node<NV>(
      {
        flagPaths: ['img/kuwaiti-flag']
      },
      null,
      null
    ),
    new Node<NV>(
      {
        question: 'Czy flaga zawiera czerwony trójkąt?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/sudanese-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/palestine-flag']
        },
        null,
        null
      )
    )
  )
)

const t13 = new Node<NV>(
  {
    question: 'Czy flaga zawiera tylko kolory czerwony i biały?'
  },
  new Node<NV>(
    {
      question: 'Czy flaga zawiera czarny pasek?'
    },
    new Node<NV>(
      {
        question: 'Czy flaga zawiera kształt tarczy/herbu?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/oman-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/portugal-flag']
        },
        null,
        null
      )
    ),
    new Node<NV>(
      {
        question: 'Czy flaga zawiera dokładnie 1 czarny pasek?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/ugandan-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/brunei-flag']
        },
        null,
        null
      )
    )
  ),
  new Node<NV>(
    {
      question: 'Czy flaga zawiera okrąg na samym środku?'
    },
    new Node<NV>(
      {
        flagPaths: ['img/greenland-flag']
      },
      null,
      null
    ),
    new Node<NV>(
      {
        flagPaths: ['img/japanese-flag']
      },
      null,
      null
    )
  )
)

const t14 = new Node<NV>(
  {
    question: 'Czy flaga zawiera krzyż wypełniony czerwonym kolorem?'
  },
  new Node<NV>(
    {
      question: 'Czy flaga zawiera biały krzyż?'
    },
    new Node<NV>(
      {
        question: 'Czy flaga zawiera kolor żółty?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/maltese-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/vatican_city-flag']
        },
        null,
        null
      )
    ),
    new Node<NV>(
      {
        question: 'Czy flaga zawiera krzyż skandynawski?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/switzerland-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/denmark-flag']
        },
        null,
        null
      )
    )
  ),
  new Node<NV>(
    {
      question: 'Czy flaga zawiera dokładnie 1 krzyż?'
    },
    new Node<NV>(
      {
        question: 'Czy flaga zawiera dokładnie 2 krzyże?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/georgian-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/guernsey-flag']
        },
        null,
        null
      )
    ),
    new Node<NV>(
      {
        question: 'Czy flaga zawiera tylko czerwony i biały?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/jersey-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          question: 'Czy flaga zawiera grecki krzyż?'
        },
        new Node<NV>(
          {
            flagPaths: ['img/english-flag']
          },
          null,
          null
        ),
        new Node<NV>(
          {
            flagPaths: ['img/tongan-flag']
          },
          null,
          null
        )
      )
    )
  )
)

const t15 = new Node<NV>(
  {
    question: 'Czy flaga zawiera żółte lub złote gwiazdy?'
  },
  new Node<NV>(
    {
      question: 'Czy flaga zawiera 2 gwiazdy lub 3 gwiazdy?'
    },
    new Node<NV>(
      {
        question: 'Czy flaga zawiera białe gwiazdy?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/dominica-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/abkhazian-flag']
        },
        null,
        null
      )
    ),
    new Node<NV>(
      {
        question: 'Czy flaga zawiera gwiazdy 5-cio ramienne?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/burundi-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/syrian-flag']
        },
        null,
        null
      )
    )
  ),
  new Node<NV>(
    {
      question: 'Czy flaga zawiera krzyż?'
    },
    new Node<NV>(
      {
        question: 'Czy flaga zawiera koronę?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/cape_verde-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/tajikistan-flag']
        },
        null,
        null
      )
    ),
    new Node<NV>(
      {
        flagPaths: ['img/tuvalu-flag']
      },
      null,
      null
    )
  )
)

const t16 = new Node<NV>(
  {
    question: 'Czy flaga zawiera czerwoną gwiazdę?'
  },
  new Node<NV>(
    {
      question: 'Czy flaga zawiera białą gwiazdę?'
    },
    new Node<NV>(
      {
        question: 'Czy flaga zawiera kolor czarny?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/suriname-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/mozambique-flag']
        },
        null,
        null
      )
    ),
    new Node<NV>(
      {
        flagPaths: ['img/jordanian-flag']
      },
      null,
      null
    )
  ),
  new Node<NV>(
    {
      question: 'Czy flaga zawiera 3 lub mniej kolory?'
    },
    new Node<NV>(
      {
        question: 'Czy flaga zawiera księżyc?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/zimbabwean-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/western-sahara-flag']
        },
        null,
        null
      )
    ),
    new Node<NV>(
      {
        question: 'Czy flaga zawiera dokładnie 2 kolory?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/algerian-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/tunisian-flag']
        },
        null,
        null
      )
    )
  )
)

const t17 = new Node<NV>(
  {
    question: 'Czy flaga zawiera kolor zielony?'
  },
  new Node<NV>(
    {
      question: 'Czy flaga zawiera 5-cio ramienną gwiazdę?'
    },
    new Node<NV>(
      {
        question: 'Czy flaga zawiera czarny kolor?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/israeli-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/botswanan-flag']
        },
        null,
        null
      )
    ),
    new Node<NV>(
      {
        question: 'Czy flaga zawiera dokładnie 1 gwiazdę?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/micronesian-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/somalian-flag']
        },
        null,
        null
      )
    )
  ),
  new Node<NV>(
    {
      question: 'Czy flaga zawiera czerwoną gwiazdę?'
    },
    new Node<NV>(
      {
        flagPaths: ['img/marshall_islands-flag']
      },
      null,
      null
    ),
    new Node<NV>(
      {
        flagPaths: ['img/djibouti-flag']
      },
      null,
      null
    )
  )
)

const t18 = new Node<NV>(
  {
    question: 'Czy flaga zawiera zielony pasek?'
  },
  new Node<NV>(
    {
      question: 'Czy flaga zawiera mniej lub równo 3 kolory?'
    },
    new Node<NV>(
      {
        question: 'Czy flaga zawiera mewę?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/nicaraguan-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/midway_islands-flag']
        },
        null,
        null
      )
    ),
    new Node<NV>(
      {
        question: 'Czy flaga zawiera gwiazdy?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/estonian-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/honduran-flag']
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
        question: 'Czy flaga zawiera okraŋ?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/sierra_leone-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/indian-flag']
        },
        null,
        null
      )
    ),
    new Node<NV>(
      {
        flagPaths: ['img/lesotho-flag']
      },
      null,
      null
    )
  )
)

const t19 = new Node<NV>(
  {
    question: 'Czy flaga zawiera czerwony krzyż?'
  },
  new Node<NV>(
    {
      question: 'Czy flaga zawiera biały i prosty krzyż?'
    },
    new Node<NV>(
      {
        question: 'Czy flaga zawiera biały krzyż?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/finnish-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/scottish-flag']
        },
        null,
        null
      )
    ),
    new Node<NV>(
      {
        question: 'Czy flaga zawiera niebieskie paski?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/martinique-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/greece-flag']
        },
        null,
        null
      )
    )
  ),
  new Node<NV>(
    {
      question: 'Czy flaga zawiera prosty(prostopadły) krzyż?'
    },
    new Node<NV>(
      {
        flagPaths: ['img/wallis_and_futuna-flag']
      },
      null,
      null
    ),
    new Node<NV>(
      {
        question: 'Czy flaga zawiera biały krzyż?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/faroe_islands-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/icelandic-flag']
        },
        null,
        null
      )
    )
  )
)

const t20 = new Node<NV>(
  {
    question: 'Czy flaga zawiera gwiazdy?'
  },
  new Node<NV>(
    {
      question: 'Czy flaga zawiera owcę lub barana?'
    },
    new Node<NV>(
      {
        question: 'Czy flaga zawiera kształt herbu lub tarczy?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/united_kingdom-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/bermudan-flag']
        },
        null,
        null
      )
    ),
    new Node<NV>(
      {
        flagPaths: ['img/falkland_islands-flag']
      },
      null,
      null
    )
  ),
  new Node<NV>(
    {
      question: 'Czy flaga zawiera gwiazdy wypełnione białym kolorem?'
    },
    new Node<NV>(
      {
        flagPaths: ['img/new_zealand-flag']
      },
      null,
      null
    ),
    new Node<NV>(
      {
        flagPaths: ['img/australian-flag']
      },
      null,
      null
    )
  )
)

const t21 = new Node<NV>(
  {
    question: 'Czy flaga zawiera kolor czarny?'
  },
  new Node<NV>(
    {
      question: 'Czy flaga zawiera jednokolorowe, niebieskie tło?'
    },
    new Node<NV>(
      {
        flagPaths: ['img/saint_vincent_and_the_grenadines-flag']
      },
      null,
      null
    ),
    new Node<NV>(
      {
        question: 'Czy flaga zawiera ptaka?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/palau-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/kazakhstan-flag']
        },
        null,
        null
      )
    )
  ),
  new Node<NV>(
    {
      question: 'Czy flaga zawiera pionowe paski?'
    },
    new Node<NV>(
      {
        question: 'Czy flaga zawiera zielony?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/saint_lucia-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/tanzanian-flag']
        },
        null,
        null
      )
    ),
    new Node<NV>(
      {
        question: 'Czy flaga zawiera biały kolor?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/barbados-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/guatemalan-flag']
        },
        null,
        null
      )
    )
  )
)

const t22 = new Node<NV>(
  {
    question: 'Czy flaga zawiera symbol słońca?'
  },
  new Node<NV>(
    {
      question: 'Czy flaga zawiera dokładnie 2 niebieskie paski?'
    },
    new Node<NV>(
      {
        question: 'Czy flaga zawiera dokładnie 2 kolory?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/gabon-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/ukranian-flag']
        },
        null,
        null
      )
    ),
    new Node<NV>(
      {
        question: 'Czy flaga zawiera czarny trójkąt?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/el_salvador-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/bahaman-flag']
        },
        null,
        null
      )
    )
  ),
  new Node<NV>(
    {
      question: 'Czy flaga zawiera symbol słońca z twarzą?'
    },
    new Node<NV>(
      {
        question: 'Czy flaga zawiera czarny kolor?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/rwandan-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/guadeloupe-flag']
        },
        null,
        null
      )
    ),
    new Node<NV>(
      {
        question: 'Czy flaga zawiera dokładnie 2 niebieskie paski?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/uruguayan-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/argentinian-flag']
        },
        null,
        null
      )
    )
  )
)

const t23 = new Node<NV>(
  {
    question: 'Czy flaga zawiera gwiazdy?'
  },
  new Node<NV>(
    {
      question: 'Czy flaga zawiera czerwony krzyż?'
    },
    new Node<NV>(
      {
        question: 'Czy flaga zawiera krzyż skandynawski?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/san_marino-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/swedish-flag']
        },
        null,
        null
      )
    ),
    new Node<NV>(
      {
        question: 'Czy flaga zawiera dokładnie 1 krzyż?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/fiji-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/british_indian_ocean_territory-flag']
        },
        null,
        null
      )
    )
  ),
  new Node<NV>(
    {
      question: 'Czy flaga zawiera dokładnie 5 gwiazd?'
    },
    new Node<NV>(
      {
        question: 'Czy flaga zawiera dokładnie 1 gwiazdę?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/tokelau-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/nauru-flag']
        },
        null,
        null
      )
    ),
    new Node<NV>(
      {
        question: 'Czy flaga zawiera czerwony krzyż?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/christmas_island-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/niue-flag']
        },
        null,
        null
      )
    )
  )
)

const t24 = new Node<NV>(
  {
    question: 'Czy flaga zawiera nielatające zwierzęta?'
  },
  new Node<NV>(
    {
      question: 'Czy flaga zawiera istotę ludzką?'
    },
    new Node<NV>(
      {
        question: 'Czy flaga zawiera statek?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/pitcairn_islands-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/saint_helena-flag']
        },
        null,
        null
      )
    ),
    new Node<NV>(
      {
        question: 'Czy flaga zawiera harfę?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/british_virgin_islands-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/montserrat-flag']
        },
        null,
        null
      )
    )
  ),
  new Node<NV>(
    {
      question: 'Czy flaga zawiera 2 lub więcej rodzajów zwierząt?'
    },
    new Node<NV>(
      {
        question: 'Czy flaga zawiera delfiny?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/turks_and_caicos_islands-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/anguillan-flag']
        },
        null,
        null
      )
    ),
    new Node<NV>(
      {
        question: 'Czy flaga zawiera żółwia?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/south_georgia_and_the_south_sandwich_islands-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/cayman_islands-flag']
        },
        null,
        null
      )
    )
  )
)

const t25 = new Node<NV>(
  {
    question: 'Czy flaga zawiera okrąg lub krzyż?'
  },
  new Node<NV>(
    {
      question: 'Czy flaga składa się tylko i wyłącznie z pionowych pasków?'
    },
    new Node<NV>(
      {
        question: 'Czy flaga zawiera symbol budowli?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/czech_republic-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/cambodian-flag']
        },
        null,
        null
      )
    ),
    new Node<NV>(
      {
        flagPaths: ['img/french-flag', 'img/mayotte-flag']
      },
      null,
      null
    )
  ),
  new Node<NV>(
    {
      question: 'Czy flaga zawiera żółty kolor?'
    },
    new Node<NV>(
      {
        question: 'Czy flaga zawiera krzyż?'
      },
      new Node<NV>(
        {
          question: 'Czy flaga zawiera białe koło?'
        },
        new Node<NV>(
          {
            flagPaths: ['img/south_korean-flag']
          },
          null,
          null
        ),
        new Node<NV>(
          {
            flagPaths: ['img/laos-flag']
          },
          null,
          null
        )
      ),
      new Node<NV>(
        {
          flagPaths: ['img/norwegian-flag']
        },
        null,
        null
      )
    ),
    new Node<NV>(
      {
        question: 'Czy flaga zawiera koronę?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/saint-pierre_and_miquelon-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/liechtenstein-flag']
        },
        null,
        null
      )
    )
  )
)

const t26 = new Node<NV>(
  {
    question: 'Czy flaga zawiera dokładnie 1 biały pasek?'
  },
  new Node<NV>(
    {
      question: 'Czy flaga zawiera zielony kolor?'
    },
    new Node<NV>(
      {
        question: 'Czy flaga zawiera czerwony pasek na środku?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/thailand-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/costa_rican-flag']
        },
        null,
        null
      )
    ),
    new Node<NV>(
      {
        question: 'Czy flaga zawiera biały kolor?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/armenian-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/gambia_the-flag']
        },
        null,
        null
      )
    )
  ),
  new Node<NV>(
    {
      question: 'Czy flaga zawiera biały pasek na środku?'
    },
    new Node<NV>(
      {
        question: 'Czy flaga zawiera czerwony pasek na górze?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/russian-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/serbian-flag']
        },
        null,
        null
      )
    ),
    new Node<NV>(
      {
        question: 'Czy flaga zawiera jasnoniebieski kolor?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/netherlands-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/luxembourg-flag']
        },
        null,
        null
      )
    )
  )
)

const t27 = new Node<NV>(
  {
    question: 'Czy flaga zawiera białą gwiazdę lub biały krzyż?'
  },
  new Node<NV>(
    {
      question: 'Czy flaga zawiera biały kolor?'
    },
    new Node<NV>(
      {
        question: 'Czy flaga zawiera niebieski pasek?'
      },
      new Node<NV>(
        {
          question: 'Czy flaga zawiera dwugłowego orła?'
        },
        new Node<NV>(
          {
            flagPaths: ['img/spanish-flag']
          },
          null,
          null
        ),
        new Node<NV>(
          {
            flagPaths: ['img/montenegro-flag']
          },
          null,
          null
        )
      ),
      new Node<NV>(
        {
          flagPaths: ['img/moldovan-flag']
        },
        null,
        null
      )
    ),
    new Node<NV>(
      {
        question: 'Czy flaga zawiera białe koło?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/andorran-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/belize-flag']
        },
        null,
        null
      )
    )
  ),
  new Node<NV>(
    {
      question: 'Czy flaga zawiera gwiazdę?'
    },
    new Node<NV>(
      {
        question: 'Czy flaga zawiera biały poziomy pasek na górze?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/dominican_republic-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/slovakian-flag']
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
          flagPaths: ['img/taiwan-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/azerbaijani-flag']
        },
        null,
        null
      )
    )
  )
)

const t28 = new Node<NV>(
  {
    question: 'Czy flaga zawiera dokładnie 1 gwiazdę?'
  },
  new Node<NV>(
    {
      question: 'Czy flaga zawiera czerwony pionowy pasek?'
    },
    new Node<NV>(
      {
        question: 'Czy flaga zawiera dokładnie 2 gwiazdy?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/samoan-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/panama-flag']
        },
        null,
        null
      )
    ),
    new Node<NV>(
      {
        question: 'Czy flaga zawiera biały pionowy pasek?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/netherlands_antilles-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/french_southern_and_antartic_lands-flag']
        },
        null,
        null
      )
    )
  ),
  new Node<NV>(
    {
      question: 'Czy flaga zawiera więcej niż 2 czerwone paski?'
    },
    new Node<NV>(
      {
        question: 'Czy flaga zawiera trójkąt?'
      },
      new Node<NV>(
        {
          question: 'Czy flaga zawiera czerwoną gwiazdę?'
        },
        new Node<NV>(
          {
            flagPaths: ['img/chilean-flag']
          },
          null,
          null
        ),
        new Node<NV>(
          {
            flagPaths: ['img/north_korean-flag']
          },
          null,
          null
        )
      ),
      new Node<NV>(
        {
          flagPaths: ['img/cuban-flag']
        },
        null,
        null
      )
    ),
    new Node<NV>(
      {
        question: 'Czy flaga zawiera trójkąt?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/liberian-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/puerto_rico-flag']
        },
        null,
        null
      )
    )
  )
)

const t29 = new Node<NV>(
  {
    question:
      'Czy flaga zawiera poziomy pasek o odcieniu niebieskiego/granatowego?'
  },
  new Node<NV>(
    {
      question: 'Czy flaga zawiera żółty/złoty pasek na środku?'
    },
    new Node<NV>(
      {
        question: 'Czy flaga zawiera zielony kolor?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/mongolian-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/eritrean-flag']
        },
        null,
        null
      )
    ),
    new Node<NV>(
      {
        flagPaths: ['img/chad-flag', 'img/romanian-flag']
      },
      null,
      null
    )
  ),
  new Node<NV>(
    {
      question: 'Czy flaga zawiera zielony kolor?'
    },
    new Node<NV>(
      {
        flagPaths: ['img/colombian-flag']
      },
      null,
      null
    ),
    new Node<NV>(
      {
        question: 'Czy flaga zawiera okrąg?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/mauritius-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/new-caledonia-flag']
        },
        null,
        null
      )
    )
  )
)

const t30 = new Node<NV>(
  {
    question: 'Czy flaga zawiera niebieski pasek?'
  },
  new Node<NV>(
    {
      question: 'Czy flaga zawiera symbol na środku?'
    },
    new Node<NV>(
      {
        question: 'Czy flaga zawiera symbol słońca?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/seychelles-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/namibian-flag']
        },
        null,
        null
      )
    ),
    new Node<NV>(
      {
        question: 'Czy flaga zawiera palmę?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/french_polynesia-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/guam-flag']
        },
        null,
        null
      )
    )
  ),
  new Node<NV>(
    {
      question: 'Czy flaga zawiera niebieski pasek na samej górze?'
    },
    new Node<NV>(
      {
        question: 'Czy flaga zawiera okrag?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/south_african-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/paraguayan-flag']
        },
        null,
        null
      )
    ),
    new Node<NV>(
      {
        question: 'Czy flaga zawiera niebieski pasek na dole?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/haitian-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/swaziland-flag']
        },
        null,
        null
      )
    )
  )
)

const t31 = new Node<NV>(
  {
    question: 'Czy flaga zawiera ptaka?'
  },
  new Node<NV>(
    {
      question: 'Czy flaga zawiera dokładnie 1 gwiazdę?'
    },
    new Node<NV>(
      {
        question: 'Czy flaga zawiera księżyc?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/solomon_islands-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/comoros-flag']
        },
        null,
        null
      )
    ),
    new Node<NV>(
      {
        question: 'Czy flaga zawiera białą gwiazdę?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/aruban-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/northern_mariana_islands-flag']
        },
        null,
        null
      )
    )
  ),
  new Node<NV>(
    {
      question: 'Czy flaga zawiera żółtego lub złotego ptaka?'
    },
    new Node<NV>(
      {
        question: 'Czy flaga zawiera orła?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/ecuadorian-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/american-samoa-flag']
        },
        null,
        null
      )
    ),
    new Node<NV>(
      {
        question: 'Czy flaga zawiera orła?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/kiribati-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/united_states_virgin_islands-flag']
        },
        null,
        null
      )
    )
  )
)

const t32 = new Node<NV>(
  {
    question: 'Czy flaga zawiera 5-cio ramienną gwiazdę?'
  },
  new Node<NV>(
    {
      question: 'Czy flaga zawiera 6-cio ramienną gwiazdę?'
    },
    new Node<NV>(
      {
        question: 'Czy flaga zawiera księżyc?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/antigua_and_barbuda-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/malaysian-flag']
        },
        null,
        null
      )
    ),
    new Node<NV>(
      {
        question: 'Czy flaga zawiera niebieski trójkąt?'
      },
      new Node<NV>(
        {
          question: 'Czy flaga zawiera dokładnie 3 gwiazdy?'
        },
        new Node<NV>(
          {
            flagPaths: ['img/croatian-flag']
          },
          null,
          null
        ),
        new Node<NV>(
          {
            flagPaths: ['img/slovenian-flag']
          },
          null,
          null
        )
      ),
      new Node<NV>(
        {
          flagPaths: ['img/equatorial_guinea-flag']
        },
        null,
        null
      )
    )
  ),
  new Node<NV>(
    {
      question: 'Czy flaga zawiera dokładnie 3 gwiazdy?'
    },
    new Node<NV>(
      {
        question: 'Czy flaga zawiera zielony kolor?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/congo_democratic-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          question: 'Czy flaga zawiera pionowy pasek?'
        },
        new Node<NV>(
          {
            flagPaths: ['img/ethiopian-flag']
          },
          null,
          null
        ),
        new Node<NV>(
          {
            flagPaths: ['img/central_african_republic-flag']
          },
          null,
          null
        )
      )
    ),
    new Node<NV>(
      {
        question: 'Czy flaga zawiera biały trójkąt?'
      },
      new Node<NV>(
        {
          flagPaths: ['img/wake_island-flag']
        },
        null,
        null
      ),
      new Node<NV>(
        {
          flagPaths: ['img/philippines-flag']
        },
        null,
        null
      )
    )
  )
)

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

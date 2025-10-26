export interface Book {
  id: string;
  title: string;
  year?: number;
}

export interface Author {
  name: string;
  birthYear?: number | null;
  foreign: boolean;
  books: Book[];
}

export const authors: Author[] = [
  {
    name: "Walt Whitman",
    birthYear: 1819,
    foreign: true,
    books: [
      {
        id: "whitman-listi-trave",
        title: "Listi trave (prevod od Lud Šerpa!)",
        year: 2019,
      },
    ],
  },
  {
    name: "William Carlos Williams",
    birthYear: 1883,
    foreign: true,
    books: [],
  },
  {
    name: "Mark Strand",
    birthYear: 1934,
    foreign: true,
    books: [],
  },
  {
    name: "Jennifer Clement",
    birthYear: 1960,
    foreign: true,
    books: [{ id: "clement-ledeni-moz", title: "Ledeni mož", year: 2021 }],
  },
  {
    name: "Semezdin Mehmedinović",
    birthYear: 1960,
    foreign: true,
    books: [
      {
        id: "mehmedinovic-sarajevo-blues",
        title: "Sarajevo Blues",
        year: 1992,
      },
    ],
  },
  {
    name: "Maria Ferečuhova",
    birthYear: 1975,
    foreign: true,
    books: [
      { id: "ferecuhova-ogrozena-vrsta", title: "Ogrožena vrsta", year: 2012 },
      { id: "ferecuhova-imunost", title: "Imunost", year: 2016 },
    ],
  },
  {
    name: "Ilya Kaminsky",
    birthYear: 1977,
    foreign: true,
    books: [
      { id: "kaminsky-gluha-republika", title: "Gluha republika", year: 2022 },
    ],
  },
  {
    name: "Krzysztof Siwczyk",
    birthYear: 1977,
    foreign: true,
    books: [
      {
        id: "siwczyk-prevec-videnja",
        title: "Preveč videnja (izbor pesmi)",
        year: 2012,
      },
    ],
  },
  {
    name: "Valžina Mort",
    birthYear: 1981,
    foreign: true,
    books: [
      {
        id: "mort-pesem-o-belih-jabolkih",
        title: "Pesem o belih jabolkih",
        year: 2024,
      },
    ],
  },
  {
    name: "Josip Osti",
    birthYear: 1945,
    foreign: false,
    books: [
      {
        id: "osti-sarajevska-knjiga-mrtvih",
        title: "Sarajevska knjiga mrtvih",
        year: 1993,
      },
      {
        id: "osti-vse-ljubezni-so-nenavadne",
        title: "Vse ljubezni so nenavadne",
        year: 2010,
      },
    ],
  },
  {
    name: "Tone Škrjanec",
    birthYear: 1953,
    foreign: false,
    books: [
      {
        id: "skrjanec-nekaj-o-nas-kot-zivalih",
        title: "Nekaj o nas kot živalih",
        year: 2020,
      },
      {
        id: "skrjanec-jutro-ni-bilo-v-nacrtu",
        title: "Jutro ni bilo v načrtu",
        year: 2024,
      },
    ],
  },
  {
    name: "Vinko Möderndorfer",
    birthYear: 1958,
    foreign: false,
    books: [
      { id: "moderndorfer-cuvaj-sna", title: "Čuvaj sna", year: 2020 },
      { id: "moderndorfer-samota", title: "Samota", year: 2023 },
    ],
  },
  {
    name: "Barbara Korun",
    birthYear: 1963,
    foreign: false,
    books: [
      { id: "korun-vnazaj", title: "Vnazaj", year: 2024 },
      { id: "korun-pridem-takoj", title: "Pridem takoj", year: 2011 },
    ],
  },
  {
    name: "Esad Babačić",
    birthYear: 1965,
    foreign: false,
    books: [
      { id: "babacic-vcasih", title: "Včasih", year: 2021 },
      {
        id: "babacic-kiti-se-ne-napihujejo",
        title: "Kiti se ne napihujejo",
        year: 2000,
      },
      {
        id: "babacic-sloni-jocejo-posteno",
        title: "Sloni jočejo pošteno",
        year: 2011,
      },
    ],
  },
  {
    name: "Nataša Velikonja",
    birthYear: 1967,
    foreign: false,
    books: [
      { id: "velikonja-ostani", title: "Ostani", year: 2014 },
      {
        id: "velikonja-prostor-sred-krizisc",
        title: "Prostor sred križišč",
        year: 2021,
      },
    ],
  },
  {
    name: "Lucija Stupica",
    birthYear: 1971,
    foreign: false,
    books: [
      { id: "stupica-tocke-izginjanja", title: "Točke izginjanja", year: 2019 },
    ],
  },
  {
    name: "Miklavž Komelj",
    birthYear: 1973,
    foreign: false,
    books: [{ id: "komelj-liebestod", title: "Liebestod", year: 2017 }],
  },
  {
    name: "Gregor Podlogar",
    birthYear: 1974,
    foreign: false,
    books: [
      {
        id: "podlogar-milijon-sekund-blize",
        title: "Milijon sekund bliže",
        year: 2006,
      },
      { id: "podlogar-atlas", title: "Atlas", year: 2022 },
    ],
  },
  {
    name: "Petra Kolmančič",
    birthYear: 1974,
    foreign: false,
    books: [
      {
        id: "kolmancic-plast-za-plastjo",
        title: "P(l)ast za p(l)astjo",
        year: 2014,
      },
    ],
  },
  {
    name: "Stanka Hrastelj",
    birthYear: 1975,
    foreign: false,
    books: [{ id: "hrastelj-vznosje", title: "Vznožje", year: 2024 }],
  },
  {
    name: "Anja Zag Golob",
    birthYear: 1976,
    foreign: false,
    books: [
      { id: "golob-v-roki", title: "V roki", year: 2010 },
      { id: "golob-veza-v-zgibi", title: "Veza v zgibi", year: 2013 },
      {
        id: "golob-didaskalije-k-dihanju",
        title: "Didaskalije k dihanju",
        year: 2016,
      },
      {
        id: "golob-da-ne-da-ne-bo-vec-prisla",
        title: "Da ne da ne bo več prišla da ne bo da me žge …",
        year: 2019,
      },
    ],
  },
  {
    name: "Miljana Cunta",
    birthYear: 1976,
    foreign: false,
    books: [
      {
        id: "cunta-nekajkrat-smo-zasli-zdaj-se-vracamo",
        title: "Nekajkrat smo zašli, zdaj se vračamo",
        year: 2023,
      },
    ],
  },
  {
    name: "Alja Adam",
    birthYear: 1976,
    foreign: false,
    books: [{ id: "adam-privlacnosti", title: "Privlačnosti", year: 2020 }],
  },
  {
    name: "Jure Jakob",
    birthYear: 1977,
    foreign: false,
    books: [
      { id: "jakob-tri-postaje", title: "Tri postaje", year: 2009 },
      { id: "jakob-lakota", title: "Lakota", year: 2018 },
      { id: "jakob-drobne-opazke", title: "Drobne opazke", year: 2024 },
    ],
  },
  {
    name: "Veronika Dintinjana",
    birthYear: 1977,
    foreign: false,
    books: [
      {
        id: "dintinjana-rumeno-gori-grm-forzicij",
        title: "Rumeno gori grm forzicij",
        year: 2008,
      },
      { id: "dintinjana-v-suhem-doku", title: "V suhem doku", year: 2016 },
    ],
  },
  {
    name: "Dejan Koban",
    birthYear: 1979,
    foreign: false,
    books: [
      {
        id: "koban-metulji-pod-tlakom",
        title: "Metulji pod tlakom",
        year: 2008,
      },
      { id: "koban-razporeditve", title: "Razporeditve", year: 2014 },
    ],
  },
  {
    name: "Ana Pepelnik",
    birthYear: 1979,
    foreign: false,
    books: [
      { id: "pepelnik-tehno", title: "Tehno", year: 2017 },
      { id: "pepelnik-tres", title: "Treš", year: 2021 },
      { id: "pepelnik-v-drevo", title: "V drevo", year: 2024 },
    ],
  },
  {
    name: "Andrej Hočevar",
    birthYear: 1980,
    foreign: false,
    books: [{ id: "hocevar-seznam", title: "Seznam", year: 2017 }],
  },
  {
    name: "Kristina Kočan",
    birthYear: 1981,
    foreign: false,
    books: [{ id: "kocan-selisce", title: "Selišča", year: 2021 }],
  },
  {
    name: "Karlo Hmeljak",
    birthYear: 1983,
    foreign: false,
    books: [{ id: "hmeljak-kcrkrk", title: "Krčrk", year: 2012 }],
  },
  {
    name: "Blaž Iršič",
    birthYear: 1983,
    foreign: false,
    books: [
      { id: "irsic-clovek-pod-luno", title: "Človek pod luno", year: 2019 },
      {
        id: "irsic-parada-heteroseksualcev",
        title: "Parada heteroseksualcev",
        year: 2025,
      },
    ],
  },
  {
    name: "Nina Dragičević",
    birthYear: 1984,
    foreign: false,
    books: [
      {
        id: "dragicevic-ljubav-rece-greva",
        title: "Ljubav reče greva",
        year: 2019,
      },
      {
        id: "dragicevic-to-telo-pokoncno",
        title: "To telo, pokončno",
        year: 2021,
      },
    ],
  },
  {
    name: "Kaja Teržan",
    birthYear: 1986,
    foreign: false,
    books: [{ id: "terzan-krog", title: "Krog", year: 2018 }],
  },
  {
    name: "Katja Perat",
    birthYear: 1988,
    foreign: false,
    books: [
      {
        id: "perat-davek-na-dodano-vrednost",
        title: "Davek na dodano vrednost",
        year: 2014,
      },
    ],
  },
  {
    name: "Anja Cimerman",
    birthYear: 1989,
    foreign: false,
    books: [{ id: "cimerman-fatamorgana", title: "Fatamorgana", year: 2017 }],
  },
  {
    name: "Muanis Sinanović",
    birthYear: 1989,
    foreign: false,
    books: [
      { id: "sinanovic-krhke-karavane", title: "Krhke karavane", year: 2020 },
    ],
  },
  {
    name: "Nina Medved",
    birthYear: 1989,
    foreign: false,
    books: [
      { id: "medved-drseci-svet", title: "Drseči svet", year: 2020 },
      { id: "medved-rodna-doba", title: "Rodna doba", year: 2024 },
    ],
  },
  {
    name: "Katarina Gomboc",
    birthYear: 1993,
    foreign: false,
    books: [
      {
        id: "gomboc-negotovosti-navkljub",
        title: "Negotovosti navkljub",
        year: 2018,
      },
    ],
  },
  {
    name: "Nina Kremžar",
    birthYear: 1993,
    foreign: false,
    books: [
      {
        id: "kremzar-dostop-na-odprto-morje",
        title: "Dostop na odprto morje",
        year: 2019,
      },
    ],
  },
  {
    name: "Tanja Božić",
    birthYear: 1995,
    foreign: false,
    books: [{ id: "bozic-vejo-po-vejo", title: "Vejo po vejo", year: 2024 }],
  },
  {
    name: "Jan Krmelj",
    birthYear: 1995,
    foreign: false,
    books: [{ id: "krmelj-uho", title: "Uho", year: 2023 }],
  },
  {
    name: "Natalija Milovanović",
    birthYear: 1995,
    foreign: false,
    books: [
      { id: "milovanovic-tuja-mehkoba", title: "Tuja mehkoba", year: 2025 },
    ],
  },
  {
    name: "Tom Veber",
    birthYear: 1995,
    foreign: false,
    books: [
      { id: "veber-do-tu-sega-gozd", title: "Do tu sega gozd", year: 2021 },
    ],
  },
  {
    name: "Lara Božak",
    birthYear: 1999,
    foreign: false,
    books: [
      { id: "bozak-kap-lje-kap-lje", title: "Kap lje kap lje", year: 2025 },
    ],
  },
  {
    name: "Aljaž Primožič",
    birthYear: 2001,
    foreign: false,
    books: [{ id: "primozic-cisto-potiho", title: "Čisto potiho", year: 2022 }],
  },
  {
    name: "Nika Gradišek",
    birthYear: 2001,
    foreign: false,
    books: [{ id: "gradisek-obronki", title: "Obronki", year: 2024 }],
  },
  {
    name: "Manca Marinko",
    birthYear: 2003,
    foreign: false,
    books: [
      { id: "marinko-jezik-okoliscin", title: "Jezik okoliščin", year: 2023 },
    ],
  },
];

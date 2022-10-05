import React from "react";

const Table = () => {
  const [selectedUser, setUser] = useState(null);

  const onSelectUser = (user) => {
    setUser(user);
  };

  return (
    <div id="table-wrapper">
      <div id="table-headers">
        <table>
          <thead>
            <tr>
              <th className="column1">Id</th>
              <th className="column2">FirstName</th>
              <th className="column3">LastName</th>
              <th className="column4">Email</th>
              <th className="column5">Phone</th>
            </tr>
          </thead>
        </table>
      </div>

      <div id="table-data">
        <table>
          <tbody>
            {userList.map((user, index) => (
              <tr
                key={user.firstName + index}
                className="data-row"
                onClick={() => onSelectUser(user)}
              >
                <td className="column1">{user.id}</td>
                <td className="column2">{user.firstName}</td>
                <td className="column3">{user.lastName}</td>
                <td className="column4">{user.email}</td>
                <td className="column5">{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const userList = [
  {
    id: 499,
    firstName: "Michelamone",
    lastName: "Mcmenamin",
    email: "DRadinsky@porttitor.io",
    phone: "(691)685-0625",
    address: {
      streetAddress: "8914 Nec Ln",
      city: "Albany",
      state: "CT",
      zip: "38528"
    },
    description:
      "dolor lorem sed fringilla magna scelerisque in sed nec pulvinar magna ac donec pulvinar tincidunt nec tempor elit pharetra pretium magna donec neque ac vestibulum eget at pharetra dolor sed et lacus"
  },
  {
    id: 127,
    firstName: "Elisha",
    lastName: "Brubaker",
    email: "ABommi@mi.net",
    phone: "(545)161-0043",
    address: {
      streetAddress: "8550 Scelerisque Ave",
      city: "Pacific Palisades",
      state: "DC",
      zip: "80088"
    },
    description:
      "id sollicitudin at consectetur orci porttitor augue tortor aenean convallis etiam quis fringilla odio aliquam tincidunt non ipsum tincidunt risus ac et consectetur nec mi pretium libero sit pulvinar ipsum aenean et"
  },
  {
    id: 424,
    firstName: "Elisha",
    lastName: "Stafford",
    email: "BKasuganti@tortor.gov",
    phone: "(190)518-5269",
    address: {
      streetAddress: "3745 Placerat Ln",
      city: "Hudsonville",
      state: "NM",
      zip: "56379"
    },
    description:
      "lacus ac augue pretium et scelerisque ipsum magna aliquam aliquam placerat eros amet sollicitudin elit vitae massa sit placerat sit amet eget amet porta at sed convallis amet donec at vel eros"
  },
  {
    id: 926,
    firstName: "Canzady",
    lastName: "Wray",
    email: "VHohmann@sed.ly",
    phone: "(119)057-6010",
    address: {
      streetAddress: "4395 Vitae Ave",
      city: "Chester Springs",
      state: "ME",
      zip: "20192"
    },
    description:
      "massa sed dolor ac vel scelerisque amet nec tincidunt dolor egestas aenean sed sed et vitae tellus massa porta tincidunt id turpis mattis nullam lorem magna convallis sed magna lorem dolor tellus"
  },
  {
    id: 364,
    firstName: "Janeen",
    lastName: "Pace",
    email: "LHodgin@amet.ly",
    phone: "(997)723-5474",
    address: {
      streetAddress: "5226 Odio Rd",
      city: "Altoona",
      state: "WY",
      zip: "17790"
    },
    description:
      "et donec amet augue ipsum eros donec sapien libero porta lacus elit tempor donec etiam malesuada magna velit sollicitudin ac odio porta turpis lectus aliquam aliquam mattis sapien sollicitudin porta amet tellus"
  },
  {
    id: 394,
    firstName: "Stacie",
    lastName: "Garrod",
    email: "MTicona@libero.io",
    phone: "(944)321-2051",
    address: {
      streetAddress: "3395 Molestie Rd",
      city: "Piedmont",
      state: "NJ",
      zip: "62857"
    },
    description:
      "neque sed consequat nec nullam facilisis orci sit dolor adipiscing et mattis malesuada aenean magna convallis vestibulum porttitor aenean neque porttitor sagittis curabitur eros turpis odio velit nec aliquam nec porttitor elit"
  },
  {
    id: 213,
    firstName: "Marie",
    lastName: "Tierney",
    email: "BScott@tincidunt.org",
    phone: "(752)734-1738",
    address: {
      streetAddress: "3054 Rutrum Rd",
      city: "Winchester",
      state: "SC",
      zip: "59017"
    },
    description:
      "nec magna ac odio nunc ipsum pulvinar porta et pharetra ipsum egestas tellus sed augue egestas nunc facilisis pulvinar pulvinar mi mi tincidunt lacus curabitur quis vitae dolor vestibulum amet magna aenean"
  },
  {
    id: 345,
    firstName: "Heather",
    lastName: "Willis",
    email: "LPackard@sed.io",
    phone: "(868)343-8713",
    address: {
      streetAddress: "323 Sed Ct",
      city: "Anonymous",
      state: "AR",
      zip: "50901"
    },
    description:
      "non nec sollicitudin consequat sollicitudin scelerisque magna magna pulvinar placerat odio turpis ante sit quis placerat odio ac quis molestie tellus pulvinar ac hendrerit mattis scelerisque sed sed elit malesuada elit eget"
  },
  {
    id: 706,
    firstName: "James",
    lastName: "Harkema",
    email: "FNadaraja@velit.io",
    phone: "(449)736-7703",
    address: {
      streetAddress: "8749 Convallis Rd",
      city: "Saint Clair Shores",
      state: "NE",
      zip: "78930"
    },
    description:
      "nec vestibulum tortor tellus velit elementum nec velit id quis sed lacus massa odio sapien magna massa donec mi facilisis facilisis pretium sed nec id tortor molestie lacus lectus vel at aenean"
  },
  {
    id: 28,
    firstName: "Lidia",
    lastName: "Mcduff",
    email: "AWomack@lorem.net",
    phone: "(745)987-6955",
    address: {
      streetAddress: "47 Molestie Dr",
      city: "Port Ewen",
      state: "OH",
      zip: "93277"
    },
    description:
      "lacus donec amet magna tellus lectus sit pulvinar ipsum elit mattis vitae pretium turpis convallis sollicitudin suspendisse quis sagittis fringilla placerat tortor ipsum pulvinar odio tempor sit sapien tempor vel amet tincidunt"
  },
  {
    id: 423,
    firstName: "Sonia",
    lastName: "Bias",
    email: "AAlunde@sit.org",
    phone: "(346)768-9423",
    address: {
      streetAddress: "2633 Sollicitudin Ln",
      city: "Franklin",
      state: "NH",
      zip: "87391"
    },
    description:
      "sollicitudin suspendisse elementum adipiscing nec convallis massa odio dolor lacus sed vestibulum adipiscing amet suspendisse tortor sed porttitor vestibulum lorem et pharetra porttitor tortor vestibulum magna consectetur elementum nec mattis sollicitudin pulvinar"
  },
  {
    id: 365,
    firstName: "Ophelia",
    lastName: "Devereaux",
    email: "HFreeburg@lectus.com",
    phone: "(641)643-8121",
    address: {
      streetAddress: "2956 Vestibulum Ct",
      city: "E. Lansing",
      state: "CT",
      zip: "19226"
    },
    description:
      "tortor consectetur dolor curabitur vitae placerat lacus magna sollicitudin amet convallis amet sit vestibulum odio donec consequat nec aliquam vestibulum massa elementum at egestas hendrerit et sagittis sollicitudin sed pulvinar curabitur facilisis"
  },
  {
    id: 605,
    firstName: "Joan",
    lastName: "Belisario",
    email: "RCarrera@neque.io",
    phone: "(656)307-3149",
    address: {
      streetAddress: "1390 Sed Dr",
      city: "Waco",
      state: "MT",
      zip: "43307"
    },
    description:
      "dolor pulvinar quis amet in donec sed dolor tincidunt consequat consectetur eget sollicitudin fringilla amet etiam placerat in aliquam eros facilisis vitae sed tincidunt non nec sollicitudin amet sit malesuada id odio"
  },
  {
    id: 596,
    firstName: "D'Juan",
    lastName: "Knowles",
    email: "JMarton@amet.com",
    phone: "(855)916-2101",
    address: {
      streetAddress: "879 Massa Ln",
      city: "Fayetteville",
      state: "TN",
      zip: "58107"
    },
    description:
      "sed lacus amet risus odio mattis ipsum ac amet molestie vel aenean magna curabitur facilisis massa at ipsum aliquam aenean et pulvinar sed tellus massa sit orci sit odio tellus id orci"
  },
  {
    id: 406,
    firstName: "Corretta",
    lastName: "Lazcano",
    email: "JMiyaki@eget.ly",
    phone: "(963)332-8492",
    address: {
      streetAddress: "8796 Pretium Ln",
      city: "Wrentham",
      state: "MA",
      zip: "37339"
    },
    description:
      "at lacus id suspendisse scelerisque nullam id tincidunt lacus augue lacus ante dolor mi aliquam mi magna sed augue sed orci porttitor nullam nec tortor sagittis convallis massa orci amet odio scelerisque"
  },
  {
    id: 392,
    firstName: "Kamaniee",
    lastName: "Wesley",
    email: "ADebord@orci.gov",
    phone: "(834)892-8847",
    address: {
      streetAddress: "4345 Mattis Ct",
      city: "Coon Rapids",
      state: "NH",
      zip: "10072"
    },
    description:
      "sollicitudin adipiscing vestibulum ipsum lorem lacus aenean massa donec magna suspendisse sed et elit vel facilisis turpis elit pharetra vitae elit odio amet convallis et augue at dolor vestibulum tellus mi sed"
  },
  {
    id: 100,
    firstName: "Patrick",
    lastName: "Kasnow",
    email: "AYoung@sed.net",
    phone: "(177)495-4735",
    address: {
      streetAddress: "6815 Ante Rd",
      city: "Pasco",
      state: "DC",
      zip: "58068"
    },
    description:
      "massa suspendisse elementum massa orci tellus elementum velit porta sapien at magna dolor pulvinar dolor eget non neque lacus quis sit vitae magna sapien aliquam etiam molestie sed risus massa convallis amet"
  },
  {
    id: 491,
    firstName: "James",
    lastName: "Boyd",
    email: "TSuesskind@sed.net",
    phone: "(743)525-3535",
    address: {
      streetAddress: "6081 Sit Rd",
      city: "Fayetteville",
      state: "WA",
      zip: "62529"
    },
    description:
      "nec nunc morbi nec velit aliquam sapien tempor neque magna eget elementum dolor dolor massa vestibulum et ac amet odio in dolor tortor etiam sed sollicitudin facilisis mattis at suspendisse sollicitudin nec"
  },
  {
    id: 418,
    firstName: "Glenn",
    lastName: "Ingham",
    email: "RBastian@lacus.org",
    phone: "(717)565-8263",
    address: {
      streetAddress: "2608 Libero Ln",
      city: "Issaquah",
      state: "CT",
      zip: "90736"
    },
    description:
      "placerat etiam in tellus nec sed sed vestibulum magna tellus sagittis aliquam massa ac amet sed at dolor lorem egestas ipsum etiam rutrum elementum in velit pharetra tortor at neque dui scelerisque"
  },
  {
    id: 700,
    firstName: "Saima",
    lastName: "Crooker",
    email: "ESchrag@at.io",
    phone: "(453)533-3232",
    address: {
      streetAddress: "5458 Magna Rd",
      city: "Raymond",
      state: "DE",
      zip: "13747"
    },
    description:
      "molestie scelerisque tortor elit lacus nec massa mattis tempor sed pulvinar pharetra molestie morbi quis porta sit vestibulum eros suspendisse eros elit fringilla augue vitae odio aliquam dolor neque elementum tincidunt elementum"
  },
  {
    id: 955,
    firstName: "Sonja",
    lastName: "West",
    email: "JSteward@sollicitudin.com",
    phone: "(257)889-4918",
    address: {
      streetAddress: "4527 At St",
      city: "Denton",
      state: "DC",
      zip: "13140"
    },
    description:
      "sed donec in elit malesuada aenean ipsum tortor et scelerisque sapien sed curabitur amet suspendisse vestibulum fringilla curabitur sed at aliquam tincidunt tempor risus curabitur nec ante odio aliquam consectetur scelerisque facilisis"
  },
  {
    id: 386,
    firstName: "Sandeep",
    lastName: "Scott",
    email: "AArias@pulvinar.org",
    phone: "(215)649-9529",
    address: {
      streetAddress: "1334 Tempor St",
      city: "Winston Salem",
      state: "OR",
      zip: "52286"
    },
    description:
      "consectetur at placerat ac amet porttitor tincidunt pretium morbi turpis lacus morbi et vitae eget amet placerat tincidunt ipsum tempor pulvinar orci odio hendrerit curabitur pulvinar id elit tempor egestas mi lectus"
  },
  {
    id: 263,
    firstName: "Dewey",
    lastName: "Wullbrandt",
    email: "MDedonato@fringilla.com",
    phone: "(169)570-1185",
    address: {
      streetAddress: "9181 Curabitur Ln",
      city: "Brodhead",
      state: "ME",
      zip: "11270"
    },
    description:
      "fringilla fringilla convallis pretium malesuada adipiscing sit sagittis amet tortor porta risus mattis lacus amet massa aliquam consectetur tortor sit dolor orci dui tempor tempor tincidunt rutrum ante adipiscing amet lacus pretium"
  },
  {
    id: 551,
    firstName: "Jody",
    lastName: "Hatton",
    email: "FKovach@etiam.gov",
    phone: "(228)717-5774",
    address: {
      streetAddress: "7812 Rutrum Ct",
      city: "Mystic",
      state: "NV",
      zip: "54309"
    },
    description:
      "scelerisque tincidunt mi magna etiam sit dolor placerat dui pulvinar sed sollicitudin et ipsum nullam nullam ante turpis ac porta eget sollicitudin pharetra curabitur quis massa orci etiam convallis tortor consectetur pulvinar"
  },
  {
    id: 288,
    firstName: "Melanciaa",
    lastName: "Callahan",
    email: "AButler@pretium.net",
    phone: "(926)253-1921",
    address: {
      streetAddress: "1240 Ac Ct",
      city: "Oklahoma",
      state: "MS",
      zip: "44160"
    },
    description:
      "vel quis ante ante sit et sapien fringilla malesuada non non vestibulum eget etiam sapien lorem sit quis amet dolor amet sit sit augue porttitor scelerisque vestibulum amet vel tincidunt curabitur rutrum"
  },
  {
    id: 970,
    firstName: "Dmitry",
    lastName: "Derp",
    email: "JCrider@pharetra.gov",
    phone: "(524)093-8028",
    address: {
      streetAddress: "1397 Sagittis Dr",
      city: "Glendora",
      state: "LA",
      zip: "73756"
    },
    description:
      "at ipsum neque sapien placerat quis aliquam pharetra et at sollicitudin sit ipsum magna lorem at nullam ante vestibulum massa sollicitudin dolor vitae sed lectus ac dolor ac lacus placerat pretium sed"
  },
  {
    id: 797,
    firstName: "Edwin",
    lastName: "Mendoza",
    email: "JKozlowski@vel.gov",
    phone: "(863)270-4091",
    address: {
      streetAddress: "6262 Ante Ct",
      city: "Florissant",
      state: "NC",
      zip: "52141"
    },
    description:
      "ante non tincidunt consequat massa sed sed nullam sollicitudin neque risus pulvinar malesuada egestas pulvinar lectus sit placerat dui morbi libero nunc ipsum mattis ipsum lacus sapien turpis tempor sagittis nunc morbi"
  },
  {
    id: 344,
    firstName: "Josh",
    lastName: "Gonzalez",
    email: "DDeskins@sit.io",
    phone: "(827)314-4747",
    address: {
      streetAddress: "272 Pulvinar Dr",
      city: "Saint Louis",
      state: "MN",
      zip: "69323"
    },
    description:
      "at donec lacus amet nullam magna vel et odio orci magna consequat fringilla sagittis hendrerit amet porta nullam donec vel placerat magna sed sit facilisis odio consectetur eros magna nec magna malesuada"
  },
  {
    id: 142,
    firstName: "Dan",
    lastName: "Isham",
    email: "TKnutson@eget.net",
    phone: "(246)247-7112",
    address: {
      streetAddress: "6387 Dolor St",
      city: "Blue Springs",
      state: "LA",
      zip: "13402"
    },
    description:
      "lacus amet eget placerat neque dolor at sed lacus aenean convallis fringilla magna nunc dolor pharetra facilisis tellus etiam curabitur at vitae vestibulum convallis vestibulum malesuada pretium pulvinar ipsum donec vestibulum molestie"
  },
  {
    id: 111,
    firstName: "Shunita",
    lastName: "Willms",
    email: "LDerucher@vel.io",
    phone: "(755)352-0602",
    address: {
      streetAddress: "6454 Massa Ave",
      city: "South Bend",
      state: "AR",
      zip: "54755"
    },
    description:
      "ac tellus porta in placerat et magna lacus sapien non eget pharetra dolor fringilla nec dolor at lacus ipsum pulvinar consequat sed sed rutrum vitae mi curabitur tellus sit sed vel lacus"
  },
  {
    id: 286,
    firstName: "Gregory",
    lastName: "Smyth",
    email: "MBuxton@etiam.net",
    phone: "(501)578-2027",
    address: {
      streetAddress: "9348 Pulvinar Ln",
      city: "Canton",
      state: "DE",
      zip: "32419"
    },
    description:
      "eget pretium suspendisse sit pretium odio porttitor magna vitae curabitur massa egestas porta quis donec aenean in non porta vitae sollicitudin vel curabitur sagittis in scelerisque ac non tincidunt velit scelerisque elementum"
  },
  {
    id: 910,
    firstName: "Andrew",
    lastName: "Brill",
    email: "KSchall@magna.org",
    phone: "(406)332-2629",
    address: {
      streetAddress: "6465 Aliquam Ln",
      city: "Houston",
      state: "PA",
      zip: "62775"
    },
    description:
      "placerat rutrum velit suspendisse nunc aenean et ac neque quis turpis pretium at scelerisque risus velit aliquam nec convallis ipsum vestibulum placerat vestibulum massa aenean fringilla eros eros nunc et ipsum pharetra"
  }
];

export default Table;

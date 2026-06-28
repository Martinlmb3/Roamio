export interface Airport {
  code: string;
  name: string;
  city: string;
  country: string;
}

export const AIRPORTS: Airport[] = [
  // United Kingdom
  { code: 'LHR', name: 'Heathrow',          city: 'London',       country: 'United Kingdom' },
  { code: 'LGW', name: 'Gatwick',            city: 'London',       country: 'United Kingdom' },
  { code: 'STN', name: 'Stansted',           city: 'London',       country: 'United Kingdom' },
  { code: 'LTN', name: 'Luton',              city: 'London',       country: 'United Kingdom' },
  { code: 'LCY', name: 'City Airport',       city: 'London',       country: 'United Kingdom' },
  { code: 'MAN', name: 'Manchester Airport', city: 'Manchester',   country: 'United Kingdom' },
  { code: 'BHX', name: 'Birmingham Airport', city: 'Birmingham',   country: 'United Kingdom' },
  { code: 'EDI', name: 'Edinburgh Airport',  city: 'Edinburgh',    country: 'United Kingdom' },
  { code: 'GLA', name: 'Glasgow Airport',    city: 'Glasgow',      country: 'United Kingdom' },
  { code: 'BRS', name: 'Bristol Airport',    city: 'Bristol',      country: 'United Kingdom' },
  { code: 'NCL', name: 'Newcastle Airport',  city: 'Newcastle',    country: 'United Kingdom' },
  { code: 'LPL', name: 'Liverpool Airport',  city: 'Liverpool',    country: 'United Kingdom' },
  { code: 'ABZ', name: 'Aberdeen Airport',   city: 'Aberdeen',     country: 'United Kingdom' },
  { code: 'BFS', name: 'Belfast Int\'l',     city: 'Belfast',      country: 'United Kingdom' },

  // France
  { code: 'CDG', name: 'Charles de Gaulle',  city: 'Paris',        country: 'France' },
  { code: 'ORY', name: 'Orly',               city: 'Paris',        country: 'France' },
  { code: 'NCE', name: 'Côte d\'Azur',       city: 'Nice',         country: 'France' },
  { code: 'LYS', name: 'Saint-Exupéry',      city: 'Lyon',         country: 'France' },
  { code: 'MRS', name: 'Provence',           city: 'Marseille',    country: 'France' },
  { code: 'TLS', name: 'Blagnac',            city: 'Toulouse',     country: 'France' },
  { code: 'BOD', name: 'Mérignac',           city: 'Bordeaux',     country: 'France' },
  { code: 'NTE', name: 'Atlantique',         city: 'Nantes',       country: 'France' },
  { code: 'SXB', name: 'Entzheim',           city: 'Strasbourg',   country: 'France' },
  { code: 'BIQ', name: 'Biarritz Airport',   city: 'Biarritz',     country: 'France' },
  { code: 'LIL', name: 'Lesquin',            city: 'Lille',        country: 'France' },
  { code: 'RNS', name: 'Saint-Jacques',      city: 'Rennes',       country: 'France' },

  // Germany
  { code: 'FRA', name: 'Frankfurt Airport',  city: 'Frankfurt',    country: 'Germany' },
  { code: 'MUC', name: 'Munich Airport',     city: 'Munich',       country: 'Germany' },
  { code: 'BER', name: 'Brandenburg',        city: 'Berlin',       country: 'Germany' },
  { code: 'HAM', name: 'Hamburg Airport',    city: 'Hamburg',      country: 'Germany' },
  { code: 'DUS', name: 'Düsseldorf Airport', city: 'Düsseldorf',   country: 'Germany' },
  { code: 'CGN', name: 'Cologne Bonn',       city: 'Cologne',      country: 'Germany' },
  { code: 'STR', name: 'Stuttgart Airport',  city: 'Stuttgart',    country: 'Germany' },
  { code: 'HAJ', name: 'Hannover Airport',   city: 'Hannover',     country: 'Germany' },
  { code: 'NUE', name: 'Nuremberg Airport',  city: 'Nuremberg',    country: 'Germany' },
  { code: 'LEJ', name: 'Leipzig/Halle',      city: 'Leipzig',      country: 'Germany' },
  { code: 'BRE', name: 'Bremen Airport',     city: 'Bremen',       country: 'Germany' },

  // Spain
  { code: 'MAD', name: 'Barajas',            city: 'Madrid',       country: 'Spain' },
  { code: 'BCN', name: 'El Prat',            city: 'Barcelona',    country: 'Spain' },
  { code: 'AGP', name: 'Costa del Sol',      city: 'Málaga',       country: 'Spain' },
  { code: 'PMI', name: 'Son Sant Joan',      city: 'Palma',        country: 'Spain' },
  { code: 'TFS', name: 'Sur Tenerife',       city: 'Tenerife',     country: 'Spain' },
  { code: 'ACE', name: 'César Manrique',     city: 'Lanzarote',    country: 'Spain' },
  { code: 'SVQ', name: 'San Pablo',          city: 'Seville',      country: 'Spain' },
  { code: 'VLC', name: 'Valencia Airport',   city: 'Valencia',     country: 'Spain' },
  { code: 'ALC', name: 'Alicante Airport',   city: 'Alicante',     country: 'Spain' },
  { code: 'LPA', name: 'Gran Canaria',       city: 'Las Palmas',   country: 'Spain' },
  { code: 'IBZ', name: 'Ibiza Airport',      city: 'Ibiza',        country: 'Spain' },
  { code: 'BIO', name: 'Loiu',               city: 'Bilbao',       country: 'Spain' },
  { code: 'SDR', name: 'Santander Airport',  city: 'Santander',    country: 'Spain' },
  { code: 'GRX', name: 'Federico García',    city: 'Granada',      country: 'Spain' },

  // Italy
  { code: 'FCO', name: 'Fiumicino',          city: 'Rome',         country: 'Italy' },
  { code: 'CIA', name: 'Ciampino',           city: 'Rome',         country: 'Italy' },
  { code: 'MXP', name: 'Malpensa',           city: 'Milan',        country: 'Italy' },
  { code: 'LIN', name: 'Linate',             city: 'Milan',        country: 'Italy' },
  { code: 'BGY', name: 'Orio al Serio',      city: 'Bergamo',      country: 'Italy' },
  { code: 'VCE', name: 'Marco Polo',         city: 'Venice',       country: 'Italy' },
  { code: 'NAP', name: 'Capodichino',        city: 'Naples',       country: 'Italy' },
  { code: 'BLQ', name: 'Guglielmo Marconi',  city: 'Bologna',      country: 'Italy' },
  { code: 'TRN', name: 'Caselle',            city: 'Turin',        country: 'Italy' },
  { code: 'PMO', name: 'Falcone Borsellino', city: 'Palermo',      country: 'Italy' },
  { code: 'CTA', name: 'Fontanarossa',       city: 'Catania',      country: 'Italy' },
  { code: 'PSA', name: 'Galileo Galilei',    city: 'Pisa',         country: 'Italy' },
  { code: 'FLR', name: 'Amerigo Vespucci',   city: 'Florence',     country: 'Italy' },
  { code: 'BRI', name: 'Karol Wojtyla',      city: 'Bari',         country: 'Italy' },

  // Netherlands
  { code: 'AMS', name: 'Schiphol',           city: 'Amsterdam',    country: 'Netherlands' },
  { code: 'EIN', name: 'Eindhoven Airport',  city: 'Eindhoven',    country: 'Netherlands' },
  { code: 'RTM', name: 'Rotterdam The Hague',city: 'Rotterdam',    country: 'Netherlands' },

  // Belgium
  { code: 'BRU', name: 'Brussels Airport',   city: 'Brussels',     country: 'Belgium' },
  { code: 'CRL', name: 'Brussels South',     city: 'Charleroi',    country: 'Belgium' },
  { code: 'ANR', name: 'Antwerp Airport',    city: 'Antwerp',      country: 'Belgium' },

  // Switzerland
  { code: 'ZRH', name: 'Zurich Airport',     city: 'Zurich',       country: 'Switzerland' },
  { code: 'GVA', name: 'Geneva Airport',     city: 'Geneva',       country: 'Switzerland' },
  { code: 'BSL', name: 'EuroAirport',        city: 'Basel',        country: 'Switzerland' },

  // Austria
  { code: 'VIE', name: 'Vienna Airport',     city: 'Vienna',       country: 'Austria' },
  { code: 'SZG', name: 'Salzburg Airport',   city: 'Salzburg',     country: 'Austria' },
  { code: 'INN', name: 'Innsbruck Airport',  city: 'Innsbruck',    country: 'Austria' },
  { code: 'GRZ', name: 'Graz Airport',       city: 'Graz',         country: 'Austria' },

  // Portugal
  { code: 'LIS', name: 'Humberto Delgado',   city: 'Lisbon',       country: 'Portugal' },
  { code: 'OPO', name: 'Francisco Sá Carneiro', city: 'Porto',     country: 'Portugal' },
  { code: 'FAO', name: 'Faro Airport',       city: 'Faro',         country: 'Portugal' },
  { code: 'FNC', name: 'Cristiano Ronaldo',  city: 'Madeira',      country: 'Portugal' },
  { code: 'PDL', name: 'João Paulo II',      city: 'Azores',       country: 'Portugal' },

  // Scandinavia
  { code: 'CPH', name: 'Kastrup',            city: 'Copenhagen',   country: 'Denmark' },
  { code: 'AAL', name: 'Aalborg Airport',    city: 'Aalborg',      country: 'Denmark' },
  { code: 'BLL', name: 'Billund Airport',    city: 'Billund',      country: 'Denmark' },
  { code: 'ARN', name: 'Arlanda',            city: 'Stockholm',    country: 'Sweden' },
  { code: 'BMA', name: 'Bromma',             city: 'Stockholm',    country: 'Sweden' },
  { code: 'GOT', name: 'Landvetter',         city: 'Gothenburg',   country: 'Sweden' },
  { code: 'MMX', name: 'Sturup',             city: 'Malmö',        country: 'Sweden' },
  { code: 'OSL', name: 'Gardermoen',         city: 'Oslo',         country: 'Norway' },
  { code: 'BGO', name: 'Flesland',           city: 'Bergen',       country: 'Norway' },
  { code: 'TOS', name: 'Langnes',            city: 'Tromsø',       country: 'Norway' },
  { code: 'SVG', name: 'Sola',               city: 'Stavanger',    country: 'Norway' },
  { code: 'TRD', name: 'Værnes',             city: 'Trondheim',    country: 'Norway' },
  { code: 'HEL', name: 'Helsinki-Vantaa',    city: 'Helsinki',     country: 'Finland' },
  { code: 'TMP', name: 'Tampere-Pirkkala',   city: 'Tampere',      country: 'Finland' },
  { code: 'TKU', name: 'Turku Airport',      city: 'Turku',        country: 'Finland' },
  { code: 'OUL', name: 'Oulu Airport',       city: 'Oulu',         country: 'Finland' },

  // Ireland & Iceland
  { code: 'DUB', name: 'Dublin Airport',     city: 'Dublin',       country: 'Ireland' },
  { code: 'ORK', name: 'Cork Airport',       city: 'Cork',         country: 'Ireland' },
  { code: 'SNN', name: 'Shannon Airport',    city: 'Shannon',      country: 'Ireland' },
  { code: 'KEF', name: 'Keflavík',           city: 'Reykjavik',    country: 'Iceland' },

  // Greece
  { code: 'ATH', name: 'Eleftherios Venizelos', city: 'Athens',    country: 'Greece' },
  { code: 'SKG', name: 'Macedonia Airport',  city: 'Thessaloniki', country: 'Greece' },
  { code: 'HER', name: 'Nikos Kazantzakis',  city: 'Heraklion',   country: 'Greece' },
  { code: 'CFU', name: 'Ioannis Kapodistrias', city: 'Corfu',      country: 'Greece' },
  { code: 'RHO', name: 'Diagoras',           city: 'Rhodes',       country: 'Greece' },
  { code: 'KGS', name: 'Hippocrates',        city: 'Kos',          country: 'Greece' },
  { code: 'JTR', name: 'Santorini Airport',  city: 'Santorini',    country: 'Greece' },
  { code: 'JMK', name: 'Mykonos Airport',    city: 'Mykonos',      country: 'Greece' },
  { code: 'CHQ', name: 'Daskalogiannis',     city: 'Chania',       country: 'Greece' },
  { code: 'ZTH', name: 'Dionysios Solomos',  city: 'Zakynthos',    country: 'Greece' },

  // Poland
  { code: 'WAW', name: 'Chopin Airport',     city: 'Warsaw',       country: 'Poland' },
  { code: 'KRK', name: 'John Paul II',       city: 'Krakow',       country: 'Poland' },
  { code: 'KTW', name: 'Katowice Airport',   city: 'Katowice',     country: 'Poland' },
  { code: 'GDN', name: 'Lech Wałęsa',        city: 'Gdansk',       country: 'Poland' },
  { code: 'POZ', name: 'Ławica',             city: 'Poznań',       country: 'Poland' },
  { code: 'WRO', name: 'Copernicus Airport', city: 'Wrocław',      country: 'Poland' },

  // Czech Republic, Slovakia, Hungary
  { code: 'PRG', name: 'Václav Havel',       city: 'Prague',       country: 'Czech Republic' },
  { code: 'BRQ', name: 'Brno Airport',       city: 'Brno',         country: 'Czech Republic' },
  { code: 'BTS', name: 'M. R. Štefánik',     city: 'Bratislava',   country: 'Slovakia' },
  { code: 'BUD', name: 'Ferenc Liszt',       city: 'Budapest',     country: 'Hungary' },
  { code: 'DEB', name: 'Debrecen Airport',   city: 'Debrecen',     country: 'Hungary' },

  // Romania & Bulgaria
  { code: 'OTP', name: 'Henri Coandă',       city: 'Bucharest',    country: 'Romania' },
  { code: 'CLJ', name: 'Cluj-Napoca Airport',city: 'Cluj-Napoca',  country: 'Romania' },
  { code: 'TSR', name: 'Traian Vuia',        city: 'Timișoara',    country: 'Romania' },
  { code: 'SOF', name: 'Sofia Airport',      city: 'Sofia',        country: 'Bulgaria' },
  { code: 'VAR', name: 'Varna Airport',      city: 'Varna',        country: 'Bulgaria' },
  { code: 'BOJ', name: 'Burgas Airport',     city: 'Burgas',       country: 'Bulgaria' },

  // Croatia, Slovenia, Serbia & Balkans
  { code: 'ZAG', name: 'Franjo Tuđman',      city: 'Zagreb',       country: 'Croatia' },
  { code: 'SPU', name: 'Split Airport',      city: 'Split',        country: 'Croatia' },
  { code: 'DBV', name: 'Dubrovnik Airport',  city: 'Dubrovnik',    country: 'Croatia' },
  { code: 'LJU', name: 'Jože Pučnik',        city: 'Ljubljana',    country: 'Slovenia' },
  { code: 'BEG', name: 'Nikola Tesla',       city: 'Belgrade',     country: 'Serbia' },
  { code: 'SKP', name: 'Alexander the Great',city: 'Skopje',       country: 'North Macedonia' },
  { code: 'TIA', name: 'Rinas Mother Teresa',city: 'Tirana',       country: 'Albania' },
  { code: 'SJJ', name: 'Butmir Airport',     city: 'Sarajevo',     country: 'Bosnia' },
  { code: 'PRN', name: 'Pristina Airport',   city: 'Pristina',     country: 'Kosovo' },
  { code: 'TGD', name: 'Podgorica Airport',  city: 'Podgorica',    country: 'Montenegro' },

  // Baltics & Luxembourg & Malta & Cyprus
  { code: 'RIX', name: 'Riga Airport',       city: 'Riga',         country: 'Latvia' },
  { code: 'TLL', name: 'Lennart Meri',       city: 'Tallinn',      country: 'Estonia' },
  { code: 'VNO', name: 'Vilnius Airport',    city: 'Vilnius',      country: 'Lithuania' },
  { code: 'LUX', name: 'Luxembourg Airport', city: 'Luxembourg',   country: 'Luxembourg' },
  { code: 'MLA', name: 'Malta Airport',      city: 'Valletta',     country: 'Malta' },
  { code: 'LCA', name: 'Larnaca Airport',    city: 'Larnaca',      country: 'Cyprus' },
  { code: 'PFO', name: 'Paphos Airport',     city: 'Paphos',       country: 'Cyprus' },

  // Turkey (European side + major hubs)
  { code: 'IST', name: 'Istanbul Airport',   city: 'Istanbul',     country: 'Turkey' },
  { code: 'SAW', name: 'Sabiha Gökçen',      city: 'Istanbul',     country: 'Turkey' },
  { code: 'ADB', name: 'Adnan Menderes',     city: 'Izmir',        country: 'Turkey' },
  { code: 'ESB', name: 'Esenboğa',           city: 'Ankara',       country: 'Turkey' },
  { code: 'AYT', name: 'Antalya Airport',    city: 'Antalya',      country: 'Turkey' },
  { code: 'DLM', name: 'Dalaman Airport',    city: 'Dalaman',      country: 'Turkey' },
  { code: 'BJV', name: 'Milas-Bodrum',       city: 'Bodrum',       country: 'Turkey' },
];

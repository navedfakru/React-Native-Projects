const usersData = [
  {
    "gender": "male",
    "name": {
      "title": "Mr",
      "first": "Saša",
      "last": "Tasić"
    },
    "location": {
      "street": {
        "number": 66,
        "name": "Vasilija Popovića"
      },
      "city": "Pirot",
      "state": "Toplica",
      "country": "Serbia",
      "postcode": 44159,
      "coordinates": {
        "latitude": "59.8957",
        "longitude": "-140.4880"
      },
      "timezone": {
        "offset": "+5:30",
        "description": "Bombay, Calcutta, Madras, New Delhi"
      }
    },
    "email": "sasa.tasic@example.com",
    "login": {
      "uuid": "bdb0e9e6-13d4-487e-bed5-aac873401689",
      "username": "ticklishgoose715",
      "password": "terminal",
      "salt": "ep2pHD3R",
      "md5": "6a05005e8ebc8586f189d739987e7707",
      "sha1": "28c6afbc3a6863679825f0219d48687db6c2a153",
      "sha256": "5d875fbe805231d98aef98284c303d733843e41ab7c00e8165c20610a53ccb23"
    },
    "dob": {
      "date": "1983-06-22T04:26:39.977Z",
      "age": 40
    },
    "registered": {
      "date": "2018-05-05T11:50:58.374Z",
      "age": 6
    },
    "phone": "022-2013-566",
    "cell": "065-5187-573",
    "id": "01",
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/54.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/54.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/54.jpg"
    },
    "nat": "RS"
  },
  {
    "gender": "female",
    "name": {
      "title": "Ms",
      "first": "Sherri",
      "last": "Bradley"
    },
    "location": {
      "street": {
        "number": 6682,
        "name": "Robinson Rd"
      },
      "city": "Steilacoom",
      "state": "Virginia",
      "country": "United States",
      "postcode": 96198,
      "coordinates": {
        "latitude": "29.9380",
        "longitude": "11.2416"
      },
      "timezone": {
        "offset": "-2:00",
        "description": "Mid-Atlantic"
      }
    },
    "email": "sherri.bradley@example.com",
    "login": {
      "uuid": "82eb8c57-f82e-42b0-af8d-1c6abdef8fbf",
      "username": "heavyelephant116",
      "password": "hawkeyes",
      "salt": "H7Q7xQVr",
      "md5": "6a09785f21f967698dde714bfa29d180",
      "sha1": "91e1324743233f8134b41ddb61e92a1f9f1b60f5",
      "sha256": "6cba681e2a9dcde4812d634aaed3748a21bef623d3eabf92a072872762a8b764"
    },
    "dob": {
      "date": "2001-01-04T20:30:43.565Z",
      "age": 23
    },
    "registered": {
      "date": "2014-04-17T01:48:07.785Z",
      "age": 10
    },
    "phone": "(855) 306-9669",
    "cell": "(483) 986-2213",
    "id": {
      "name": "SSN",
      "value": "602-15-6759"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/0.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/0.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/0.jpg"
    },
    "nat": "US"
  },
  {
    "gender": "male",
    "name": {
      "title": "Mr",
      "first": "Clarence",
      "last": "Wilson"
    },
    "location": {
      "street": {
        "number": 79,
        "name": "Fairview St"
      },
      "city": "Philadelphia",
      "state": "North Dakota",
      "country": "United States",
      "postcode": 22568,
      "coordinates": {
        "latitude": "-22.7780",
        "longitude": "67.0026"
      },
      "timezone": {
        "offset": "+3:00",
        "description": "Baghdad, Riyadh, Moscow, St. Petersburg"
      }
    },
    "email": "clarence.wilson@example.com",
    "login": {
      "uuid": "c46740f9-0d88-4319-aabf-4d5eda442591",
      "username": "angrymouse622",
      "password": "deanna",
      "salt": "1QqHU8iq",
      "md5": "5f1aa73192e7f0f8c34dc38c1230ab9d",
      "sha1": "100c366b1660e17856f0fc68efeb350d88a27712",
      "sha256": "ed73f90fa118fe0b50bee42de42d8f0e2a7d8150a512b84602853d43b6167f28"
    },
    "dob": {
      "date": "1984-03-05T18:34:42.067Z",
      "age": 40
    },
    "registered": {
      "date": "2002-11-16T18:39:35.416Z",
      "age": 21
    },
    "phone": "(966) 992-2793",
    "cell": "(260) 812-6599",
    "id": {
      "name": "SSN",
      "value": "650-79-3671"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/35.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/35.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/35.jpg"
    },
    "nat": "US"
  },
  {
    "gender": "male",
    "name": {
      "title": "Mr",
      "first": "Cristian",
      "last": "Cruz"
    },
    "location": {
      "street": {
        "number": 3081,
        "name": "Calle Mota"
      },
      "city": "Alicante",
      "state": "Cantabria",
      "country": "Spain",
      "postcode": 88853,
      "coordinates": {
        "latitude": "-43.7264",
        "longitude": "-109.6048"
      },
      "timezone": {
        "offset": "+3:00",
        "description": "Baghdad, Riyadh, Moscow, St. Petersburg"
      }
    },
    "email": "cristian.cruz@example.com",
    "login": {
      "uuid": "9ab9ff12-f904-4aa2-9a48-bf244099b05e",
      "username": "blackzebra355",
      "password": "sally",
      "salt": "fEHIuiTZ",
      "md5": "ca6c93af4bb131549229c53bd7815a5c",
      "sha1": "b0cef201b8ca794a41b03b18d521bbed6c5087c2",
      "sha256": "1fb0b07dcb44dbac3ce22782d8e3a77e8167f0c65b7c2cea5c6a9b2f3bdeb2e9"
    },
    "dob": {
      "date": "1953-02-01T14:47:40.149Z",
      "age": 71
    },
    "registered": {
      "date": "2003-09-20T06:19:45.245Z",
      "age": 20
    },
    "phone": "978-155-890",
    "cell": "608-256-487",
    "id": {
      "name": "DNI",
      "value": "24571861-G"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/0.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/0.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/0.jpg"
    },
    "nat": "ES"
  },
  {
    "gender": "female",
    "name": {
      "title": "Mrs",
      "first": "Elvira",
      "last": "Aasen"
    },
    "location": {
      "street": {
        "number": 7514,
        "name": "Sinsenveien"
      },
      "city": "Hesseng",
      "state": "Hordaland",
      "country": "Norway",
      "postcode": "2687",
      "coordinates": {
        "latitude": "27.1436",
        "longitude": "59.3055"
      },
      "timezone": {
        "offset": "-12:00",
        "description": "Eniwetok, Kwajalein"
      }
    },
    "email": "elvira.aasen@example.com",
    "login": {
      "uuid": "ff43bf40-a0c1-4399-bea9-0bf5ab145338",
      "username": "beautifulbear313",
      "password": "deng",
      "salt": "PXMWJz7f",
      "md5": "3b0138b70ed991361ddba64f9b2ab404",
      "sha1": "2b86b53ef3dc7f1e19f0840ebe82eb6fc3c4b219",
      "sha256": "11cb9ecebc1df5eef1979fc26c9222823935170511e5a5ee2f5082b878825def"
    },
    "dob": {
      "date": "1952-05-05T07:23:56.962Z",
      "age": 72
    },
    "registered": {
      "date": "2015-03-22T07:34:34.672Z",
      "age": 9
    },
    "phone": "87349220",
    "cell": "45162479",
    "id": {
      "name": "FN",
      "value": "05055234029"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/46.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/46.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/46.jpg"
    },
    "nat": "NO"
  },
  {
    "gender": "male",
    "name": {
      "title": "Mr",
      "first": "Daniel",
      "last": "Olsen"
    },
    "location": {
      "street": {
        "number": 2621,
        "name": "Åbakken"
      },
      "city": "Jerslev Sj",
      "state": "Midtjylland",
      "country": "Denmark",
      "postcode": 18041,
      "coordinates": {
        "latitude": "-34.5457",
        "longitude": "132.1281"
      },
      "timezone": {
        "offset": "+5:30",
        "description": "Bombay, Calcutta, Madras, New Delhi"
      }
    },
    "email": "daniel.olsen@example.com",
    "login": {
      "uuid": "03e17885-2bdc-42f4-a10c-d388df01d38a",
      "username": "blueelephant277",
      "password": "redbaron",
      "salt": "BkqNFzhP",
      "md5": "b56ba9198115bd6ecb3a9bc574156635",
      "sha1": "44c87cd169da9f4a348f3ec207b448da0d389a6f",
      "sha256": "983b2a0b7804e4c55eff5ee769821bb9749df83295839a721b9f5510d82d88d4"
    },
    "dob": {
      "date": "1983-06-01T07:42:17.515Z",
      "age": 41
    },
    "registered": {
      "date": "2013-12-17T15:35:45.888Z",
      "age": 10
    },
    "phone": "06552852",
    "cell": "75384167",
    "id": {
      "name": "CPR",
      "value": "010683-7886"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/85.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/85.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/85.jpg"
    },
    "nat": "DK"
  },
  {
    "gender": "male",
    "name": {
      "title": "Mr",
      "first": "Rid",
      "last": "Semenenko"
    },
    "location": {
      "street": {
        "number": 5633,
        "name": "Ploshcha Geroyiv Maydanu"
      },
      "city": "Sarni",
      "state": "Lvivska",
      "country": "Ukraine",
      "postcode": 57491,
      "coordinates": {
        "latitude": "-9.7216",
        "longitude": "131.4454"
      },
      "timezone": {
        "offset": "-12:00",
        "description": "Eniwetok, Kwajalein"
      }
    },
    "email": "rid.semenenko@example.com",
    "login": {
      "uuid": "b368b2c9-24bf-44f8-8cc4-55ac9c96e140",
      "username": "beautifulleopard315",
      "password": "screen",
      "salt": "L4NbOVjw",
      "md5": "2f9089d635959f71c55f77206530f790",
      "sha1": "3f88a3017a1786f5dd2b1f2d7c3e1245f131cdca",
      "sha256": "9372a1681173a256d0aa518183b1b84564f256e4c41bbfe11eadc45c825619b0"
    },
    "dob": {
      "date": "1990-01-03T23:19:59.095Z",
      "age": 34
    },
    "registered": {
      "date": "2004-03-01T19:00:36.641Z",
      "age": 20
    },
    "phone": "(068) V23-0359",
    "cell": "(096) A89-7176",
    "id": {
      "name": "",
      "value": null
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/93.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/93.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/93.jpg"
    },
    "nat": "UA"
  },
  {
    "gender": "male",
    "name": {
      "title": "Mr",
      "first": "Fer",
      "last": "Walter"
    },
    "location": {
      "street": {
        "number": 9824,
        "name": "De Petten"
      },
      "city": "Hulst",
      "state": "Overijssel",
      "country": "Netherlands",
      "postcode": "0508 UD",
      "coordinates": {
        "latitude": "-89.2644",
        "longitude": "-94.7178"
      },
      "timezone": {
        "offset": "-9:00",
        "description": "Alaska"
      }
    },
    "email": "fer.walter@example.com",
    "login": {
      "uuid": "2a7ec57f-4307-492a-b6be-54423ab4f561",
      "username": "organickoala704",
      "password": "snoop",
      "salt": "CNKNtp4O",
      "md5": "8df6edc66b39275ebd267cbea6bc4788",
      "sha1": "9c33232f302ac4647d46e2cd5e80191083ac80fb",
      "sha256": "f77344fe0e826f9257b3dfd39307c8b8d107427c8c10bf66969e1ae39c62f9eb"
    },
    "dob": {
      "date": "1982-01-23T18:18:00.279Z",
      "age": 42
    },
    "registered": {
      "date": "2020-06-24T14:25:06.267Z",
      "age": 3
    },
    "phone": "(0755) 548860",
    "cell": "(06) 69998405",
    "id": {
      "name": "BSN",
      "value": "60535098"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/31.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/31.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/31.jpg"
    },
    "nat": "NL"
  },
  {
    "gender": "male",
    "name": {
      "title": "Mr",
      "first": "مهدي",
      "last": "مرادی"
    },
    "location": {
      "street": {
        "number": 178,
        "name": "دکتر لواسانی"
      },
      "city": "شیراز",
      "state": "همدان",
      "country": "Iran",
      "postcode": 41744,
      "coordinates": {
        "latitude": "-10.0739",
        "longitude": "-118.6525"
      },
      "timezone": {
        "offset": "+8:00",
        "description": "Beijing, Perth, Singapore, Hong Kong"
      }
    },
    "email": "mhdy.mrdy@example.com",
    "login": {
      "uuid": "4a861ab2-43a9-4d1b-883d-84b95e71accd",
      "username": "ticklishswan550",
      "password": "1michael",
      "salt": "Snc9exbl",
      "md5": "7f90d6e5d5d862580da2d8350590aa88",
      "sha1": "888849b9514ba9e02336a0b5cdada6bd1958d060",
      "sha256": "3e58233c232a74c8959220a117b5f8c2ae9b72c72a12e5261c77e4d959400508"
    },
    "dob": {
      "date": "1956-04-30T20:20:55.295Z",
      "age": 68
    },
    "registered": {
      "date": "2014-09-16T23:54:42.217Z",
      "age": 9
    },
    "phone": "023-01564705",
    "cell": "0952-550-4452",
    "id": {
      "name": "",
      "value": null
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/20.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/20.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/20.jpg"
    },
    "nat": "IR"
  },
  {
    "gender": "male",
    "name": {
      "title": "Mr",
      "first": "Orinder",
      "last": "Sullad"
    },
    "location": {
      "street": {
        "number": 633,
        "name": "Sitabuldi Main Rd"
      },
      "city": "Katni",
      "state": "Goa",
      "country": "India",
      "postcode": 18014,
      "coordinates": {
        "latitude": "68.1137",
        "longitude": "41.4510"
      },
      "timezone": {
        "offset": "-8:00",
        "description": "Pacific Time (US & Canada)"
      }
    },
    "email": "orinder.sullad@example.com",
    "login": {
      "uuid": "f3bc093c-889e-4a0a-825c-183c1e5d3506",
      "username": "goldenwolf164",
      "password": "frodo",
      "salt": "HViXmE9j",
      "md5": "27a9fda179ecd87cf897f1ed47f5b62a",
      "sha1": "3ec23e09dc54f5b17a6321c873ca538ee536c482",
      "sha256": "350643fe5d2b0124baab61346186dcdf4c57582836d6e4e120187f56b0d8da14"
    },
    "dob": {
      "date": "1974-08-30T05:23:09.955Z",
      "age": 49
    },
    "registered": {
      "date": "2006-01-31T09:44:42.044Z",
      "age": 18
    },
    "phone": "7826397240",
    "cell": "9585634708",
    "id": {
      "name": "UIDAI",
      "value": "097687405631"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/86.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/86.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/86.jpg"
    },
    "nat": "IN"
  }
]

export default usersData;
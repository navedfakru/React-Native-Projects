import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { CurrencyInputBox } from '../components'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import useCurrencyInfo from '../hooks/useCurrencyInfo';

const currencyCountry = {
  "Afghan Afghani AFN": "afn",
  "Albanian Lek ALL": "all",
  "Algerian Dinar DZD": "dzd",
  "Angolan Kwanza AOA": "aoa",
  "Argentine Peso ARS": "ars",
  "Armenian Dram AMD": "amd",
  "Aruban Florin AWG": "awg",
  "Australian Dollar AUD": "aud",
  "Azerbaijani Manat AZN": "azn",
  "Bahamian Dollar BSD": "bsd",
  "Bahraini Dinar BHD": "bhd",
  "Bangladeshi Taka BDT": "bdt",
  "Barbadian Dollar BBD": "bbd",
  "Belarusian Ruble BYN": "byn",
  "Belize Dollar BZD": "bzd",
  "Bermudian Dollar BMD": "bmd",
  "Bhutanese Ngultrum BTN": "btn",
  "Bolivian Boliviano BOB": "bob",
  "Botswana Pula BWP": "bwp",
  "Brazilian Real BRL": "brl",
  "Brunei Dollar BND": "bnd",
  "Bulgarian Lev BGN": "bgn",
  "Burundian Franc BIF": "bif",
  "Cambodian Riel KHR": "khr",
  "Canadian Dollar CAD": "cad",
  "Cape Verdean Escudo CVE": "cve",
  "Cayman Islands Dollar KYD": "kyd",
  "Central African CFA Franc XAF": "xaf",
  "Chilean Peso CLP": "clp",
  "Chinese Yuan CNY": "cny",
  "Colombian Peso COP": "cop",
  "Comorian Franc KMF": "kmf",
  "Congolese Franc CDF": "cdf",
  "Costa Rican Colón CRC": "crc",
  "Croatian Kuna HRK": "hrk",
  "Cuban Peso CUP": "cup",
  "Czech Koruna CZK": "czk",
  "Danish Krone DKK": "dkk",
  "Djiboutian Franc DJF": "djf",
  "Dominican Peso DOP": "dop",
  "East Caribbean Dollar XCD": "xcd",
  "Egyptian Pound EGP": "egp",
  "Eritrean Nakfa ERN": "ern",
  "Estonian Kroon EEK": "eek",
  "Ethiopian Birr ETB": "etb",
  "Euro EUR": "eur",
  "Fijian Dollar FJD": "fjd",
  "Gambian Dalasi GMD": "gmd",
  "Georgian Lari GEL": "gel",
  "Ghanaian Cedi GHS": "ghs",
  "Gibraltar Pound GIP": "gip",
  "Guatemalan Quetzal GTQ": "gtq",
  "Guinean Franc GNF": "gnf",
  "Guyanese Dollar GYD": "gyd",
  "Haitian Gourde HTG": "htg",
  "Honduran Lempira HNL": "hnl",
  "Hong Kong Dollar HKD": "hkd",
  "Hungarian Forint HUF": "huf",
  "Icelandic Króna ISK": "isk",
  "Indian Rupee INR": "inr",
  "Indonesian Rupiah IDR": "idr",
  "Iranian Rial IRR": "irr",
  "Iraqi Dinar IQD": "iqd",
  "Israeli New Shekel ILS": "ils",
  "Jamaican Dollar JMD": "jmd",
  "Japanese Yen JPY": "jpy",
  "Jordanian Dinar JOD": "jod",
  "Kazakhstani Tenge KZT": "kzt",
  "Kenyan Shilling KES": "kes",
  "Kuwaiti Dinar KWD": "kwd",
  "Kyrgyzstani Som KGS": "kgs",
  "Lao Kip LAK": "lak",
  "Latvian Lats LVL": "lvl",
  "Lebanese Pound LBP": "lbp",
  "Lesotho Loti LSL": "lsl",
  "Liberian Dollar LRD": "lrd",
  "Libyan Dinar LYD": "lyd",
  "Lithuanian Litas LTL": "ltl",
  "Macanese Pataca MOP": "mop",
  "Macedonian Denar MKD": "mkd",
  "Malagasy Ariary MGA": "mga",
  "Malawian Kwacha MWK": "mwk",
  "Malaysian Ringgit MYR": "myr",
  "Maldivian Rufiyaa MVR": "mvr",
  "Mauritanian Ouguiya MRU": "mru",
  "Mauritian Rupee MUR": "mur",
  "Mexican Peso MXN": "mxn",
  "Moldovan Leu MDL": "mdl",
  "Mongolian Tögrög MNT": "mnt",
  "Moroccan Dirham MAD": "mad",
  "Mozambican Metical MZN": "mzn",
  "Myanmar Kyat MMK": "mmk",
  "Namibian Dollar NAD": "nad",
  "Nepalese Rupee NPR": "npr",
  "Netherlands Antillean Guilder ANG": "ang",
  "New Zealand Dollar NZD": "nzd",
  "Nicaraguan Córdoba NIO": "nio",
  "Nigerian Naira NGN": "ngn",
  "North Korean Won KPW": "kpw",
  "Norwegian Krone NOK": "nok",
  "Omani Rial OMR": "omr",
  "Pakistani Rupee PKR": "pkr",
  "Panamanian Balboa PAB": "pab",
  "Papua New Guinean Kina PGK": "pgk",
  "Paraguayan Guarani PYG": "pyg",
  "Peruvian Sol PEN": "pen",
  "Philippine Peso PHP": "php",
  "Polish Złoty PLN": "pln",
  "Qatari Riyal QAR": "qar",
  "Romanian Leu RON": "ron",
  "Russian Ruble RUB": "rub",
  "Rwandan Franc RWF": "rwf",
  "Saint Helena Pound SHP": "shp",
  "Samoan Tala WST": "wst",
  "Saudi Riyal SAR": "sar",
  "Serbian Dinar RSD": "rsd",
  "Seychellois Rupee SCR": "scr",
  "Sierra Leonean Leone SLL": "sll",
  "Singapore Dollar SGD": "sgd",
  "Solomon Islands Dollar SBD": "sbd",
  "Somali Shilling SOS": "sos",
  "South African Rand ZAR": "zar",
  "South Korean Won KRW": "krw",
  "South Sudanese Pound SSP": "ssp",
  "Sri Lankan Rupee LKR": "lkr",
  "Sudanese Pound SDG": "sdg",
  "Surinamese Dollar SRD": "srd",
  "Swazi Lilangeni SZL": "szl",
  "Swedish Krona SEK": "sek",
  "Swiss Franc CHF": "chf",
  "Syrian Pound SYP": "syp",
  "Tajikistani Somoni TJS": "tjs",
  "Tanzanian Shilling TZS": "tzs",
  "Thai Baht THB": "thb",
  "Tongan Paʻanga TOP": "top",
  "Trinidad and Tobago Dollar TTD": "ttd",
  "Tunisian Dinar TND": "tnd",
  "Turkish Lira TRY": "try",
  "Turkmenistani Manat TMT": "tmt",
  "Ugandan Shilling UGX": "ugx",
  "Ukrainian Hryvnia UAH": "uah",
  "UAE Dirham AED": "aed",
  "US Dollar USD": "usd",
  "Uruguayan Peso UYU": "uyu",
  "Uzbekistani Som UZS": "uzs",
  "Vanuatu Vatu VUV": "vuv",
  "Venezuelan Bolívar VES": "ves",
  "Vietnamese Đồng VND": "vnd",
  "Yemeni Rial YER": "yer",
  "Zambian Kwacha ZMW": "zmw",
  "Zimbabwean Dollar ZWL": "zwl"
};

const CurrencyScreen = () => {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('US Dollar USD')
  const [to, setTo] = useState('Indian Rupee INR')
  const [convertedAmount, setConvertedAmount] = useState(10);
  const currencyInfo = useCurrencyInfo(from);
  const [color, setColor] = useState('')

  const option = Object.keys(currencyCountry);

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount)
  }
  console.log(amount)

  return (
    <View style={styles.mainContainer}>
      <View style={{ flex: .5, backgroundColor: 'red' }}>

      </View>
      <View style={styles.containerInputs}>
        <View style={{ flex: 2.5, gap: 5 }}>
          <TouchableOpacity
            activeOpacity={.9}
            onPress={() => setColor('rgb(251 146 60)')}
          >
            <CurrencyInputBox
              amount={amount}
              currencyOptions={option}
              onCurrencyChange={(currency) => setFrom(currency)}
              currency={from}
              onAmountChange={(amount) => setAmount(amount) && convert()}
              className={color}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={.9}
          >
            <CurrencyInputBox
              amount={convertedAmount}
              currencyOptions={option}
              onCurrencyChange={(currency) => setTo(currency)}
              currency={to}
              amountDisable={false}
              className={'black'}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={swap} style={styles.swap}>
          <MaterialCommunityIcons name="swap-vertical" size={48} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 2, backgroundColor: 'orange' }}>

      </View>
    </View>
  )
}

export default CurrencyScreen

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'rgb(241 245 249)',
    flex: 1
  },
  containerInputs: {
    flexDirection: 'row',
    height: 205,
    marginHorizontal: 10,
  },
  swap: {
    backgroundColor: 'white',
    width: 70,
    marginLeft: 5,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
})
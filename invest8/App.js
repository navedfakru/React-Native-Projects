import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';
import investmentData from './investmentData';
import { AntDesign, Entypo, FontAwesome, FontAwesome5, Foundation, MaterialIcons, Octicons } from '@expo/vector-icons';

export default function App() {

  const lineData = investmentData.graphData.invested;
  const lineData2 = investmentData.graphData.returns;

  const onPressHandel = (message) => {
    Alert.alert(message)
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logoheader}>
          <View style={styles.logoView}>
            <Text style={styles.logo}>1Fi</Text>
            <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>Invest</Text>
          </View>
          <TouchableOpacity onPress={() => onPressHandel("You Click on Notification")}>
            <FontAwesome name="bell-o" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <Text style={{
          textAlign: 'center',
          fontSize: 20,
          color: 'white',
          fontWeight: '500',
          paddingBottom: 5
        }}>Current Value</Text>
        <View style={styles.currentValue}>
          <FontAwesome5 name="rupee-sign" size={20} color="rgba(0, 0, 0, 0.7)" style={styles.rupeelogo} />
          <Text style={{
            fontSize: 30,
            fontWeight: '600',
            color: 'white'
          }}>{investmentData.currentValue.toLocaleString("en-IN")}</Text>
        </View>
        <View
          style={[styles.currentValue, { gap: 2 }]}
        >
          <Text style={{ color: '#fff', fontSize: 18 }}>Total Returns</Text>
          <Entypo name="arrow-long-up" size={18} color="#38DC4B" />
          <Text style={{ color: "#fff", fontSize: 18 }}>{`₹${investmentData.totalReturns.amount.toLocaleString("en-IN")}`}</Text>
          <Text style={{ color: '#38DC4B' }}>{`(+${investmentData.totalReturns.percentage}%)`}</Text>
        </View>
        <View style={styles.numbercard}>
          <View style={styles.card}>
            <Text style={{ color: 'white', fontSize: 13 }}>Invested</Text>
            <Text style={{ color: 'white', fontSize: 17 }}>{`₹${investmentData.invested.toLocaleString('en-IN')}`}</Text>
          </View>
          <View style={styles.card}>
            <Text style={{ color: 'white', fontSize: 13 }}>XIRR</Text>
            <Text style={{ color: 'white', fontSize: 17 }}>{`${investmentData.xirr.toLocaleString('en-IN')}%`}</Text>
          </View>
          <View style={styles.card}>
            <Text style={{ color: 'white', fontSize: 13 }}>1 Day Return</Text>
            <Text style={{ color: 'white', fontSize: 17 }}>{`₹${investmentData.oneDayReturn.amount.toLocaleString('en-IN')}`}<Text style={{ fontSize: 13 }}>{`(+${investmentData.oneDayReturn.percentage}%)`}</Text></Text>
          </View>
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={[styles.chartdenote, { paddingVertical: 10 }]}>
          <View style={[styles.chartdenote, { gap: 2 }]}>
            <Entypo name="controller-stop" style={{ width: 20 }} size={20} color="grey" />
            <Text>Invested</Text>
          </View>
          <View style={[styles.chartdenote, { gap: 2 }]}>
            <Entypo name="controller-stop" style={{ width: 20 }} size={20} color="green" />
            <Text>Returns</Text>
          </View>
        </View>
        <LineChart
          hideYAxisText
          data={lineData}
          data2={lineData2}
          height={100}
          showVerticalLines
          spacing={44}
          // initialSpacing={0}
          color1="grey"
          color2="green"
          textColor1="blue"
          hideDataPoints1
          hideDataPoints2
          textShiftY={-2}
          textShiftX={-5}
          textFontSize={13}
        />
        <TouchableOpacity
          style={styles.investbutton}
          onPress={() => onPressHandel("Invest More")}
        >
          <AntDesign style={{ width: 20 }} name="pluscircle" size={20} color="white" />
          <Text style={{ fontSize: 20, color: 'white' }}>Invest more</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.investbutton, { gap: 2, backgroundColor: '#5E29EB' }]}
          onPress={() => onPressHandel("Get loan against your investments")}
        >
          <FontAwesome name="money" size={24} color="white" />
          <Text style={{ fontSize: 18, color: 'white' }}>Get loan against your investments</Text>
        </TouchableOpacity>
        <View style={styles.btnView}>
          <TouchableOpacity 
            style={styles.portfolioBtn}
            onPress={() => onPressHandel("Protfolio")}
          >
            <Foundation name="graph-bar" size={24} color="#5E29EB" />
            <Text>Portfolio</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.portfolioBtn}
            onPress={() => onPressHandel("Redeem")}
          >
            <MaterialIcons name="rotate-left" size={28} color="#5E29EB" />
            <Text>Redeem</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.portfolioBtn}
            onPress={() => onPressHandel("Transaction")}
          >
            <Octicons name="history" size={24} color="#5E29EB" />
            <Text>Transactions</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar backgroundColor='#811FD5' style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#811FD5',
    paddingTop: 30,
  },
  header: {
    backgroundColor: '#811FD5',
    paddingHorizontal: 10,
    paddingTop: 10
  },
  logoheader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5
  },
  logo: {
    height: 40,
    width: 40,
    backgroundColor: 'black',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 10
  },
  logoView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  rupeelogo: {
    backgroundColor: 'white',
    height: 30,
    width: 30,
    borderRadius: 15,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  currentValue: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 5
  },
  numbercard: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  card: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 10
  },
  bottom: {
    paddingTop: 10,
    backgroundColor: 'white',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingHorizontal: 10,
    flex: 1
  },
  chartdenote: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10
  },
  investbutton: {
    backgroundColor: '#23B371',
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
    gap: 10,
    borderRadius: 10,
    marginVertical: 5,
    alignItems: 'center'
  },
  btnView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20
  },
  portfolioBtn: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#5E29EB',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4
  }
});

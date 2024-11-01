import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Pressable,
  Modal,
} from "react-native";
import MarkdownDisplay from "../components/MarkdownDisplay";

export default function LifeCycle() {
  const [time, setTime] = useState(new Date());
  const [visibleModal, setVisibleModal] = useState(false);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 100);

    return () => clearInterval(timerId);
  }, []);

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let milliseconds = time.getMilliseconds();
  let seconds = time.getSeconds();
  let minutes = time.getMinutes();
  let hours = time.getHours();
  let day = weekday[time.getDay()];
  let monthName = month[time.getMonth()];
  let year = time.getFullYear();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <LinearGradient
      colors={["lightpink", "whitesmoke", "pink"]}
      style={styles.container}
      start={{ x: 0.1, y: 0.1 }}
    >
      <View style={styles.sectionsView}>
        <View style={styles.yearmonthView}>
          <Text style={styles.yearmonthText}>{year}</Text>
        </View>
        <View style={styles.yearmonthView}>
          <Text style={styles.yearmonthText}>{monthName}</Text>
        </View>
      </View>
      <View style={styles.sectionsView}>
        <View style={styles.timeView}>
          <Text style={styles.timeText}>{hours}</Text>
        </View>
        <View style={styles.timeView}>
          <Text style={styles.timeText}>{minutes}</Text>
        </View>
        <View style={styles.timeView}>
          <Text style={styles.timeText}>{ampm}</Text>
        </View>
      </View>
      <View style={styles.sectionsView}>
        <View style={styles.secondView}>
          <Text style={styles.secondText}>{seconds}</Text>
        </View>
        <View style={styles.secondView}>
          <Text style={styles.secondText}>{milliseconds}</Text>
        </View>
      </View>
      <View style={
        {
          width: '100%',
          top: 100
        }}>
        <Pressable
          style={[styles.showcodebtn, {margin: 0}]}
          onPress={() => setVisibleModal(true)}
        >
          <Text style={styles.showcodeText}>Show Code</Text>
        </Pressable>
      </View>
      <Modal visible={visibleModal} transparent={true}>
        <View style={styles.modalView}>
          <Pressable
            style={[
              styles.showcodebtn,
              {
                width: "100%",
                backgroundColor: "rgba(255, 0, 0, 0.7)",
                borderRadius: 0,
                margin: 0,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              },
            ]}
            onPress={() => setVisibleModal(false)}
          >
            <Text style={[styles.showcodeText]}>Close Code</Text>
          </Pressable>
          <MarkdownDisplay>{code}</MarkdownDisplay>
        </View>
      </Modal>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  sectionsView: {
    flexDirection: "row",
    paddingBottom: 10,
    width: "100%",
    justifyContent: "space-between",
  },
  yearmonthView: {
    width: "49%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    height: 100,
    borderRadius: 5,
  },
  yearmonthText: {
    fontFamily: "InterBlack",
    color: "linen",
    fontSize: 25,
  },
  timeView: {
    justifyContent: "center",
    alignItems: "center",
    width: "32%",
    height: 80,
    backgroundColor: "rgba(30, 41, 59, 0.6)",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "paleturquoise",
  },
  timeText: {
    fontFamily: "InterBlack",
    fontSize: 20,
    color: "honeydew",
  },
  secondView: {
    justifyContent: "center",
    alignItems: "center",
    width: "49%",
    height: 80,
    backgroundColor: "rgba(30, 41, 59, 0.6)",
    borderRadius: 5,
    borderWidth: 1,
  },
  secondText: {
    fontFamily: "InterSemi",
    fontSize: 16,
    color: "white",
  },
  // modalcss
  showcodebtn: {
    height: 60,
    backgroundColor: "rgba(0, 0, 255, 0.5)",
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  showcodeText: {
    fontFamily: "InterBlack",
    fontSize: 16,
    color: "whitesmoke",
  },
  modalView: {
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 20,
    margin: 10,
    alignItems: "center",
  },
});

const code = `
# **LifyCyle useEffect**
\`\`\`javascript
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

export default function LifeCycle() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 100);

    return () => clearInterval(timerId);
  }, []);

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let milliseconds = time.getMilliseconds();
  let seconds = time.getSeconds();
  let minutes = time.getMinutes();
  let hours = time.getHours();
  let day = weekday[time.getDay()];
  let monthName = month[time.getMonth()];
  let year = time.getFullYear();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  minutes = minutes < 10 ? \`0${`minutes`}\` : minutes;
  seconds = seconds < 10 ? \`0${`seconds`}\` : seconds;

  return (
    <LinearGradient
      colors={["lightpink", "whitesmoke", "pink"]}
      style={styles.container}
      start={{ x: 0.1, y: 0.1 }}
    >
      <View style={styles.sectionsView}>
        <View style={styles.yearmonthView}>
          <Text style={styles.yearmonthText}>{year}</Text>
        </View>
        <View style={styles.yearmonthView}>
          <Text style={styles.yearmonthText}>{monthName}</Text>
        </View>
      </View>
      <View style={styles.sectionsView}>
        <View style={styles.timeView}>
          <Text style={styles.timeText}>{hours}</Text>
        </View>
        <View style={styles.timeView}>
          <Text style={styles.timeText}>{minutes}</Text>
        </View>
        <View style={styles.timeView}>
          <Text style={styles.timeText}>{ampm}</Text>
        </View>
      </View>
      <View style={styles.sectionsView}>
        <View style={styles.secondView}>
          <Text style={styles.secondText}>{seconds}</Text>
        </View>
        <View style={styles.secondView}>
          <Text style={styles.secondText}>{milliseconds}</Text>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  sectionsView: {
    flexDirection: 'row',
    paddingBottom: 10,
    width: '100%',
    justifyContent: 'space-between',
  },
  yearmonthView: {
    width: '49%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: 100,
    borderRadius: 5
  },
  yearmonthText: {
    fontFamily: 'InterBlack',
    color: 'linen',
    fontSize: 25
  },
  timeView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '32%',
    height: 80,
    backgroundColor: 'rgba(30, 41, 59, 0.6)',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'paleturquoise'
  },
  timeText: {
    fontFamily: 'InterBlack',
    fontSize: 20,
    color: 'honeydew'
  },
  secondView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '49%',
    height: 80,
    backgroundColor: 'rgba(30, 41, 59, 0.6)',
    borderRadius: 5,
    borderWidth: 1
  },
  secondText: {
    fontFamily: 'InterSemi',
    fontSize: 16,
    color: 'white'
  }
});
\`\`\`
`;

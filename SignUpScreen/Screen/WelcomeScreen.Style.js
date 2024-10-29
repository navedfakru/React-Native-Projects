import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#1D1D1D",
    paddingHorizontal: 20,
    shadowColor: '#FF4B26',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 100,
    elevation: 100,
  },
  headerText: {
    color: "#FFFFFF",
    fontFamily: 'Gilroy-Black',
    fontSize: 36,
    // alignSelf: 'flex-start',
    marginBottom: 10
  },
})
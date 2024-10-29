import {StyleSheet} from 'react-native';

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
    alignSelf: 'flex-start',
    marginBottom: 30
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: '#262626',
    marginBottom: 30,
    borderRadius: 10,
    borderWidth: 1,
    elevation: 5,
    paddingHorizontal: 10,
    borderColor: 'black'
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#676767',
    fontFamily: 'Gilroy-Medium',
  },
  icon: {
    marginRight: 10,
  },
  secureIcon: {
    paddingLeft: 10
  },
  policyView: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
    marginBottom: 30
  },
  policyText: {
    color: '#676767',
    textAlign: 'left',
    fontFamily: 'Gilroy-Regular',
    fontSize: 12
  },
  nextButtonView: {
    marginBottom: 40,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  registerText: {
    fontSize: 24,
    fontFamily: 'Gilroy-Bold',
    color: '#ffffff'
  },
  arrowBtn: {
    height: 51,
    width: 51,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF4B26',
    borderRadius: 25,
    shadowColor: '#FF4B26',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 100,
    elevation: 50,
  },
  signupwithView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginVertical: 20
  },
  signupwithBtn: {
    height: 48,
    width: 48,
    backgroundColor: '#262626',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24
  },

})
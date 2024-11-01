import { StyleSheet } from "react-native";

export const markdownStyles = StyleSheet.create({
  heading1: {
    fontFamily: 'InterBlack',
    color: '#212020',
    marginTop: 15,
    marginBottom: 10,
    lineHeight: 40,
    backgroundColor: 'pink',
    padding: 10,
    borderWidth: 1,
    borderColor: 'mediumorchid',
    borderRadius: 10
  },
  heading2: {
    fontFamily: 'InterBold',
    color: '#404040',

    marginTop: 10,
    marginBottom: 5,
    lineHeight: 30,
  },
  body: {
    fontSize: 16,
    // fontFamily: 'Inter',
    lineHeight: 24,
    // backgroundColor: 'pink'
  },
  thead: {
    backgroundColor: 'red',
    color: 'white',
    borderWidth: 1,
  },
  heading3: {
    paddingBottom: 10
  },
  hr: {
    marginVertical: 10
  },
  table: {
    marginVertical: 10,
    borderBottomWidth: 0,
  },
  th: {
    borderLeftWidth: 1
  },
  blockquote: {
    backgroundColor: 'red',
    color: 'white'
  }
});

export const styles = StyleSheet.create({
  page: {
    flex: 1,
    borderRadius: 10,
  },
});
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    padding: 24
  },
  logo: {
    flex: 1,
    alignItems: 'center',
    marginTop: 46
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 40,
    marginBottom: 32,
  },
  input: {
    flex: 1,
    height: 54,
    borderColor: "#7f86a4",
    borderWidth: 1,
    borderRadius: 6,
    color: '#F2F2F2',
    backgroundColor: '#1F1E25',
    padding: 16,
    fontSize: 16,
    marginRight: 4
  },
  button:{
    width: 52,
    height: 52,
    borderRadius: 6,
    backgroundColor: '#FFB8F2',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textCriadasHolder: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  textInfo:{
    flexDirection: 'row',
  },
  numberDisplay:{
    width: 24,
    height: 19,
    borderRadius: 999,
    color: '#F2F2F2',
    backgroundColor: '#333333',
  },
  textCriadas:{
    fontWeight:'bold',
    color: '#4EA8DE',
    paddingRight: 6,
  },
  textConcluidas:{
    fontWeight:'bold',
    color: '#8284FA',
    paddingRight: 6,
  },
  listEmptyHolder:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:48
  },
  listEmptyText1: {
    color: '#808080',
    fontWeight:'bold',
    paddingTop:32
  },
  listEmptyText2: {
    color: '#808080',
  }
});
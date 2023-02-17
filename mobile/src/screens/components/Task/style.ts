import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  taskHolder: {
    width: '100%',
    height: 64,
    backgroundColor: '#262626',
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 10,
    
  },
  taskText:{
    flex: 1,
    color: '#F2F2F2',
    fontSize: 16,
    textDecorationLine: 'line-through'
  },
  deletButton:{
    backfaceVisibility: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    marginEnd: 16,
  }
})
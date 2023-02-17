import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    textCriadasHolder: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    textInfo: {
        flexDirection: 'row',
    },
    numberDisplay: {
        width: 24,
        height: 19,
        borderRadius: 999,
        color: '#F2F2F2',
        backgroundColor: '#333333',
    },
    textCriadas: {
        fontWeight: 'bold',
        color: '#FFB8F2',
        paddingRight: 6,
    },
    textConcluidas: {
        fontWeight: 'bold',
        color: '#7f86a4',
        paddingRight: 6,
    },
});
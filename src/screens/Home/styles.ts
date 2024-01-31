import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    quickSelectRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 4,
        marginBottom: 16
    },
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    quickSelectButton: {
        padding: 8,
        backgroundColor: 'white',
        flex: 1,
        marginHorizontal: 12,
        alignItems: 'center',
        borderRadius: 8
    },
    continueText: {
        color: 'white'
    },
    continueButton: {
        margin: 16,
        // backgroundColor: 'white'
    }
})
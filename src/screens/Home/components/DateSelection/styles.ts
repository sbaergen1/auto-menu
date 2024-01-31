import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    dayText: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 24
    },
    common: {
        padding: 16,
        margin: 16,
        borderRadius: 8
    },
    unselected: {
        backgroundColor: 'grey',
        borderColor: 'black',
        borderWidth: 1,
        shadowOpacity: 0.2
    },
    selected: {
        backgroundColor: '#5c9fd6',
        borderColor: 'black',
        borderWidth: 1,
        shadowOpacity: 0.2
    },
    dateText: {
        fontSize: 24,
    },
    dayTextSection: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-start'
    },
    dayRow: {
        flexDirection: 'row'
    },
    dropdownRow: {
        flexDirection: 'row'
    },
    addFlex: {
        flex: 1
    },
    addPaddingLeft: {
        paddingLeft: 12
    },
    todayBadge: {
        backgroundColor: 'green',
        padding: 4,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 8,
        marginHorizontal: 8,
        alignItems: 'center'
    },
    todayText: {
        fontSize: 12,
        lineHeight: 20,
        fontWeight: 'bold'
    }
})
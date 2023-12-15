import { StyleSheet } from 'react-native'
import Colors from "../../styles/Colors";
import { wScale } from '../../styles/Scale';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: Colors.tab
    },
    assistant: {
        padding: 15,
        marginTop: -15,
        backgroundColor: Colors.tab,
        borderRadius: 9999
    },
    assistantFocus: {
        padding: 15,
        marginTop: -15,
        backgroundColor: Colors.main,
        borderRadius: 9999,
    },
    assistantButton: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        width: 56,
        height: 56,
        backgroundColor: Colors.main,
        borderRadius: 9999
    },
    menuButtons: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 6,
        flex: 1,
        height: 56
    },
    profileImage: {
        width: wScale({ size: 24 }),
        height: wScale({ size: 24 }),
        borderRadius: 9999,
        overflow: 'hidden'
    },
    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    modalView: {
        backgroundColor: Colors.white,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 35,
        alignItems: "center",
        width: '100%',
        height: 300
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        color: Colors.main
    },
    modalButton: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        width: 56,
        height: 56,
        backgroundColor: Colors.main,
        borderRadius: 9999
    },

})
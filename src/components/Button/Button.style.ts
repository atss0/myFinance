import { StyleSheet } from 'react-native';

import Colors from '../../styles/Colors'
import Fonts from '../../styles/Fonts'
import { hScale, wScale } from '../../styles/Scale'

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: wScale({ size: 80 }),
        height: hScale({ size: 40 }),
        borderRadius: 10
    },
    text: {
        fontFamily: Fonts.bold,
        fontSize: hScale({ size: 16 })
    }
});
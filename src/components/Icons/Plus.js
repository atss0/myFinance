import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import Colors from '../../styles/Colors';
const SvgPlus = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width="50"
    height="50"
    viewBox="0 0 490 490"
    fill={Colors.white}
    {...props}>
    <Path d="M227.8 174.1v53.7h-53.7c-9.5 0-17.2 7.7-17.2 17.2s7.7 17.2 17.2 17.2h53.7v53.7c0 9.5 7.7 17.2 17.2 17.2s17.1-7.7 17.1-17.2v-53.7h53.7c9.5 0 17.2-7.7 17.2-17.2s-7.7-17.2-17.2-17.2h-53.7v-53.7c0-9.5-7.7-17.2-17.1-17.2s-17.2 7.7-17.2 17.2" />
  </Svg>
);
export default SvgPlus;

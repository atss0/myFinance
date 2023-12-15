import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import Colors from '../../styles/Colors';
const SvgFacebook = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="katman 2"
    viewBox="0 0 501.75 512.18"
    width="24"
    height="24"
    fill={Colors.white}
    {...props}>
    <Path d="m368.77 285.86 14.09-91.98h-88.22V134.2c0-25.14 12.3-49.7 51.85-49.7h40.13V6.22S350.2 0 315.4 0c-72.65 0-120.16 44.02-120.16 123.78v70.1h-80.79v91.98h80.79v222.29c16.19 2.55 32.79 3.85 49.7 3.85s33.51-1.34 49.7-3.85V285.86z" />
  </Svg>
);
export default SvgFacebook;

import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import Colors from '../../styles/Colors';
const SvgGoogle = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="katman 1"
    viewBox="0 0 501.75 512"
    width="24"
    height="24"
    fill={Colors.white}
    {...props}>
    <Path d="M256 209.45v99.14h137.77c-6.05 31.88-24.2 58.88-51.43 77.03l83.08 64.47c48.41-44.68 76.33-110.31 76.33-188.28 0-18.15-1.63-35.61-4.65-52.36H256ZM112.53 304.73l-18.74 14.34-66.33 51.66C69.58 454.28 155.92 512 255.99 512c69.12 0 127.07-22.81 169.42-61.9l-83.08-64.47c-22.81 15.36-51.9 24.67-86.34 24.67-66.56 0-123.11-44.92-143.36-105.43l-.1-.15Z" />
    <Path d="M27.46 141.27C10.01 175.71 0 214.57 0 256s10.01 80.29 27.46 114.73c0 .23 85.18-66.09 85.18-66.09-5.12-15.36-8.15-31.65-8.15-48.64s3.03-33.28 8.15-48.64l-85.18-66.09ZM256 101.93c37.7 0 71.21 13.03 97.98 38.17l73.31-73.31C382.83 25.37 325.12 0 256 0 155.92 0 69.58 57.48 27.46 141.27l85.18 66.09c20.25-60.51 76.8-105.43 143.36-105.43" />
  </Svg>
);
export default SvgGoogle;

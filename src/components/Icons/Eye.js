import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';
import Colors from '../../styles/Colors';
const SvgEye = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="katman 1"
    viewBox="0 0 511.31 314.59"
    width="24"
    height="24"
    {...props}>
    <Path
      d="M507.08 145.11C502.36 139.21 391.47 0 255.61 0c-67.84 0-129.58 34.8-174.8 70.39-45.32 35.49-74.22 71.77-76.58 74.72C1.38 148.65 0 152.98 0 157.3s1.38 8.55 4.23 12.09c4.72 6 115.61 145.2 251.38 145.2 67.93 0 129.57-34.8 174.89-70.39 45.32-35.49 74.22-71.77 76.58-74.81 2.75-3.54 4.23-7.77 4.23-12.09s-1.48-8.65-4.23-12.19ZM255.6 235.95c-43.36 0-78.65-35.29-78.65-78.65s35.29-78.65 78.65-78.65 78.65 35.29 78.65 78.65-35.2 78.65-78.65 78.65"
      style={{
        fill: Colors.white,
      }}
    />
    <Circle
      cx={255.61}
      cy={157.3}
      r={39.32}
      style={{
        fill: Colors.white,
      }}
      transform="rotate(-85.27 255.601 157.3)"
    />
  </Svg>
);
export default SvgEye;

import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import Colors from '../../styles/Colors';
const SvgHouse = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="katman 1"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill={Colors.main}
    {...props}>
    <Path
      d="M20.84 14.04c-.11 0-.21.09-.21.2v6.4c0 1.3-1.06 2.36-2.36 2.36H14.8c-.36 0-.65-.29-.65-.65v-5.18c0-.59-.48-1.08-1.08-1.08h-2c-.71 0-1.28.57-1.28 1.28v4.98c0 .36-.29.65-.65.65H5.73c-1.31 0-2.36-1.06-2.36-2.36v-6.4c0-.11-.09-.2-.21-.2-1.93 0-2.89-2.33-1.52-3.68l8.84-8.74c.84-.83 2.2-.83 3.04 0l8.84 8.73c1.37 1.35.41 3.68-1.52 3.68Z"
      className="house_svg__cls-1"
    />
  </Svg>
);
export default SvgHouse;

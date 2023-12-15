import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import Colors from '../../styles/Colors';
const SvgSettingsIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill={"none"}
    viewBox="2 2 18 18"
    {...props}>
    <Path
      stroke={Colors.main}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.018 19a.736.736 0 0 1-.721-.627.806.806 0 0 0-.535-.623 5.686 5.686 0 0 1-.66-.28.763.763 0 0 0-.795.052.704.704 0 0 1-.926-.077l-.967-.992a.787.787 0 0 1-.08-.995.857.857 0 0 0 .062-.837 5.883 5.883 0 0 1-.22-.576.851.851 0 0 0-.65-.6.786.786 0 0 1-.651-.776v-1.241a.902.902 0 0 1 .741-.9.981.981 0 0 0 .722-.607c.037-.089.076-.177.117-.264.165-.327.142-.72-.06-1.024a.923.923 0 0 1 .092-1.169l.71-.729a.994.994 0 0 1 1.307-.11l.022.016a1.05 1.05 0 0 0 1.018.1c.358-.132.62-.447.694-.829l.01-.034c.08-.506.506-.878 1.006-.878h.857c.514 0 .952.38 1.036.9l.015.07c.07.366.32.67.66.8.328.144.705.107 1-.1l.049-.036a1.02 1.02 0 0 1 1.342.111l.654.672c.328.338.37.87.098 1.257a1.11 1.11 0 0 0-.071 1.089l.042.1c.136.341.432.589.786.658a.975.975 0 0 1 .803.966V12.6a.86.86 0 0 1-.706.854.938.938 0 0 0-.71.648 6.281 6.281 0 0 1-.153.4.939.939 0 0 0 .076.9.855.855 0 0 1-.085 1.083l-.908.932a.736.736 0 0 1-.967.081.798.798 0 0 0-.839-.05c-.19.097-.386.183-.585.257a.834.834 0 0 0-.538.641.76.76 0 0 1-.74.654h-1.352"
      clipRule="evenodd"
    />
    <Path
      stroke={Colors.main}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.975 12c0 1.289-1.019 2.333-2.275 2.333S9.425 13.289 9.425 12c0-1.289 1.019-2.333 2.275-2.333s2.275 1.044 2.275 2.333"
      clipRule="evenodd"
    />
    
  </Svg>
);
export default SvgSettingsIcon;

import React from "react";
import Svg from "../Svg/Svg";
import { SvgProps } from "../Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 256 256" {...props}>
      <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5" />
    </Svg>
  );
};

export default Icon;

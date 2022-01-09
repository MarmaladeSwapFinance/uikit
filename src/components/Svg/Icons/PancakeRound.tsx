import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 90 90" {...props}>
      <image href="/images/mlm/logo.png" height="100%" width="100%" />
    </Svg>
  );
};

export default Icon;

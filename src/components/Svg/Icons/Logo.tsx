import React from "react";
import { Image } from "../../Image";

const Icon: React.FC<any> = (props) => {
  const { width, height, ...other } = props;
  return <Image src="/images/mlm/logo.png" width={32} height={32} {...other} alt="MarmaladeSwap Logo" />;
};

export default Icon;

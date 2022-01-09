import React from "react";
import { Image } from "../../..";

const Icon: React.FC<any> = (props) => {
  const { width, height, isDark, ...other } = props;

  const logoByTheme = () => (isDark ? "/images/mlm/biglogodark.png" : "/images/mlm/biglogo.png");

  return <Image src={logoByTheme()} width={205} height={26} {...other} alt="MarmaladeSwap Logo" />;
};

export default Icon;

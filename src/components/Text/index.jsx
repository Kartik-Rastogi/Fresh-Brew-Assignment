import React from "react";

const sizeClasses = {
  txtInterRegular20: "font-inter font-normal",
  txtInterSemiBold25: "font-inter font-semibold",
  txtInterSemiBold45: "font-inter font-semibold",
  txtInterSemiBold34: "font-inter font-semibold",
  txtInterMedium21: "font-inter font-medium",
  txtInterSemiBold29: "font-inter font-semibold",
  txtInterMedium15: "font-inter font-medium",
  txtInterSemiBold40: "font-inter font-semibold",
  txtInterSemiBold70: "font-inter font-semibold",
  txtInterSemiBold22: "font-inter font-semibold",
  txtInterSemiBold30: "font-inter font-semibold",
  txtInterSemiBold22Bluegray60001: "font-inter font-semibold",
  txtInterSemiBold20: "font-inter font-semibold",
  txtInterLight21: "font-inter font-light",
  txtInterSemiBold25Black900: "font-inter font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };

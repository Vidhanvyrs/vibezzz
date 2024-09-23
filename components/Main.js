import React from "react";

export default function Main(props) {
  const { children } = props;
  //here we are going to give flex-1 to move the footer all way to down
  return <main className="flex flex-1 p-4 felx-col sm:p-8 ">{children}</main>;
}

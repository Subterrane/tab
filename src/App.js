import React, { Fragment, useEffect } from "react";
import { Background, Time } from "./components";

export default function App() {
  useEffect(() => document.body.blur(), []);

  return (
    <Fragment>
      <Background />
      <Time />
    </Fragment>
  );
}

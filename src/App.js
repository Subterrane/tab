import React, { Fragment } from "react";
import { Background, Search, Time } from "./components";

export default function App() {
  return (
    <Fragment>
      <Background />
      <Search />
      <Time />
    </Fragment>
  );
}

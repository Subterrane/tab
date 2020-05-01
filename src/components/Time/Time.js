import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";

const Time = styled.div`
  display: block;
  position: fixed;
  top: 10%;
  left: 5%;
  width: 300px;
  color: #fff;
  font-size: 4em;
  line-height: 3.5rem;
`;

export default function () {
  const [time, setTime] = useState();

  const getTimeZone = () =>
    localStorage.getItem("timeZone") || "America/Los_Angeles";

  const setTimeZone = (tz) =>
    localStorage.setItem("timeZone", tz || "America/Los_Angeles");

  const getTime = useCallback(
    () =>
      new Date().toLocaleString("en-US", {
        timeZone: getTimeZone() || "America/Los_Angeles",
        weekday: "long",
        month: "long",
        day: "2-digit",
      }),
    []
  );

  const updateTimezone = () => {
    setTimeZone(prompt("Change Time Zone", getTimeZone()));
    setTime(getTime());
  };

  useEffect(() => {
    setTime(getTime());
    setInterval(() => setTime(getTime()), 10 * 1000);
  }, [getTime]);

  return <Time onClick={updateTimezone}>{time}</Time>;
}

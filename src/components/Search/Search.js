import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const Form = styled.form`
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, 0);
`;

const Input = styled.input`
  border: none;
  outline: none;
  color: #fff;
  background: transparent;
  font-family: Gruppo, Helvetica, sans-serif;
  font-size: 3em;
  text-shadow: 1px 1px 3px black;
  text-align: center;
  padding: 10px;
`;

export default function Search() {
  const inputEl = useRef(null);

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  return (
    <Form action="https://www.google.com/search" method="get">
      <Input type="text" name="q" alt="search" ref={inputEl} />
    </Form>
  );
}

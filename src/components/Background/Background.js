import React, { Fragment, useState, useEffect } from "react";
import styled from "styled-components";

const defaultBgStyle = {
  backgroundImage: "none",
  opacity: 0,
};

const Fullscreen = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const BGContainer = styled(Fullscreen)`
  background-size: cover;
  transition: opacity 500ms ease-in;
  opacity: 0;
`;

const BGOpacity = styled(Fullscreen)`
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.5),
    transparent,
    transparent
  );
`;

export default function Background() {
  const [bgStyle, setBgStyle] = useState(defaultBgStyle);

  const callback = (err, req) => {
    if (err) return console.error(req.statusText);
    const img = URL.createObjectURL(req.response);
    setBgStyle({
      backgroundImage: `url("${img}")`,
      opacity: 1,
    });
  };

  useEffect(() => {
    const req = new XMLHttpRequest();
    req.responseType = "blob";
    req.onerror = () => callback(new Error(), req);
    req.onload = () => callback(null, req);
    req.open("GET", "https://source.unsplash.com/random?nature");
    req.send();
    return req.abort;
  }, []);

  return (
    <Fragment>
      <BGContainer style={bgStyle} />
      <BGOpacity />
    </Fragment>
  );
}

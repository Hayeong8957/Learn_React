import React, { useState } from "react";
import Button from "./Button";
import styled, { css } from "styled-components";

function Assignment() {
  const [bool, setBool] = useState(false);
  const Circle = styled.div`
    width: 5rem;
    height: 5rem;
    background: ${(props) => props.color || "black"};
    border-radius: 50%;
    text-align: center;
    color: white;
    display: block;
    margin: auto;

    ${(props) =>
      props.huge &&
      css`
        width: 10rem;
        height: 10rem;
      `}
  `;
  function onClick() {
    if (bool === true) {
      setBool(false);
      console.log();
    } else {
      setBool(true);
    }
  }

  return (
    <>
      {bool === true ? ( //
        <Circle color="red" huge>
          true
        </Circle>
      ) : (
        <Circle color="blue" huge>
          false
        </Circle>
      )}
      <Button onClick={onClick} text="색바꾸기!" />
    </>
  );
}

export default Assignment;

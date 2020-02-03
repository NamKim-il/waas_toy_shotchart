import React from 'react';
import styled from 'styled-components';

const Index = ({ made, madeclick, numpad, failclick, fail }) => (
  <ButtonContainer>
    <div className="big">
      <div className="button">
        <div className="plma" onClick={() => madeclick(true)}>+</div>
        <input type="number" value={made} onChange={(e) => numpad(true, e.target.value)} />
        <div className="plma" onClick={() => madeclick(false)}>-</div>
      </div>
      <div className="title">MADE</div>
    </div>
    <div className="big">
      <div className="button">
        <div
          className="plma"
          onClick={() => failclick(1)}
        >+
        </div>
        <input
          type="number"
          value={fail}
          onChange={(e) => numpad(false, e.target.value)}
        />
        <div
          className="plma"
          onClick={() => failclick(0)}
        >-
        </div>
      </div>
      <div className="title">FAIL</div>
    </div>
  </ButtonContainer>
);
export default Index;

const ButtonContainer = styled.div`
    display: flex;
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    input {
        height: 40px;
        width: 100%;
        border: none;
        text-align: center;
        font-size: 30px;
    }
    .plma {
        text-align: center;
        font-size: 35px;
        cursor: pointer;
    }
    .button {
        position: relative;
        width: 100px;
        left: calc(50% - 50px);
        border-radius: 20%;
        border: 1px solid black;
    }
    .title {
        position: relative;
        left: 6px;
        width: calc(100% - 6px);
        top: 5px;
        text-align: center;
        font-family: "consolas";
        font-size: 35px;
        letter-spacing: 5px;
    }
    .big {
        width: 50%;
    }
`;

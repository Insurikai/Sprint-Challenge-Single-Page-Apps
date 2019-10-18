import React from "react";
import styled from 'styled-components';

export default function CharacterCard(props) {
  const Card = styled.div`
    margin: 2vh auto;
    padding: 2vh 1vw;
    background: #aaa;
    border-radius: 10px;
    text-align: center;
    width: 45%;
  `;
  const Name = styled.h1`
    font-size: 2.4rem;
    margin-bottom: 1vh;
  `;
  const Bottom = styled.div`
    display: flex;
  `;
  const Info = styled.p`
    width: 50%;
    font-size: 1.2rem;
  `;
  return (
    <Card>
      <Name>{props.character.name}</Name>
      <Bottom>
        <Info>{props.character.species}</Info>
        <Info>{props.character.gender}</Info>
      </Bottom>
    </Card>
  );
}

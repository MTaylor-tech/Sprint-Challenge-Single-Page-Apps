import React from "react";
import styled from 'styled-components';

const CharCard = styled.div`
  width: 20%;
  height: 400px;
  display: inline-block;
  align-items: center;
  padding: 2vw;
  text-align: center;

  h2 {
    display: inline-block;
    height: 50px;
  }

  img {
    width: 95%;
    border-radius: 10px;
  }
`;

export default function CharacterCard(props) {
  return (
    <CharCard>
      <h2>{props.character.name}</h2>
      <img src={props.character.image} alt={props.character.name} />
      <p>Location: {props.character.location.name}</p>
    </CharCard>
  );
}

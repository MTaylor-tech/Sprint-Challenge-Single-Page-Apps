import React from "react";
import styled from 'styled-components';

const CharCard = styled.div`
  width: 20%;
  height: 500px;
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
      <p>Species: {props.character.species}</p>
      {props.character.type!==''?<p>Type: {props.character.type}</p>:<></>}
      <p>Gender: {props.character.gender}</p>
      <p>Status: {props.character.status}</p>
      <p>Location: {props.character.location.name}</p>
      <p>Origin: {props.character.origin.name}</p>
    </CharCard>
  );
}

import React from "react";
import styled from 'styled-components';

const LocCard = styled.div`
  width: 20%;
  height: 200px;
  display: inline-block;
  align-items: center;
  padding: 2vw;
  text-align: center;

  h2 {
    display: inline-block;
    height: 50px;
  }
`;

export default function LocationCard(props) {

  return (
    <LocCard>
      <h2>{props.location.name}</h2>
      <p>Type: {props.location.type}</p>
      <p>Dimension: {props.location.dimension}</p>
    </LocCard>
  );
}

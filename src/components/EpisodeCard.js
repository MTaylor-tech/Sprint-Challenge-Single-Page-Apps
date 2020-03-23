import React from "react";
import styled from 'styled-components';

const EpiCard = styled.div`
  width: 45%;
  display: inline-block;
  align-items: center;
  padding: 2vw;
  text-align: center;

  h2 {
    display: inline-block;
  }

  img {
    width: 95%;
    border-radius: 10px;
  }
`;

export default function EpisodeCard(props) {
  return (
    <EpiCard>
      <h2>{props.episode.name}</h2>
      <p>{props.episode.episode}</p>
      <p>Air Date: {props.episode.air_date}</p>
    </EpiCard>
  );
}

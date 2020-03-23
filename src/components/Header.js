import React from "react";
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Head = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export default function Header() {
  return (
    <Head className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <div>
        <Link to="/">Home</Link> | <Link to="/characters/">Characters</Link> | <Link to="/locations/">Locations</Link>
      </div>
    </Head>
  );
}

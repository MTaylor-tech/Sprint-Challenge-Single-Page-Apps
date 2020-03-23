import React, { useEffect, useState } from "react";
import axios from 'axios';
import EpisodeCard from './EpisodeCard.js';
import styled from 'styled-components';
import SearchForm from './SearchForm.js';

const EpiList = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: stretch;
  width: 100%;
`;

const Head = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const PNLink = styled.span`
  display: inline;
  text-decoration: underline;
  color: blue;

  &.undecorated {
    text-decoration: none;
  }
`;

export default function EpisodeList() {
  // TODO: Add useState to track data from useEffect
  const [episodeData, setEpisodeData] = useState([]);
  const [nextPage, setNextPage] = useState('https://rickandmortyapi.com/api/episode/?page=2');
  const [prevPage, setPrevPage] = useState('');
  const [currentPage, setCurrentPage] = useState('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/episode/');
  const [searchString, setSearchString] = useState('');

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(currentPage)
      .then(result => {
        console.log(result);
        setEpisodeData(result.data.results);
        setNextPage(result.data.info.next);
        setPrevPage(result.data.info.prev);
      }).catch(error => {
        console.log(error);
      });
  }, [currentPage]);

  const goToPrev = () => {
    setCurrentPage(prevPage);
  };

  const goToNext = () => {
    setCurrentPage(nextPage);
  };

  const searchFunction = (searchQuery) => {
    //console.log(`Search: ${searchQuery}`);
    //setSearchString(searchQuery);
    setCurrentPage(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/episode/?${searchQuery}`);
  };

  return (
    <div>
      <Head>
        <SearchForm searchFunction={searchFunction} type='episode' />
        <div>
          {(prevPage!=='')?<PNLink onClick={goToPrev} > Previous </PNLink>:<> </>}
          {(prevPage!=='')&&(nextPage!=='')?<PNLink className='undecorated'> | </PNLink>:<> </>}
          {(nextPage!=='')?<PNLink onClick={goToNext} > Next </PNLink>:<> </>}
        </div>
      </Head>
      <EpiList>
        {episodeData.map(epi=><EpisodeCard episode={epi} key={epi.id} />)}
      </EpiList>
    </div>
  );
}

import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, HitsPerPage, PoweredBy } from 'react-instantsearch';
import './App.css'; // Importing the CSS file
import Eyeball from 'react-eyeball';

// Replace with your own Algolia credentials
const searchClient = algoliasearch('3AUHR4IE0C', 'b152fa9673ced6bc795ad370b729bfd2');

// Define how each hit (result) will be rendered
const Hit = ({ hit }) => (
  <div className="hit-card"> 

    {/* <div className="title-area" >
      <h2>{hit.title}</h2>
    </div> */}

    <h1> * {hit.title}</h1>

    <div>

      <div className="image-column">
        <a href={hit.url}> 
          <img src={hit.image} height="400" alt="journal page" />
        </a>
      </div>
      <div className="info-column">
        <textarea >{hit.content}</textarea>
      </div>

    </div>
  </div>
);

function App() {
  return (
    <InstantSearch indexName="Crepuscular_Rays" searchClient={searchClient}>

      <Eyeball />

      <SearchBox className="search-box"
              translations={{
                placeholder: "Crepuscular Rays"
              }} />

      
      
        <PoweredBy theme="dark" style={{ width: "200px" }}/>

      <div className="hits-grid" >

        <Hits hitComponent={Hit}  /> 

      </div>
      
      <HitsPerPage
          items={[
            { label: '1 hit per page', value: 1, default: true },
            { label: '3 hits per page', value: 3 },
          ]}
        />
        
    </InstantSearch>
  );
}

export default App;
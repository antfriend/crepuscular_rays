import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, HitsPerPage, PoweredBy, Configure } from 'react-instantsearch';
import './App.css'; // Importing the CSS file
import Eyeball from 'react-eyeball';

// Replace with your own Algolia credentials
const searchClient = algoliasearch('3AUHR4IE0C', 'b152fa9673ced6bc795ad370b729bfd2');

const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

let some_value = params.q || 'crepuscular rays';
// Define how each hit (result) will be rendered
const Hit = ({ hit }) => (
  <div className="hit-card"> 
    <h1>{hit.title}</h1>
    <div className="innards">
    <img src={hit.image} width="95%" alt="journal page" />
    <br></br>
    <textarea defaultValue={hit.content} ></textarea>
    </div>
  </div>
);


function App() {
  return (
    <InstantSearch 
      indexName="Crepuscular_Rays" 
      searchClient={searchClient} 
      initialUiState={{
        Crepuscular_Rays: {
          query: some_value
        },
      }}
      // searchParameters={
      //   query={some_value} 
      // }
    >
        <Configure
        analytics={false}
        hitsPerPage={1}
      />
      
      <PoweredBy theme="dark" style={{ width: "200px" }}/>

      <div className="eye-search">
        <Eyeball />
        <SearchBox className="search-box" placeholder={some_value} />
      </div>
              
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
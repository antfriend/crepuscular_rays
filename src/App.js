import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, PoweredBy, Configure } from 'react-instantsearch';
import './App.css'; // Importing the CSS file
import Eyeball from 'react-eyeball';
import {Helmet} from "react-helmet";

const searchClient = algoliasearch('3AUHR4IE0C', 'b152fa9673ced6bc795ad370b729bfd2');

const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

let some_value = params.q || 'crepuscular rays';

const Hit = ({ hit }) => (
  <div className="hit-card"> 
    <Helmet>
        <meta charSet="utf-8" />
        <meta property="og:title" content={hit.title} />
        <title>{hit.title}</title>
        <meta property="og:url" content={hit.url} />
        <meta property="og:image:url" content={hit.image} />
        <link rel="canonical" href={hit.url} />
    </Helmet>
    <h1>{hit.title}</h1>
    <div className="innards">
    <img src={hit.image} width="95%" alt="journal page" />
    <br></br>
    <textarea defaultValue={hit.content} ></textarea>
    </div>
  </div>
);

// class Application extends React.Component {
//   render () {
//     return (
//         <div className="application">
//             <Helmet>
//                 <meta charSet="utf-8" />
//                 <title>My Title</title>
//                 <link rel="canonical" href="http://mysite.com/example" />
//             </Helmet>
//             ...
//         </div>
//     );
//   }
// };

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
    >



    <Configure  analytics={true}  hitsPerPage={1}  />
      
      <PoweredBy theme="dark" style={{ width: "200px" }}/>

      <div className="eye-search">
        <Eyeball />
        <SearchBox className="search-box" placeholder={some_value} />
      </div>
              
      <div className="hits-grid" >
      
        <Hits hitComponent={Hit}  /> 

      </div>
      

        
    </InstantSearch>
  );
}

export default App;
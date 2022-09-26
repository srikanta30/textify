import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import TextViewer from './components/TextViewer';
import Uploader from './components/Uploader';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <SearchBar/>
      <Uploader/>
      <TextViewer/>
      <Footer/>
    </div>
  );
}

export default App;

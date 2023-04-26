import  './styles/index.css';
import Header from './components/header';
import Article from './components/article'
import Slider from './slider';
import Searchbar from './searchbar';
import Background from './components/background';
import { useState } from 'react';



function App() {

  //state
  //function to change state
  const [zip, setZip] = useState<number | undefined>(0);
  const [brewScore, setBrewScore] = useState<number | undefined >(0);


  return (
    <>
     
      <nav id="nav">
        <Header /> 
      </nav>
      <div id="top">
        <Article />
      </div>

      <div className="flex flex-col w-full lg:flex-row bg-almond">
        <div className="grid flex-grow h-14 card bg-base-300 rounded-box place-items-center"></div> 
        <div className="divider lg:divider-horizontal"></div> 
        <div className="grid flex-grow h-14 card bg-base-300 rounded-box place-items-center"></div>
      </div>

      <div id="mid" className="flex bg-almond">
        <Searchbar setZip={setZip} getZip={zip} setBrew={setBrewScore}/>
        <Slider brew={brewScore}/>
      </div>
      <div id="bot">

      </div>    
      <Background></Background>
    </>
  )
}

export default App

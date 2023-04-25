import  './styles/index.css';
import Header from './components/header';
import Slider from './slider';
import Searchbar from './searchbar';

function App() {

  return (
    <>
      <nav id="nav">
        <Header /> 
      </nav>
      <div id="mid" className="bg-almond flex">
        <Searchbar />
        <Slider />
      </div>
      <div id="bot">

      </div>
    </>
  )
}

export default App

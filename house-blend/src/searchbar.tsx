import CoffeeIcon from './assets/Coffee.png';
import axios from 'axios';


interface SearchBarProps {
  getZip: number | undefined,
  setZip: React.Dispatch<React.SetStateAction<number | undefined>>,
  setBrew: React.Dispatch<React.SetStateAction<number | undefined>>,
}

export default function SearchBar(props: SearchBarProps) {
  
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    props.setZip(Number(event.target.value));
  }

  let brewData: number;

  function brew(zipcode: number):void {
    console.log("Making an axios request with", zipcode)
    axios.get(`http://localhost:5173/coffee/${zipcode}`)
      .then(response => {
        brewData = Number(response.data)
      })
      .then((response) => console.log("received data:", brewData, response))
      .then((response) => {
        props.setBrew(brewData);
        console.log(response)
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <>
      {/* <div>
        <h1>Discover how the number of coffee shops in your neighborhood can offer insights into local real estate prices.</h1>
      </div> */}
      <section className="w-1/2 flex items-center justify-center">
        <input type="text" placeholder="Enter location" className="rounded-full w-1/3 text-center" onChange={handleChange}></input>
        <button className="rounded-full mx-2.5 px-3 py-1 text-white bg-sealBrown-100 flex flex-row items-center" onClick={() => brew(Number(props.getZip))}>Brew<img src={CoffeeIcon} className="flex items-center h-6 w-6 mx-1"></img></button>
      </section>
    </>
  )
}
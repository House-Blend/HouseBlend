import CoffeeIcon from './assets/Coffee.png'

export default function SearchBar() {

  return(
    <section className="w-1/2 flex items-center justify-center">
      <input type="text" placeholder="Enter location" className="pl- rounded-full w-1/3 text-center"></input>
      <button className="rounded-full mx-2.5 px-2.5 text-white bg-sealBrown-100 md:flex">Brew<img src={CoffeeIcon} className="md:h-full md:w-"></img></button>
    </section>
  )
}
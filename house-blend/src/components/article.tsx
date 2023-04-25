import Header from '../assets/CoffeeWood.jpeg';
import Wording from '../assets/Wording2.png'

export default function Article ()  {

  return(
    <>
    <div className="h-80 max-h-80 flex" style={{ backgroundImage: `url(${Header})`, backgroundSize: "cover", backgroundPosition: "center" }}>

        <div className="flex h-52 border border-white w-1/3">
          <img src={Wording}></img>
          <h1 className="text-white">That the number of coffee shops in your neighborhood can offer insight into local real estate prices</h1>
        </div>
       
   
    </div>
    </>
  )

}
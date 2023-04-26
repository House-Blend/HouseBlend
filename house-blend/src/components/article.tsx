import Header from '../assets/CoffeeWood.jpeg';
import Wording from '../assets/TaglineMain.png'

export default function Article ()  {

  return(
    <>
    <div className="h-80 max-h-80 flex" style={{ backgroundImage: `url(${Header})`, backgroundSize: "cover", backgroundPosition: "center" }}>

        <div className="flex justify-center h-60 w-1/3 pt-5 pl-20">
          <img src={Wording}></img>   
        </div>

       
   
    </div>
    </>
  )

}
import { useState, useEffect } from "react";
import Iced from './assets/iced.png';
import Lukewarm from './assets/lukewarm.png';
import Piping from './assets/piping.png'


interface SliderProps {
  brew: number,
}

export default function Slider(props: SliderProps) {

  const [value, setValue] = useState<number>(3);

  


  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(Number(event.target.value))
  }

  useEffect(() => {
    moveThumb(Number(value))
  }, [value])






  function moveThumb(value: number) {
    const slider: HTMLElement | null = document.getElementById('temp-slider');
    if (slider !== null) {
      slider.style.setProperty('--thumb-position', value + 'rem');
    }
  }

  return (
  <div className="flex flex-col w-1/2 h-80 justify-center items-center">
    <p>Location: New York, NY</p>
    <section className="w-1/3">
      <div className="slider-container">
        <input type="range" min="0" max="20" step="1" className="slider" id="temp-slider" />
        <div className="range-container">
          <span className="range range-iced"><img src={Iced} className="w-7 h-7"></img></span>
          <span className="range range-lukewarm"><img src={Lukewarm} className="w-7"></img></span>
          <span className="range range-piping"><img src={Piping} className="w-7 h-7"></img></span>
        </div>
      </div>
   
    </section>
    <br></br>
    <br></br>
    <section className="">
       <div id="sliderInput">
       <input type="text" className="color-black" onChange={handleChange} placeholder="Input here"></input>
       </div>
    </section>
  </div>
  )

}
import { useEffect } from "react";
import Iced from './assets/iced.png';
import Lukewarm from './assets/lukewarm.png';
import Piping from './assets/piping.png'


interface SliderProps {
  brew: number | undefined,
}

export default function Slider(props: SliderProps) {

  //make sure that brew is accesible here every time it changes 

  useEffect(() => {
    moveThumb(Number(props.brew));
  }, [props.brew])

  function moveThumb(value: number) {
    const slider: HTMLElement | null = document.getElementById('temp-slider');
    if (slider !== null) {
      slider.style.setProperty('--thumb-position', value + 'rem');
    }
  }

  return (
    <div className="flex flex-col w-1/2 h-80 justify-center items-center">


      <section className="w-1/3">
        <div className="slider-container">
          <input type="range" min="0" max="20" step="1" className="slider" id="temp-slider" />
          <div className="range-container">
            <span className="range range-iced"><img src={Iced} className="w-7 h-7"></img></span>
            <span className="range range-lukewarm"><img src={Lukewarm} className="w-7"></img></span>
            <span className="range range-piping"><img src={Piping} className="w-7 h-7"></img></span>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="mt-8">
          {/* <p>Location: New York, NY</p>
        <p>Average Housing Price</p>
        <p>Coffee Shops Present</p>
        <p>Population</p>
        <p>Brew Score</p> */}
        </div>

      </section>
    </div>
  )

}
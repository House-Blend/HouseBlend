import { useState, useEffect } from "react";

export default function Slider() {

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
      slider.style.setProperty('--thumb-position', value + 'px');
    }
  }

  return (
  <div className="flex h-80">
    <section className="bg-sky-300">
      <div className="slider-container">
        <input type="range" min="0" max="15" step="1" className="slider" id="temp-slider" />
        <div className="range-container">
          <span className="range range-iced">Iced</span>
          <span className="range range-lukewarm">Lukewarm</span>
          <span className="range range-piping">Piping</span>
        </div>
      </div>
   
    </section>
    <br></br>
    <section className="">
       <div id="sliderInput">
       <input type="text" className="color-black" onChange={handleChange} placeholder="Input here"></input>
       </div>
    </section>
  </div>
  )

}
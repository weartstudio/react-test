import { useState, useEffect } from 'react'
import data from './assets/data.json'
import { randomInt } from './helpers/randomInt'
import Top from './components/Top'
import Middle from './components/Middle'
import Bottom from './components/Bottom'
import Anime from "@mollycule/react-anime";

export default function App() {

  const [picked, setPicked] = useState(randomInt(data.length))
  const [show, setShow] = useState(false)

  const changeItem = () => {
    // generate random until not equal previous
    let random;
    do {
      random = randomInt(data.length)
    }
    while (random == picked);
    // save the result
    setPicked(random)
  }

  useEffect(()=>{
    if(show){
      changeItem()
    }
  },[show])

  return (
    <>
      <button className='change' onClick={()=>setShow(prev => (!prev))}>Change</button>
      { show ?
        <Anime
            in
            appear
            duration={1200}
            onEntering={{ translateY: [-30, 0], opacity: [0, 1] }}
            onExiting={{ translateY: -30, opacity: 0 }}
            easing="easeOutCubic"
          >
            <div className="App">
              <Top color={data[picked]?.color} >{ data[picked]?.name }</Top>
              <Middle fromto={
                {
                  from: data[picked]?.from,
                  to: data[picked]?.to
                }
              } />
              <Bottom data={data[picked]?.talent} color={data[picked]?.color} />
            </div>
        </Anime>
        : ''
      }
    </>
  )
}

import { useState } from "react"
import { create, all } from 'mathjs'

const config = { }
const math = create(all, config)


const App = () => {

  const [result, setResult] = useState("")

  const buttonValues: string[] = ["7","8","9",
        "DEL","4","5","6","+",
        "1","2","3","-",",","0","/","x","RESET","="]
  return (
    <div className="app">
      <div className="calculator">
        <div className="top">
          <h3>calc</h3>
          <p style={{marginLeft:"auto", fontSize:"0.8rem"}}>Theme</p>
          <div className="rangeWrapper"><input type="range"   min="0" max="2" step="1" 
          onChange={(e) =>{
            const s: string = e.target.value
            if(s === "0")
              document.documentElement.setAttribute("data-theme", "")
            if(s === "1")
              document.documentElement.setAttribute("data-theme", "theme2")
            if(s === "2")
              document.documentElement.setAttribute("data-theme", "theme3")
          }}
          
        />
        <div className="themeChoice">
          <p>1</p> <p>2</p> <p>3</p>
        </div>
        </div>
        </div>
        <div className="middle"><h1>
            {result}          
          </h1></div>
        <div className="bottom">
          {buttonValues.map((val, index)=> <div 
            onClick={() => {
              if(index == 16){
                setResult("")
              }
              else if(index === 3){
                setResult(p => p.length > 0 ? p.slice(0, p.length-1) : p)
              }
              else if(index == 17){
                const res = math.evaluate(result.replace("x","*").replace(",","."))
                setResult(res)
              }
              else{
                setResult(p => p + val)
              }
            }}
          className={`button` } id={`button-${index}`} >
            {val}
          </div>)}
        </div>
      </div>
    </div>

  )
}

export default App;
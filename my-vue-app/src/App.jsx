import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import UserCard from './UserCard'


function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([])
  const [inputData, setInputData] = useState("")
  const [loading, setLoading] = useState(false)

  
  const getData=()=>{
    fetch("https://api.github.com/users").then(response=>response.json()).then(data=>setData(data)) 
  }
  
  const getInputData = (e)=>{
    setInputData(e.target.value)
    
  }
  
  
  const init = ()=>{
    setTimeout(()=>setLoading(prevstate=>!prevstate), 3000)
    getData()

  }
  const most = data.filter(element=> element.login.includes(inputData)).map(element=> <UserCard avatar_url={element.avatar_url} login={element.login} type={element.type} site_admin={element.site_admin} inputData={inputData}  />)
  const most2= data.map(element=> <UserCard avatar_url={element.avatar_url} login={element.login} type={element.type} site_admin={element.site_admin} inputData={inputData}  />)
console.log(data)
// console.log(inputData)
// console.log(most)

useEffect( init, [])

return (

    <div className="App">
       {loading? (<><input type="text" onChange={getInputData} />
      <div className="motherShip">

          {inputData? most:most2}

      </div></>):<div className="loadingScreen">Loading..</div>}
    </div>
  )
}

export default App


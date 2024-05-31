import { useEffect, useState } from 'react'
import './App.css'
import {Card} from './components/Card'
import axios from 'axios'
import AddData from './components/AddData'

function App() {

    // useState Variable
    const [taskdata,setTaskData] = useState([])
    const [show,setShow] = useState(false)
    const showStyle = show?{backgroundColor : "red"}:{backgroundColor :"#0dcaf0" }
    // endpoint
    const url = "https://662ce3830547cdcde9df662d.mockapi.io/data"
    // Read Operation
    const getData = async ()=>{
        // Get - Using Axios
        axios.get(url).then((response)=>setTaskData(response.data))
    }
    // render every time the filter changes
    useEffect(()=>{getData()},[])
  return (
    <>
      <div className='container'>
        <h4 className='text-info text-center mt-3'>Axios-CRUD</h4>
        <AddData url={url} taskData={taskdata} setTaskData={setTaskData} />
        <button className='btn text-light border border-info m-4' style={showStyle} onClick={()=>setShow(!show)}>{show?"Close":"Show Data"}</button>
        <div className='cardArea d-flex flex-wrap gap-4 mt-2 m-4 '>
         { show && taskdata.map((element,i)=><Card key={i} {...element} url={url} taskData={taskdata} setTaskData={setTaskData}/>)}
        </div>
    </div>
    </>
  )
}

export default App

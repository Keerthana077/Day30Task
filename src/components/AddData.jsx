import axios from 'axios'
import React, { useState } from 'react'

const AddData = ({url,taskData,setTaskData}) => {
    const [name,setName] = useState('')
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [street,setStreet] = useState('')
    const [city,setCity] = useState('')
    const [zipcode,setZipcode] = useState('')
    const [lat,setLat] = useState('')
    const [lon,setLon] = useState('')
    const [phone,setPhone] = useState('')
    const [company,setCompany] = useState('')
    const [website,setWebsite] = useState('')
    // get
    const getData = async ()=>{
        // get -using axios
        axios.get(url).then((response)=>setTaskData(response.data))
    }
    // update
    const handleClick =async(name,username,email,street,city,zipcode,company,phone,website,lat,lon)=>{
            setName("")
            setUsername("")
            setEmail("")
            setStreet("")
            setCity("")
            setZipcode("")
            setCompany("")
            setPhone("")
            setWebsite("")
            setLat("")
            setLon("")
          if(name!='' && username!='' && email!='' && street!='' && city!='' && zipcode!='' && company!='' && phone!='' && website!='' && lat!='' && lon!=''){
              let detail = {name:name,username:username,email:email,street:street,city:city,zipcode:zipcode,company:company,phone:phone,website:website,lat:lat,lon:lon}
              // Post -using Axios 
              let response = await axios.post(url,detail, {headers: {
                'Content-Type': 'application/json'
            }})
              console.log(response.data)
                getData()
          } else {
            alert("Fields cannot be empty")
          }      
      }
    
  return (
    <>
        <div>
            <div className='row m-4'>
                <input className='col-3 border border-info' type="text" value={name} name="name" onChange={(e)=>setName(e.target.value)}  placeholder='Name'/>
                {/* create d-flex d-wrap justify-content-around m-3 */}
                <span className='col-1'/>
                <input className='col-3 border border-info' type="text" name="username" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='Username' />
                <span className='col-1'/>
                <input className='col-3 border border-info' type="email" value={email} name="email" onChange={(e)=>setEmail(e.target.value)}  placeholder='Email Address'/>
                
            </div>
            <div className='row m-4'>
                <input className='col-3 border border-info' type="text" value={street} name="street" onChange={(e)=>setStreet(e.target.value)}  placeholder='Street'/>
                {/* create d-flex d-wrap justify-content-around m-3 */}
                <span className='col-1'/>
                <input className='col-3 border border-info' type="text" name="City" value={city} onChange={(e)=>setCity(e.target.value)} placeholder='City' />
                <span className='col-1'/>
                <input className='col-3 border border-info' type="text" value={zipcode} name="zipcode" onChange={(e)=>setZipcode(e.target.value)}  placeholder='Zipcode'/>
                
            </div>
            <div className='row m-4'>
                <input className='col-3 border border-info' type="text" value={company} name="company" onChange={(e)=>setCompany(e.target.value)}  placeholder='Company'/>
                {/* create d-flex d-wrap justify-content-around m-3 */}
                <span className='col-1'/>
                <input className='col-3 border border-info' type="text" name="phone" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder='Phone' />
                <span className='col-1'/>
                <input className='col-3 border border-info' type="text" value={website} name="website" onChange={(e)=>setWebsite(e.target.value)}  placeholder='Website'/>
            </div>
            <div className='row m-4'>
            <input className='col-2 border border-info' type="text" value={lat} name="lat" onChange={(e)=>setLat(e.target.value)}  placeholder='Latitude'/>
            {/* create d-flex d-wrap justify-content-around m-3 */}
            <span className='col-2'/>
            <input className='col-2 border border-info' type="text" name="lon" value={lon} onChange={(e)=>setLon(e.target.value)} placeholder='Longitude' />
            <span className='col-2'/>
            <input className="btn btn-sm btn-info text-light col-2"  type="submit" value="Add Data" onClick={()=>handleClick(name,username,email,street,city,zipcode,company,phone,website,lat,lon)} />
        </div>
        </div>
    </>
  )
}

export default AddData
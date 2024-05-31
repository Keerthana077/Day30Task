import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Card = ({name,username,email,street,city,zipcode,company,phone,website,lat,lon,url,taskdata,setTaskData,id}) => {

    const [newName,setnewName] = useState(name)
    const [newUsername,setnewUsername] = useState(username)
    const [newEmail,setnewEmail] = useState(email)
    const [newStreet,setnewStreet] = useState(street)
    const [newCity,setnewCity] = useState(city)
    const [newZipcode,setnewZipcode] = useState(zipcode)
    const [newLat,setnewLat] = useState(lat)
    const [newLon,setnewLon] = useState(lon)
    const [newPhone,setnewPhone] = useState(phone)
    const [newCompany,setnewCompany] = useState(company)
    const [newWebsite,setnewWebsite] = useState(website)  
    // get/read
    const getData = async ()=>{
      // get -using axios
      axios.get(url).then((response)=>setTaskData(response.data))
    }
    // delete
    const handleDelete = async(id)=>{
        // delete - using axios
        await axios.delete(`${url}/${id}`)
        getData()
    }
    // edit
    const [edit,setEdit] = useState(false)
    const handleEdit = ()=>{
      setEdit(!edit)
      
    }
    
    // update
    const handleUpdate =async(id,newName,newUsername,newEmail,newStreet,newCity,newZipcode,newLat,newLon,newPhone,newCompany,newWebsite)=>{
      let updateDetail = {name :newName,username:newUsername,email:newEmail,street:newStreet,city:newCity,zipcode:newZipcode,company:newCompany,phone:newPhone,website:newWebsite,lat:newLat,lon:newLon}
      // put - using axios
      await axios.put(`${url}/${id}`,updateDetail)
      setEdit(!edit)
      getData()
    }
    
  return (
    <>
        <div className="card mt-2" style={{width: "20rem"}}>
        <div className="card-body">
            <p className="card-text">Name : {edit?<input type="text" name="" id="" value={newName} onChange={(e)=>setnewName(e.target.value)} />:name}</p>
            <p className="card-text">Username : {edit?<input type="text" name="" id="" value={newUsername} onChange={(e)=>setnewUsername(e.target.value)} />:username}</p>
            <p className="card-text">Email : {edit?<input type="email" name="" id="" value={newEmail} onChange={(e)=>setnewEmail(e.target.value)} />:email}</p>
            <p className="card-text">Street : {edit?<input type="text" name="" id="" value={newStreet} onChange={(e)=>setnewStreet(e.target.value)} />:street}</p>
            <p className="card-text">City : {edit?<input type="text" name="" id="" value={newCity} onChange={(e)=>setnewCity(e.target.value)} />:city}</p>
            <p className="card-text">Zipcode : {edit?<input type="text" name="" id="" value={newZipcode} onChange={(e)=>setnewZipcode(e.target.value)} />:zipcode}</p>
            <p className="card-text">Phone : {edit?<input type="text" name="" id="" value={newPhone} onChange={(e)=>setnewPhone(e.target.value)} />:phone}</p>
            <p className="card-text">Company : {edit?<input type="text" name="" id="" value={newCompany} onChange={(e)=>setnewCompany(e.target.value)} />:company}</p>
            <p className="card-text">Website : {edit?<input type="text" name="" id="" value={newWebsite} onChange={(e)=>setnewWebsite(e.target.value)} />:website}</p>
            <p className="card-text">Latitude : {edit?<input type="text" name="" id="" value={newLat} onChange={(e)=>setnewLat(e.target.value)} />:lat}</p>
            <p className="card-text">Longitude : {edit?<input type="text" name="" id="" value={newLon} onChange={(e)=>setnewLon(e.target.value)} />:lon}</p>

            <div className='d-flex flex-wrap justify-content-end'>
            {edit?<button className="btn btn-info text-light m-1" onClick={()=>setEdit(!edit)}>Back</button>:''}
            {edit?<button className="btn btn-warning text-light m-1" onClick={()=>handleUpdate(id,newName,newUsername,newEmail,newStreet,newCity,newZipcode,newLat,newLon,newPhone,newCompany,newWebsite)}>Update</button>:<button className="btn btn-warning text-light m-1" onClick={()=>handleEdit()}>Edit</button>}
            <button className="btn btn-danger m-1" onClick={()=>handleDelete(id)}>Delete</button>
            </div>
        </div>
        </div>
    </>
  )
}


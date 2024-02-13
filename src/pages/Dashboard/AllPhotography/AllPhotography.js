import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const AllPhotography = () => {

    const allPhotos = useLoaderData()
    const [Photos, setPhotos] = useState(allPhotos)
    const opts = {
        height: '200',
        width: '100%',
        playerVars: {
          autoplay: 1,
        },
      };

    
    const handleVideoDelete = _id =>{
        console.log(_id);
        fetch(`http://localhost:5000/deletePhoto/${_id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.deletedCount > 0){
                const remaining = Photos.filter(video => video._id !== _id);
                console.log(remaining);
                setPhotos(remaining);
            }
        })
    }

    return (
        <div>
            
            
<div  className="videoBox">

{
    Photos.map(Photo => <div key={Photo._id} className="singleBox">
         <div  className="imgBx">
     <h2 className='videoName'>{Photo.name}</h2>
        <img src={Photo.img_1} alt="arjit" style={{ height: "255px" }}/>
     </div>
     <div  className="AllContent">
        <button className='d-none'>Edit</button>
        <button className='deleteBtn' onClick={()=>handleVideoDelete(Photo._id)}>Delete</button>
     </div>
    </div>)
}

</div>


        </div>
    );
};

export default AllPhotography;
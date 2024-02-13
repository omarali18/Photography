import React, { useEffect, useState } from 'react';
import "./AllVideography.css"
import YouTube from 'react-youtube';
import { useLoaderData } from 'react-router-dom';

const AllVideography = () => {

    const allVideos = useLoaderData()
    const [videos, setvideos] = useState(allVideos)
    const opts = {
        height: '200',
        width: '100%',
        playerVars: {
          autoplay: 1,
        },
      };

    
    const handleVideoDelete = _id =>{
        console.log(_id);
        fetch(`http://localhost:5000/deleteVideo/${_id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.deletedCount > 0){
                const remaining = videos.filter(video => video._id !== _id);
                console.log(remaining);
                setvideos(remaining);
            }
        })
    }

    return (
        <div>
            
            


            
<div  className="videoBox">
 
{
    videos.map(video => <div key={video._id} className="singleBox">
         <div  className="imgBx">
     <h2 className='videoName'>{video.name}</h2>
         <YouTube videoId={video.video} opts={opts} />
     </div>
     <div  className="AllContent">
        <button className='d-none'>Edit</button>
        <button className='deleteBtn' onClick={()=>handleVideoDelete(video._id)}>Delete</button>
     </div>
    </div>)
}

</div>




        </div>
    );
};

export default AllVideography;
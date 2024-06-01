import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import Loader from './Loader';
import VideoCard from './VideoCard';


const Feed = () => {
  
  const {keyword,loader,fetchApi}=useContext(AppContext)
  const [videos,setVideos]=useState([]);

  async function getVideos(keyword){
    const data=await fetchApi(keyword);
    console.log(data);
    setVideos(data);
    // console.log(videos);
  }

  useEffect( ()=>{
    getVideos(keyword)
  },[keyword])
  
  return (
    <div className=' p-4  items-center   mx-auto flex flex-col lg:gap-5 relative w-full h-full '>
       
       {
        loader?(<Loader/>):(
             <div className=' feed  h-full feed  overflow-y-scroll  grid grid-cols-3  max-sm:grid-cols-1   gap-4 p-2 '>
              {
                videos.length===0 ? (
                    <h1>No videos found</h1>
                ):(
                    <>
                     {
                        videos.map((video,index)=>{
                            return <VideoCard key={video?.videoId} {...video}/>
                        })
                     }
                    </>
                )
              }
             </div>
            )
       }
    </div>
  )
}

export default Feed
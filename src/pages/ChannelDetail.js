import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router'

import { options } from '../utils/Api';
import VideoCard from '../components/VideoCard';

const ChannelDetail = () => {
  // const location=useLocation();
  // const channelId=location.pathname.split("/").at(-1);
  const params=useParams();
  const channelId=params.channelid;
  console.log("channel Id");
  console.log(channelId);
  const [channelData,setChannelData]=useState([]);

  async function getchannelData(channelId){
    try{
      const result=await fetch(`https://youtube-v3-alternative.p.rapidapi.com/channel?id=${channelId}`,options);
      const data=await result.json();
      console.log(data);
      setChannelData(data.data);
    }
    catch(err){
      console.log("Error while fetching channel data","=>",err)
    }
  }
  useEffect( ()=>{
    getchannelData(channelId)
  },[params])
  return (
    <div className='  p-4 flex flex-col gap-4  w-full h-[calc(100vh-5rem)] overflow-y-scroll feed text-white'>
      <div  className=' w-full grid grid-cols-3 max-sm:grid-cols-1 gap-4'>
         {
          channelData?.map((video,index)=>{
            return <VideoCard key={index} {...video}/>
          })
         }
      </div>
    </div>
  )
}

export default ChannelDetail








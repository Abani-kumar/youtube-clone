import React from 'react'
import { Link } from 'react-router-dom'
import millify from 'millify'

const VideoCard = ({richThumbnail,publishedText,channelTitle,thumbnail,title,videoId,viewCount,type,fromwatchpage,channelId,description}) => {

  return (
    <div>
      {
        type!=="channel"?
        (
          <Link className={`flex duration-1000 hover:scale-[1.01] ${fromwatchpage?" max-sm:flex-col flex-row gap-2":"flex-col "}`} to={`/watchvideo/${videoId}`}>
            <div className=' relative'>
              <img src={type==="video"?thumbnail[0]?.url:thumbnail[3]?.url} className={`rounded-md ${"max-sm:w-[93vw] max-sm:h-[200px]  "} `}/>

            </div>
            <div className={`flex flex-col text-white ${fromwatchpage && " w-[calc(100%-200px)] "}`}>
                <h1 className={`${fromwatchpage && " truncate"}`}>{title}</h1>
                <h1 className=' text-richblack-300'>{channelTitle}</h1>
                <div className=' flex gap-3 text-richblack-300'>
                    {
                      viewCount?(<h1>{millify(viewCount)} views</h1>):(
                        <button className=' text-sm bg-pink-400 rounded-md px-2  text-white'>Live</button>
                      )
                    }
                    <h1>{publishedText}</h1>
                </div>
            </div>
          </Link>
        ):(<Link className='  flex flex-col gap-2 items-center text-white' to={`/channel/${channelId}`}>
                <div className=' relative'>
                <img src={thumbnail[0].url} className=" rounded-full"/>
               </div>
               <div>
                <h1 className=' font-bold text-lg text-center'>{channelTitle}</h1>
                <h1>{description}</h1>
               </div>
           </Link>)
      }
    </div>
  )
}

export default VideoCard
import { createContext, useState } from "react";
import { options } from "../utils/Api";
export const AppContext=createContext();

function AppContextProvider({children}){
    const [loader,setLoader]=useState(false);
    const [keyword,setKeyword]=useState('New');

    async function fetchApi(keyword){
        setLoader(true);
        try{
            
           const res=await fetch(`https://youtube-v3-alternative.p.rapidapi.com/search?query=${keyword}&geo=IN&lang=hi`,options);
           const {data}=await res.json();
           return data; 
        }
        catch(err){
            console.log('error in data',err);
        }
        finally{
            setLoader(false);
        }

    }

    let value={
        keyword,
        setKeyword,
        loader,
        setLoader,
        fetchApi
    }

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}



export default AppContextProvider;
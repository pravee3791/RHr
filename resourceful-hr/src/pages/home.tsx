import { useEffect, useState } from "react"
import  albumService  from "../services/api";
import {requestAlbum,loadAlbum} from "../stores/slices/album";

export default function Home(){
    /**
     * Load Album Data on Page load
     */
    useEffect(()=>{
        requestAlbum();
        albumService.getApi()
                    .then((res) => {
                        loadAlbum(res.data);
                    })
    },[])
    return(
        <>
            <div>Home Page</div>
        </>
    )
}
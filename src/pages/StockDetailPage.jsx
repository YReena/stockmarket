import { useParams } from "react-router";
import finnHub from "../api/finnHub";
import {useEffect} from 'react';


export const StockDetailPage = ()=>{
    const {symbol} = useParams();

    useEffect(()=>{
        const fetchData =async()=>{
        const date = new Date ();
        const currentTime = Math.floor(date.getTime()/1000);
        let oneDay ;

        // if(date.getDate() == 6){
        //     oneDay = currentTime - 2*24*60*60;  
        // }else if(date.getDate() == 0){
        //     oneDay = currentTime - 3*24*60*60;  
        // }
        // else {
        //     oneDay = currentTime -1*24*60*60;  
        // }
        oneDay = currentTime - 3*24*60*60;
        const response = await finnHub.get("/stock/candle/",{
          params:{
            symbol,
            from:oneDay,
            to:currentTime,
            resolution :30
          }   
        })
        console.log(response)
        }
        fetchData()
    },[])
    return (<>
    <h1>stockdetailpage{symbol}</h1></>)
}
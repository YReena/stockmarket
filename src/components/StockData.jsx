import React, { useEffect, useState } from 'react';
import finnHub from "../api/finnHub";

const StockData = ({symbol}) => {
    const [stockData, setStockData] = useState();

    useEffect(()=>{
        const fetchData = async () => {
            try {
              const response = await finnHub.get("/stock/profile2", {
                params: {
                  symbol
                }
              })
             setStockData(response.data)
             
             
            }
            catch (error) {
              console.log(error)
            }
      
         }
         fetchData() 
    },[])
    return (<>
    {  stockData && 
        <div className='row border bg-white rounded shadow-sm p-4 mx-auto stock-infor'>
            <div className='col'>
                <div>
                    <span className='fw-bold'>name : </span>
                    {stockData.name}
                </div>
                <div>
                    <span className='fw-bold'>country :</span>
                    {stockData.country}
                </div>
                <div>
                    <span className='fw-bold'>ticker : </span>
                    {stockData.country}
                </div>
            </div>
            <div className='col'>
                <div>
                    <span className='fw-bold'>Exchange : </span>
                    {stockData.exchange}
                </div>
                <div>
                    <span className='fw-bold'>Industry : </span>
                    {stockData.finnhubIndustry}
                </div>
                <div>
                    <span className='fw-bold'>IPO : </span>
                    {stockData.ipo}
                </div>
            </div>
            <div className='col'>
                <div>
                    <span className='fw-bold'>MarketCap :</span>
                    {stockData.marketCapitalization}
                </div>
                <div>
                    <span className='fw-bold'>Share Outstanding : </span>
                    {stockData.shareOutstanding}
                </div>
                <div>
                    <span className='fw-bold'>Url : </span>
                    {stockData.weburl}
                </div>
            </div>

        </div>
}
    </>)
}

export default StockData;
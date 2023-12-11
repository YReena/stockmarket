import { useParams } from "react-router";
import finnHub from "../api/finnHub";
import { useEffect, useState } from 'react';
import { StockChart } from "../components/StockChart";


export const StockDetailPage = () => {
  const { symbol } = useParams();
  const [result, setResult] = useState([]);
  const [charData, setCharData] = useState();

  const formatData = (data) => {
    console.log(data);
    return data.map((ele, index) => {
      return {
        x: ele.period,
        y: ele.surprise
      }
    })
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await finnHub.get("/stock/earnings", {
          params: {
            symbol,
            limit: 8
          }
        })
          
        setCharData({
          final: formatData(response.data)
        })
      }
      catch (error) {
        console.log(error)
      }

    }
    console.log(charData)
   fetchData()
  }, [symbol])
  return (<>
    {charData ? <div><StockChart charData={charData} /></div> : <></>}
  </>)
}
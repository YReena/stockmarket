import finnHub from '../api/finnHub';
import {useState, useEffect,useContext} from 'react';
import { FaLongArrowAltDown } from "react-icons/fa";
import { FaLongArrowAltUp } from "react-icons/fa";
import { WatchListContext } from '../context/watchListContext';
import { useNavigate } from 'react-router-dom';



const StockList = ()=>{
    const navigate = useNavigate();
    const [stock, setStock] = useState([]);
    const {watchList} = useContext(WatchListContext);
    

    const chngecolor=(data)=>{
        return data>0?"success":"danger";
    }
    const renderIcon=(data)=>{
        return data>0?<FaLongArrowAltUp />:<FaLongArrowAltDown />;
    }
    useEffect(()=>{
        let isMount = true;
    const fetchData = async()=>{
        try{ 
            console.log("reena");
            const responses = await Promise.all(watchList.map((stock)=>{
                return finnHub.get("/quote",{
                    params:{
                        symbol : stock
                    }
                })
            }))
            const data = responses.map((response)=>{
                return {
                   data : response.data,
                   symbol : response.config.params.symbol
                }
            })
             if(isMount){
             setStock(data);  
             console.log(data);
             }
        }
        
        catch(error){
            console.log(error)
        }
        
    } 
    fetchData();
    return()=>(isMount=false)
    },[watchList])

    const handleStockSelect =(symbol)=>{
    navigate(`detail/${symbol}`)
    }
    return(<>
     <table className='table hover mt-5'>
        <thead className='' style={{color:"rgb(79,82,102)"}}>
            <tr>
                <th scope='col'>Name</th>
                <th scope='col'>Last</th>
                <th scope='col'>chg</th>
                <th scope='col'>chg%</th>
                <th scope='col'>High</th>
                <th scope='col'>Low</th>
                <th scope='col'>Open</th>
                <th scope='col'>Pclose</th>
            </tr>
        </thead>
        <tbody>
            {stock.map((stockdata)=>{
                return(<>
                <tr style={{cursor:"pointer"}} className='table-row'key={stockdata.symbol} onClick={()=>handleStockSelect(stockdata.symbol)}>
                    <th scope='row'>{stockdata.symbol}</th>
                    <td>{stockdata.data.c}</td>
                    <td className={`text-${chngecolor(stockdata.data.d)}`}>{stockdata.data.d}{renderIcon(stockdata.data.d)}</td>
                    <td className={`text-${chngecolor(stockdata.data.dp)}`}>{stockdata.data.dp}{renderIcon(stockdata.data.d)}</td>
                    <td>{stockdata.data.h}</td>
                    <td>{stockdata.data.l}</td>
                    <td>{stockdata.data.o}</td>
                    <td>{stockdata.data.pc}</td>
                    </tr>
                </>)
            })}
        </tbody>
     </table>
    </>)
}

export default StockList;
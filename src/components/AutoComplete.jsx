import React,{useEffect, useState, useContext} from 'react';
import finnHub from '../api/finnHub';
import { WatchListContext } from '../context/watchListContext';

const AutoComplete =()=>{
    const [search, setSearch] = useState("");
    const [result, setResult] = useState([]);
    const {addStock, deleteStock} = useContext(WatchListContext);
    const renderDropDown=()=>{
        const dropDown = search ? "show":null;
        return(<>
         <ul className={`dropdown-menu ${dropDown}`}style={{height:"200px",overflowY:"scroll", overflowX:"hidden", cursor:"pointer"}}>
               {result.map((result)=>{
                return (<>
                <li className='dropdown-item' key={result.symbol} onClick={()=>{addStock(result.symbol) 
                    setSearch("")}}>{result.description}({result.symbol})</li>
                </>)
               })}
            </ul>
        </>)
    }


    useEffect(()=>{
        let isMounted = true;
        const fetchData = async()=>{
            try{
                const response = await finnHub.get("/search",{
                    params:{
                        q:search
                    }
                })
                if(isMounted){
                    setResult(response.data.result);
                }
            }
            catch(error){
                console.log(error)
            }
        }
            if(search.length>0){
              fetchData()
        }
        else{
            setResult([]);
        }

        return ()=>isMounted=false;
    },[search]);

  
    return(<>
     <div className='w-50 p-2 rounded mx-auto inputbox'>
        <h1 className='w-50 p-2 rounded mx-auto'>Stock Market</h1>
        <div className='form-floating dropdown'>
            <input type="text" id="search" className='form-control' placeholder='Search' value={search} onChange={(e)=>setSearch(e.target.value)} autoComplete='off'/>
            <label htmlFor='search'>Search</label>
            {renderDropDown()}
        </div>
     </div>
    </>)
}
export default AutoComplete;
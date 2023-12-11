import Chart from 'react-apexcharts';
import {useState} from 'react';

export const StockChart = ({charData})=>{
    const {final ,symbol} = charData;
    const color = [final.length-1].surprise - final[0].surprise >0?"red":"green"
    const options ={
        colors:[color],
        title :{
            text:symbol
        },
        chart:{
            id:"stock data",
            animations :{
                speed : 1300
            }
        },
        xaxis:{
            type:"datetime"
        }
    }

    const series=[{
        name:symbol,
        data:final
    }]
    return(<>
    <div className='mt-5 p-4 shadow-sm chart'>
        <h1 className='w-50 p-2 rounded mx-auto'>{symbol}</h1>
        <Chart options={options} series={series} type='area' width="50%"></Chart></div></>)
}
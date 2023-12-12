import Chart from 'react-apexcharts';
import { useState } from 'react';
import StockData from './StockData';

export const StockChart = ({ charData , symbol}) => {
    const { final} = charData
    const color = final[final.length - 1].surprise - final[0].surprise > 0 ? "green" : "red"
    const options = {
        colors: [color],
        title: {
            text: symbol
        },
        chart: {
            id: "stock data",
            animations: {
                speed: 1300
            }
        },
        xaxis: {
            type: "datetime"
        }
    }

    const series = [{
        name: symbol,
        data: final
    }]
    return (<>
        <div className='p-4 shadow-sm chart'>
            <h1 className='chart-title'>{symbol}</h1>
            <div className='chart-area'>
            <Chart options={options} series={series} type='area' width="50%"></Chart>
            </div>
            {charData && <StockData  symbol={symbol}/>}
        </div></>)
}
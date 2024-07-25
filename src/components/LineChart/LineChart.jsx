import { useEffect, useState } from 'react'
import Chart from 'react-google-charts';

const LineChart = ({historicalData}) => {
// console.log(historicalData.prices);
    let [data, setData] = useState([["Date","Prices"]]);

    useEffect(()=>{
        let dataCopy = [["Date","Prices"]];
        if(historicalData){
            // console.log(historicalData.prices.length);
            historicalData.prices.map((item)=>{
                dataCopy.push([`${new Date(item[0]).toLocaleDateString().slice(0,-5)}`,item[1]])
            })
            setData(dataCopy)
        }
    },[historicalData])
  return (
    <div>
    <Chart 
        chartType='LineChart'
        data={data}
        height="100%"
        legendToggle
    />
    </div>
  )
}

export default LineChart
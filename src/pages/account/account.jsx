import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { cardApi } from "../../api/api";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export function Account() {

  const [chartData,setChartData]=useState()

  async function getData() {
    try {
      const data =await cardApi.charts()
      console.log("data",data);
      setChartData(data)
    } catch {
    console.log("error");
    }
  }

  console.log(chartData);

  useEffect(()=>{
      getData()
  },[])

  const getMonthLabels = () => {
    const labels = [];
    for (let i = 0; i < 12; i++) {
      const date = new Date();
      date.setMonth(date.getMonth() - (11 - i));
      date.setMonth(date.getMonth() - 3); //
      labels.push(date.toLocaleString("default", { month: "long" }));
    }
    return labels;
  };
  const data = {
    labels: getMonthLabels(),
    datasets: [
      {
        label: "Sales Number",
        data: (chartData&& chartData.map(item=>item.incomne)),
        borderColor: "red",
        backgroundColor: ["#64CFF6"],
        borderWidth: 0,
        width: 10,
        barThickness: 5,
        borderRadius: 20,
        // borderDash: [2, 2],
      },
      {
        label: "Sales Numberc",
        data: (chartData&& chartData.map(item=>item.outcome)),
        borderColor: "red",
        backgroundColor: ["#6359E9"],
        borderWidth: 0,
        width: 10,
        barThickness: 5,
        borderRadius: 20,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: "category",
        barThickness: 10,
        categorySpacing: 100,
        margin: 30,
        // padding: 20
        // boxWidth:20
      },
      y: {
        beginAtZero: true,
        barThickness: 10,
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          // fontSize: 10,
          usePointStyle: true,
          boxHeight: 8,
          fullSize: 10,
          maxWidth: 5,
          pointStyleWidth: 10,
          // pointStyleHeight:10,
          fontSize: 5,
        },
        template: {
          maxWidth: 5,
        },
      },
      elements: {
        point: {
          // radius: 2,
          // pointStyle: "circle",
        },
      },
    },
    indexAxis: "x",
    barPercentage: 0.4,
    categoryPercentage: 0.8,
  };
  return (
    <div>
      <Bar style={{ width: 600, height: 300 }} data={data} options={options} />

        
    </div>
  );
}

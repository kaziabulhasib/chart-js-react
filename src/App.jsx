import { useState } from "react";
import "./App.css";
import { Data } from "../utils/data";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import PieChart from "./components/PieChart";
import { BarChart } from "./components/BarChart ";
import LineChart from "./components/LineChart";

function App() {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div>
      <h1>Chart js with react</h1>
      <div className='App'>
        <LineChart chartData={chartData} />
        <BarChart chartData={chartData} />

        <PieChart chartData={chartData} />
      </div>
    </div>
  );
}

export default App;

import React, { useContext } from 'react';
import Paper from '@mui/material/Paper';
import { TotalContext } from '../../context/TotalContext';

//import {Routes, Route, Link} from "react-router-dom";
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Title,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { Stack, Animation } from '@devexpress/dx-react-chart';
import Navbar from '../Navbar/Navbar';


// Take the results state and translate the value of each type of climate pollution to the graph data


const Root = props => (
  <Legend.Root {...props} sx={{ display: 'flex', margin: 'auto', flexDirection: 'row' }} />
);
const Label = props => (
  <Legend.Label {...props} sx={{ whiteSpace: 'nowrap' }} />
);

const Results = () => {

  const total =   {
  travel: 10,
  food: 10,
  energy: 10,
};



 const energyConsumption = [
    {
      country: 'User', Travel: total.travel, Food: total.food, Energy: total.energy, Clothing: 4,
    }, {
      country: 'Average UK', Travel: 1, Food: 2, Energy: 3, Clothing: 4,
    }, {
      country: 'Average Worldwide', Travel: 1, Food: 2, Energy: 3, Clothing: 4,
    }];


  const chartData = energyConsumption;

  return (
    <>
      {/* <Navbar /> */}
      <Paper>
        <Chart data={chartData}>
          <ArgumentAxis />
          <ValueAxis max={2400} />

          <BarSeries
            name="Travel"
            valueField="Travel"
            argumentField="country"
          />
          <BarSeries name="Food" valueField="Food" argumentField="country" />
          <BarSeries
            name="Energy"
            valueField="Energy"
            argumentField="country"
          />
          <BarSeries
            name="Clothing"
            valueField="Clothing"
            argumentField="country"
          />
          <Animation />
          <Legend
            position="bottom"
            rootComponent={Root}
            labelComponent={Label}
          />
          <Title text="Your Carbon Footprint Comparison" />
          <Stack
            stacks={[{ series: ["Travel", "Food", "Energy", "Clothing"] }]}
          />
        </Chart>
      </Paper>
    </>
  );
};

 export default Results ;
import React from 'react';
import {
  chartExample2
} from "../variables/charts";
import { Bar } from 'react-chartjs-2';
import { Container } from './styles';

const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat','Sun+'],
  datasets: [
    {
      label: '# of Votes',
      data: [16, 25, 23, 30, 26, 19, 26],
      backgroundColor: '#5FE3A1',
      borderColor: '#5FE3A1',
      borderWidth: 1,
      barPercentage: 0.25,
      categoryPercentage: 0.5,
      maxBarThickness:15,
      tickMarkLength:5,
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {

          beginAtZero: true,
        },
      },
    ],
  },
};

const VerticalBar = () => {
  return (
    <>
      <Container>
        <div className="header">
          <div className="subscription-header">
            <div>

            </div>

          </div>

          <Bar  data={data} options={chartExample2.options} width="500" height="250" margin='0' />
        </div>
      </Container>
    </>
  );
};

export default VerticalBar;

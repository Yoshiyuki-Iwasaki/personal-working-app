import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import { options, data } from "../../const/data";
import Layout from "../../components/Layout";
import styled from "styled-components";

const Block = styled.div``;
const Button = styled.button``;
const ChatWrapper = styled.div`
  margin: 0 auto;
  width: 500px;
`;

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const App = () => {
  const [chartType, setChartType] = useState<string>("bar");

  return (
    <Layout>
      <Button onClick={() => setChartType("bar")}>Bar Chart</Button>
      <Button onClick={() => setChartType("line")}>Line Chart</Button>
      <Block>
        {chartType == "bar" && (
          <>
            <ChatWrapper>
              <Bar options={options} data={data} />
            </ChatWrapper>
          </>
        )}
        {chartType == "line" && (
          <>
            <ChatWrapper>
              <Line options={options} data={data} />
            </ChatWrapper>
          </>
        )}
      </Block>
    </Layout>
  );
};

export default App;

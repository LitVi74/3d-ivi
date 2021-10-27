import React from "react";
import {
  Chart,
  ChartTitle,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
} from "@progress/kendo-react-charts";
import "hammerjs";
const categories = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];



const Bar = props => {
  return (
    <Chart
      style={{
        height: 350,
      }}
    >
      <ChartTitle text="Statistic" />
      <ChartLegend position="top" orientation="horizontal" />
      <ChartCategoryAxis>
        <ChartCategoryAxisItem categories={categories} startAngle={45} />
      </ChartCategoryAxis>
      <ChartSeries>
        {props.statistic.map((item, idx) => (
          <ChartSeriesItem
            key={idx}
            type="column"
            tooltip={{
              visible: true,
            }}
            data={item.data}
            name={item.name}
          />
        ))}
      </ChartSeries>
    </Chart>
  );
};

export default Bar;
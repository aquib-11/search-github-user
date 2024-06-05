import React, { Component } from "react";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const ExampleChart = ({data})=>{
  const chartConfigs = {
    type: "column2d",
    width: "600",
    height: "400",
    dataFormat: "json",
    theme: "fusion",
    dataSource: {
      Chart: {
        caption: "caption",
        subCaption: "subCaption",
        xAxisName: "xAxisName",
        yAxisName: "yAxisName",
        numberSuffix: "$",
        theme: "fusion",
      },
      data: data,
    },
  };

 return <ReactFC {...chartConfigs} />;
}

export default ExampleChart
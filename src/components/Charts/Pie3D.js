import React, { Component } from "react";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const Pie3D = ({ data }) => {
  const chartConfigs = {
    type: "pie3d",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      Chart: {
        caption: "Languages",
        // subCaption: "subCaption",
        // xAxisName: "xAxisName",
        // yAxisName: "yAxisName",
        // numberSuffix: "$",
        decimals:1,
        pieRadius:"35%",
        theme: "fusion",
        // paletteColors:"#f0db45"    ----for pie list colorss
      },
      data,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default Pie3D;

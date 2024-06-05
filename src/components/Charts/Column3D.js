import React, { Component } from "react";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const Column3D = ({ data }) => {
  const chartConfigs = {
    type: "column3D",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      Chart: {
        caption: "Most Popular",
        // subCaption: "subCaption",
        xAxisName: "Repos",
        yAxisName: "Stars",
        xAxisNameFontSize: "16px",
        yAxisNameFontSize: "16px",
        // numberSuffix: "$",
        // decimals: 1,
        // pieRadius: "35%",
        theme: "fusion",
        // paletteColors:"#f0db45"    ----for pie list colorss
      },
      data,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default Column3D;

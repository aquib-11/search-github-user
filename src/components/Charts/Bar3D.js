import React, { Component } from "react";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const Bar3D = ({ data }) => {
  const chartConfigs = {
    type: "bar3d",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      Chart: {
        caption: "Most Forked",
        // subCaption: "subCaption",
        xAxisName: "Repos",
        yAxisName: "Forks",
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

export default Bar3D;

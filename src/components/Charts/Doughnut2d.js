import React, { Component } from "react";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const Doughnut2D = ({ data }) => {
  const chartConfigs = {
    type: "doughnut2D",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      Chart: {
        caption: "Stars per Language",
        // subCaption: "subCaption",
        // xAxisName: "xAxisName",
        // yAxisName: "yAxisName",
        // numberSuffix: "$",
        doughnutRadius: "45%",
        showPercentValues: 0,
        theme: "candy",
        //thmes------fusion,gammel,candy,ocean,carbon,umber
        // paletteColors:"#f0db45"    ----for pie list colorss
      },
      data,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default Doughnut2D;

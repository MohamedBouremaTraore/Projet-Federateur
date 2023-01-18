import React, { Component } from "react";
import Highcharts from "highcharts/highstock";
import {Resizable} from "re-resizable";
import {
  HighchartsStockChart,
  Chart,
  withHighcharts,
  XAxis,
  YAxis,
  Title,
  AreaSplineSeries,
  SplineSeries,
  Navigator,
  CandlestickSeries,
  Tooltip
} from "react-jsx-highstock";
import data from "./data";
import { FaChartArea } from 'react-icons/fa';
import { FaChartLine } from 'react-icons/fa';
import { GiChart } from 'react-icons/gi';
import { TbChartCandle } from 'react-icons/tb';
import { ImScissors } from 'react-icons/im';


const StaticSimpleChart = (state, data2) => {
  if (state === "Candle") {
    return <CandlestickSeries id="profit" name="Candle Chart" data={data2} />;
  } else if (state === "Line") {
    return <SplineSeries id="profit" name="Line Chart" data={data2} />;
  } else if (state === "Area") {
    return <AreaSplineSeries id="profit" name="Area Chart" data={data2} />;
  }
};



class Charts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data2: data.map(e => {
        return [e.time, e.Open, e.High, e.Low, e.Close];
      }),
      state: "Line",
      period: 12,
      indicator: null,
    };
  }
  render() {
    const graphData = this.props.graphData
    //console.log(graphData)
    const { data2, state, indicator } = this.state;

    const StaticindicatorChart = period => {
      if (indicator === "MovingAverage") {
        return (
          <div>
            <SplineSeries
              id="indicator"
              name="MovingAverage"
              data={maxim("ma", "close", period)}
            />
          </div>
        );
      } else if (indicator === null) {
        return <div />;
      }
    };
    const buttonChange = () => {
      return (
        <>
        <span class="col">
          <button
            onClick={() => {
              this.setState({ state: "Candle" });
            }}
            class ="btn"
          >
            <TbChartCandle/>
          </button>
          </span>

          <span class="col">
          <button
            onClick={() => {
              this.setState({ state: "Line" });
            }}
            class="btn"
          >
            <FaChartLine/>
          </button>
          </span>
          <span class="col">
          <button
            onClick={() => {
              this.setState({ state: "Area" });
            }}
            class="btn"
          >
            <FaChartArea/>
          </button>
          </span>
        </>
      );
    };
    const indicatorChange = () => {
      return (
        <>
          <span class="col">
          <button
            onClick={() => {
              this.setState({ indicator: "MovingAverage" });
            }}
            class="btn"
          >
           <GiChart/>
          </button>
          </span>
          <span class="col">
          <button
            onClick={() => {
              this.setState({ indicator: null });
            }}

            class="btn"
          >
            <ImScissors/>
          </button>
          </span>
        </>
      );
    };
    const maxim = (e, type, func) => {
      const arr = data2.map(e => { //graphData
        switch (type) {
          case "close":
            return e[4];
          case "open":
            return e[1];
          case "high":
            return e[2];
          case "low":
            return e[3];
          default:
            break;
        }
      });
      if (e === "max") {
        return Math.max.apply(null, arr);
      } else if (e === "min") {
        return Math.min.apply(null, arr);
      } else if (e === "ma") {
        return arr.map((e, i) => {
          const n = i - func;
          return [data[i][0], (arr[i] + arr[n]) / 2];
        });
      }
    };
    return (
      <div className="app">
        <div class="row">
          {buttonChange()}
          {indicatorChange()}
        </div>
        <Resizable defaultSize={{ height: "40px" }} maxHeight={"60px"}>
          <HighchartsStockChart height="10%">
          <Chart zoomType="x" />
            <Tooltip />
            <XAxis>
              <XAxis.Title>Time</XAxis.Title>
            </XAxis>
            <YAxis
              id="price close"
              opposite
              min={maxim("min", "close", 12)}
              max={maxim("max", "close", 12)}
            >
              <YAxis.Title>Price Close</YAxis.Title>
              {StaticSimpleChart(state, data2)}
              {StaticindicatorChart(this.state.period)}
            </YAxis>
            <YAxis
              id="price"
              min={maxim("min", "high", 12)}
              max={maxim("max", "high", 12)}
            >
              <YAxis.Title>Price High</YAxis.Title>
              {StaticSimpleChart(state, data2)}
              {StaticindicatorChart(this.state.period)}
            </YAxis>

            <Navigator />
          </HighchartsStockChart>
        </Resizable>
      </div>
    );
  }
}

export default withHighcharts(Charts, Highcharts);
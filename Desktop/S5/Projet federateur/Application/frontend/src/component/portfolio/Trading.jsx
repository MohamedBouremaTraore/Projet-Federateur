import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
//import Loading from '../Loading';
import Nav from '../Nav';
import Footer from '../Footer';
//import { useAuth0 } from '@auth0/auth0-react'
import Plot from 'react-plotly.js';
import Table from './Table'
import Charts from './trading/Charts'
import '../../index.css';
import {useNavigaten ,Navigate} from 'react-router-dom';

class Trading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data : [],
      datas : [],
      graphData : [],
      nbr : 0,
      portfolio : [
        
      ],
      initialInvestmentValue : {
       
      },

      currentInvestmentValue : {
      
      },

    }
    this.getDatasTickers = this.getDatasTickers.bind(this)
    this.fetchStock = this.fetchStock.bind(this)
  }

   navigateHome() {
    Navigate('/');
  };


  acheterAction(id){
    var e = document.getElementById(id).innerHTML;
    var t = {"ticker" : id, "nbr" : 1}
    var i = {"ticker" : id, "value" : e}

    // Mise a jour de Portfolio et initialInvestmentValue
    if(this.state.initialInvestmentValue[id] == null){
      this.setState({
        portfolio : [...this.state.portfolio,t],
        initialInvestmentValue : {...this.state.initialInvestmentValue, [id] : i}
      });
    }else{
      var i = document.getElementsByClassName(id)[0].innerHTML
      document.getElementsByClassName(id)[0].innerHTML = Number(i)+1
    }
    
  }

  vendreAction(id){
    // Mise a jour de Portfolio et initialInvestmentValue
    if(document.getElementsByClassName(id)[0].innerHTML > 1){
      var i = document.getElementsByClassName(id)[0].innerHTML
      document.getElementsByClassName(id)[0].innerHTML = Number(i)-1
     
    }else{
      
      if(document.getElementsByClassName(id)[0].innerHTML == 1){
        this.setState({
      //  portfolio : [...this.state.portfolio,t],
       // initialInvestmentValue : {...this.state.initialInvestmentValue, [id] : i}
      });
       
      }
    }
    
  }

  componentDidMount() {
    this.fetchStock();
    this.getDataTicker()
    this.getDatasTickers()
    setInterval(this.getDatasTickers, 3000);
  }

   getDataTicker() {
    let API_Call = "http://127.0.0.1:5000/tickerData?ticker=AAPL1"
    fetch(API_Call)
    .then(result => result.json())
    .then(result => {
    this.setState({
      data : result,
    })
    })
    .catch(err => console.log(err))
  }

  getDatasTickers() {
    
    let API_Call = `http://127.0.0.1:5000/tickersDatas?nbr=${this.state.nbr}`;
    fetch(API_Call)
    .then(result => result.json())
    .then(result => {
      // Miise à jour de current data
    this.setState({
      datas : result,
      nbr : this.state.nbr+1,
    })

      this.getTickerCurrentData()

    })
    .catch(err => console.log(err))
  }


  getTickerCurrentData() {
    
    let API_Call = `http://127.0.0.1:5000/tickerCurrentData?nbr=${this.state.nbr}`;
    fetch(API_Call)
    .then(result => result.json())
    .then(result => {
      // Miise à jour de current data
    this.setState({
      currentInvestmentValue : result
    })
    //console.log(result)
    })
    .catch(err => console.log(err))
  }


  fetchStock() {
    const pointerToThis = this;
   // console.log(pointerToThis);
    const API_KEY = 'HGJWFG4N8AQ66ICD';
    let StockSymbol = 'GOOG';
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${StockSymbol}&interval=1min&outputsize=full&apikey=${API_KEY}`;
   // let stockChartXValuesFunction = [];
    let stockChartYValuesFunction = [];

    fetch(API_Call)
      .then(
        function(response) {
          return response.json();
        }
      )
      .then(
        function(data) {
          //console.log(data);

          for (var key in data['Time Series (1min)']) {
          //  stockChartXValuesFunction.push(key);
          const date = new Date(key);
          const timeInMillisecond = date.getTime();
          const unixTimestamp = Math.floor(date.getTime() / 1000);
            const times_series = [
            unixTimestamp,
            Number(data['Time Series (1min)'][key]['1. open'])*10,
            Number(data['Time Series (1min)'][key]['2. high'])*10,
            Number(data['Time Series (1min)'][key]['3. low'])*10,
            Number(data['Time Series (1min)'][key]['4. close'])*10
            ]
            stockChartYValuesFunction.push(times_series);
          }

          //console.log(stockChartYValuesFunction);
          pointerToThis.setState({
            //stockChartXValues: stockChartXValuesFunction,
            graphData: stockChartYValuesFunction.slice(-300)
          });
        }
      )
  }

  render() {
    const initialInvestmentValue = this.state.initialInvestmentValue
    const currentInvestmentValue = this.state.currentInvestmentValue
    const datas = this.state.datas
    //console.log(datas[0].value)
    return (
      <div class="">
      <nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Suivre son portefeuille</button>
    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Valeur historique des actions</button>
    <button class="btn btn-danger"  id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Quitter</button>
  </div>
</nav>
<div class="tab-content m-2" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
      <div class="row"> 
        <div class="col col-7">
          <Charts graphData={this.state.graphData}/>
        </div>
        <div class="col col-5">
           <div>
               <div class="row m-2">
               <table class="table table-hover table-bordered">
  <thead>
    <tr>
      <th scope="col">Action</th>
      <th scope="col">Date</th>
      <th scope="col">Open</th>
      <th scope="col">High</th>
      <th scope="col">Low</th>
    </tr>
  </thead>
  <tbody>
    {
      this.state.datas.map((a) => {
        return  <tr>
        <th scope="row">{a.ticker}</th>
        <td>{a["value"].Date.substring(10)}</td>
        <td id={a.ticker}>{a["value"].Open}</td>
        <td>{a["value"].High}</td>
        <td>{a["value"].Low}</td>
        <td><button onClick={()=> this.acheterAction(a.ticker)} class='btn btn-success btn-sm'>Acheter</button></td>
        <td><button onClick={()=> this.vendreAction(a.ticker)} class='btn btn-danger btn-sm'>Vendre</button></td>
      </tr>
      })
    }
   
  </tbody>
        </table>
               </div>
               <div class="row m-2">
               <table class="table table-hover table-dark" >
  <thead>
    <tr>
      <th scope="col">Action</th>
      <th scope="col">Nombre d'action</th>
      <th scope="col">Tendance</th>
      <th scope="col">Gain</th>
    </tr>
  </thead>
  <tbody>
    {
      this.state.portfolio.map((a) => {
        return  <tr>
        <th scope="row">{a.ticker}</th>
        <td class={a.ticker}>{a.nbr}</td>
        <td><span class="up">+</span></td>
        <td> {(currentInvestmentValue[a.ticker].value - initialInvestmentValue[a.ticker].value)*a.nbr} $</td>
      </tr>
      })
    }

    <tr>
      <th scope="row">Total du gain</th>
      <td colspan="2"></td>
      <td>800 $</td>
    </tr>
  </tbody>
</table>
               </div>
           </div>
        </div>
      </div>
  </div>
  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
           <div class="row">
            <Table data={this.state.data} />
          </div>
  </div>
</div>
 

      </div>
    )
  }
}

export default Trading;
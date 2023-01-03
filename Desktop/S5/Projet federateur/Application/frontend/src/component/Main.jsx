import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';
//import { useAuth0 } from "@auth0/auth0-react";
//import JSONPretty from 'react-json-pretty';
//import React, { useState } from 'react';
import React, { Component } from 'react';
//import { hasSelectionSupport } from '@testing-library/user-event/dist/utils';

class Main extends Component {

 constructor(props){
  super(props);
  this.state = {
   value: [],
   tikersdatas :[]
   /* GOOG : GOOG,
    TSLA : TSLA,
    AAPL : AAPL,
    MSFT :MSFT,
    NFLX : NFLX,
    AMZN : AMZN*/
  }
  this.getTickersDatas = this.getTickersDatas.bind(this)
}

getTickersDatas() {
      let API_Call = "http://127.0.0.1:5000/tickersDatas?nbr=5"
      fetch(API_Call)
      .then(result => result.json())
      .then(result => {
       this.setState({tikersdatas : result})
       console.log(result)
      })
      .catch(err => console.log(err))
      }


getData(){
  fetch('https://newsapi.org/v2/everything?q=finance&apiKey=d4fd9915251244f98350db3fdd6dba5b')
    .then(result => result.json())
    .then(result => {
    this.setState({value : result.articles})
    //console.log(result)
    })
}

  componentDidMount(){
    this.getData();
    this.getTickersDatas();
   // setInterval(this.getTickersDatas, 5000);
  }
  
  render() {
  return (
    <div className='container main'>
    <div class="row bg-primary text-center">
    <nav class="navbar navbar-expand-lg bg-white">
    <div class="container">
      <div class="collapse navbar-collapse" id="navbarText">
      <div class="marquee">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        {
         this.state.tikersdatas.map((a)=>{
          return  <li class="nav-item ">
          <div ><span class="tickertitle">GOOG</span></div>
          <div class="tickerprice">{a.Close} $</div>
          <div class="tickergrow">{Math.round((a.Close-a.Open)/a.Close*1000000)/1000000}%</div>
        </li>
         })
        }
        </ul>
        </div>
      </div>
    </div>
    </nav>
    </div>
    <div>
      <span class="news">News</span>
    </div>
   
    <div class="row" >
      <div class='col col-6 card'>
           <ul class="li-main">
      {   
       this.state.value.slice(0, 5).map((a) => {
            return <li class="li-item border-bottom border-top">
            <div class="row">
                  <div class="col col-3">
                     <img src={a.urlToImage} alt="" class="picture"/>
                  </div>
                  <div  class="col col-9">
                      <div>
                         <span class="li-item-p">{a.source.id}</span> * <span class="li-item-t">{a.title}</span> * <span class="li-item-d">{a.publishedAt}</span>
                      </div>
             </div>
             <div>
                      <div>
                          <span class="li-item-desc">{a.description}</span>
                      </div>
                      <div>
                         <a href={a.url} class="li-item-a">Lire plus</a>
                      </div>
             </div>
          </div>
          </li>
          })
        }
           </ul>
      </div>
      <div class='col col-6'>
        <h2>Apprendre à investir en Bourse</h2>
        <p>
          Nous sommes une équipe <span class='green'>jeune</span> et <span class='green'>dynamique</span> avec une expertise dans le domaine de la <span class='green'>finance</span>, <span class='green'>mathématique</span>
          & <span class='green'>informatique</span>. Nous vous accompagnerons à atteindre vos objectifs à 
          savoir investir de façon responsable suivant les normes <span class='green'>ESG</span>.
        </p>
        <div class="center">
          <button class="btn btn-outline-primary">Lire plus</button>
          <button class="btn btn-outline-primary m-2">Contater nous</button>
        </div>
      </div>
    </div>
         {/*} <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <JSONPretty data={user} />
          {/* {JSON.stringify(user, null, 2)} */}
    </div>
    )
      }
}

export default Main
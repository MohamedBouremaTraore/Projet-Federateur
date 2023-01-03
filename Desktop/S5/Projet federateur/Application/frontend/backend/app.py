from flask import Flask, request, jsonify
from  flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import random
from GOOG import *
from AAPL import *
from AAPL1 import *
from TSLA import *
from MSFT import *
from AMZN import *
from NFLX import *

app = Flask(__name__)
CORS(app)
db = SQLAlchemy()
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///game.db"
db.init_app(app) 

@app.route("/api")
def hello_world():
  result = Quiz.query.first()

@app.route("/tickersDatas", methods=["GET"])
def tickersDatas():
  nbr = request.args.get('nbr')
  return jsonify([
    {'ticker': 'GOOG', 'value' :GOOG[nbr] },
    {'ticker': 'AAPL', 'value' :AAPL[nbr] },
    {'ticker': 'TSLA', 'value' :TSLA[nbr] },
    {'ticker': 'MSFT', 'value' :MSFT[nbr] },
    {'ticker': 'AMZN', 'value' :AMZN[nbr] },
    {'ticker': 'NFLX', 'value' :NFLX[nbr] },
   ]
     )

@app.route("/tickerCurrentData", methods=["GET"])
def tickerCurrentData():
  nbr = request.args.get('nbr')
  return jsonify({
    'GOOG' : {'ticker': 'GOOG', 'value' :GOOG[nbr]['Open']},
    'AAPL' : {'ticker': 'AAPL', 'value' :AAPL[nbr]['Open']},
    'TSLA' : {'ticker': 'TSLA', 'value' :TSLA[nbr]['Open']},
    'MSFT' : {'ticker': 'MSFT', 'value' :MSFT[nbr]['Open']},
    'AMZN' : {'ticker': 'AMZN', 'value' :AMZN[nbr]['Open']},
    'NFLX' : {'ticker': 'NFLX', 'value' :NFLX[nbr]['Open']}
  }
     )
  
@app.route("/tickerData")
def tickerData():
  ticker = request.args.get('ticker')
  ticker = str(ticker)
  match ticker:
    case "GOOG":
         return GOOG
    case "AAPL1":
        return AAPL1
    case "TSLA":
        return TSLA
    case "MSFT":
       return MSFT
    case "AMZN":
        return AMZN
    case "NFLX":
        return NFLX
  
if __name__=='__main__' :
  app.run()

  
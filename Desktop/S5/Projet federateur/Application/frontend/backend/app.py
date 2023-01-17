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


import random
import json
import re
import torch
from model import NeuralNet
from nltk_utils import bag_of_words, tokenize
#from function import Gsearch, stocks
import subprocess

app = Flask(__name__)
CORS(app)
db = SQLAlchemy()
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///game.db"
db.init_app(app) 
####################################################

device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

with open('intents.json', 'r') as json_data:
    intents = json.load(json_data)

    
FILE = "data.pth"
data = torch.load(FILE)

input_size = data["input_size"]
hidden_size = data["hidden_size"]
output_size = data["output_size"]
all_words = data['all_words']
tags = data['tags']
model_state = data["model_state"]

model = NeuralNet(input_size, hidden_size, output_size).to(device)
model.load_state_dict(model_state)
model.eval()
#===================================Functions
import warnings
warnings.filterwarnings('ignore')
#------------------------------------------------------------------
#==================================================================
bot_name = "Sam"
clientstag=["balance","deposit","spending","transfer"]
def searching(query,x):
        with open('user.json', 'r') as jsn_data:
            inte = json.load(jsn_data)
        phrases=[]
        sentence = tokenize(query.lower())
        X = bag_of_words(sentence, all_words)
        X = X.reshape(1, X.shape[0])
        X = torch.from_numpy(X).to(device)

        output = model(X)
        _, predicted = torch.max(output, dim=1)

        tag = tags[predicted.item()]

        probs = torch.softmax(output, dim=1)
        prob = probs[0][predicted.item()]
        if prob.item() > 0.75:
            for intent in intents['intents']:
                if tag == intent["tag"]:
                      return  random.choice(intent['responses']) 
        else: 
            return " I do not understand..."

######################################################

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
  
@app.route('/predict', methods=["GET"])
def predict():
   x='false'
   #subprocess.call("chat.py", shell=True)
   #from function import Gsearch
   text=request.args.get("message")
   response=searching(text,x)
   message =response
   return jsonify(message)
        
if __name__=='__main__' :
  app.run()

  
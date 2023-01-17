from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.options import Options
from nltk_utils import bag_of_words, tokenize
import json
options = webdriver.ChromeOptions()
options.add_argument('headless')
options.add_argument('no-sandbox')
options.add_argument('disable-dev-shm-usage')
driver=webdriver.Chrome(ChromeDriverManager().install(),options=options)
stocklist=[]
def Gsearch(query,elem):
  listObj = []
  intents=[]
  with open('General_finance.json') as json_data:
      intents = json.load(json_data)
  for i in range(len(intents)):
    if elem == intents[i]['tag']:
      return intents[i]['response']
    elif(i==len(intents)-1):
      count = 0
      from googlesearch import search
      for i in search("site:https://www.investopedia.com "+query,tld='co.in',lang='en',num=5,stop=None,pause=5):
        count += 1
        if 'https://www.investopedia.com/' in i:
                driver=webdriver.Chrome(ChromeDriverManager().install(),options=options)
                driver.get(str(i))
                block1=driver.find_elements_by_xpath('//*[@id="mntl-sc-block_1-0-1"]')
          
                if(block1[0].text):
                  with open('General_finance.json') as json_data:
                    listObj = json.load(json_data)
                  listObj.append({"tag": elem,"response" : block1[0].text})
                  with open("General_finance.json", "w") as out_file:
                    json.dump(listObj, out_file, indent = 6,separators=(',',': '))
                  return block1[0].text
                else:
                  return "I found this on the web youssef: "+str(i)
        elif(count==20):
            return "Sorry!, I didn't Understand"
def stocks(query):
  stocklist.clear()
  driver.get("https://www.google.com/search?q="+query)
  stock=driver.find_elements_by_xpath('//*[@id="knowledge-finance-wholepage__entity-summary"]/div[3]/g-card-section/div/g-card-section/div[2]/div[1]/span[1]/span')
  for s in stock:
    stocklist.append(s.text)
  if(len(stocklist)!=0):
      return stocklist[0]
      





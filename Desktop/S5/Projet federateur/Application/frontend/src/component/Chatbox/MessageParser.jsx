// in MessageParser.js
import React from 'react';




const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    let API_Call = 'http://127.0.0.1:5000/predict?message='+message;
    fetch(API_Call)
    .then(result => result.json())
    .then(result => {
    actions.handleHello(result);
  //  console.log(result)

    })
    .catch(err => console.log(err))
  
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
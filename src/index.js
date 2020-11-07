import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

let curDate = new Date(2020 , 10 , 9 , 20);
curDate = curDate.getHours();

const cssStyle = {};

let greeting = '';
if(curDate >= 1 && curDate < 12){
    greeting = 'Good Moring';
    cssStyle.color = 'green';
}else if(curDate >= 12 && curDate < 19){
    greeting = 'Good Afternoon';
    cssStyle.color = 'Orange';
}else{
    greeting = 'Good Night';
    cssStyle.color = 'Black';
}

ReactDOM.render(
<>
    <div>
    <h1>Hey User , <span style={cssStyle}>{greeting}</span></h1> ,

    </div>
  </>  
    , document.getElementById('root')

)
'use strict';

function randomValue(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
    }


let hours =['6am' ,'7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

let parent =document.getElementById('container');

let seattle=  {
    minCust: 23,
    maxCust:65,
    avgSale:6.3,
    rndomCust:[],
    cookie:[],
    calcRndomCust:function(){
        for(let i = 0 ; i< hours.length; i++){
            this.rndomCust.push(randomValue(this.minCust,this.maxCust));
        }
    },
    
    calcCookie:function(){
        let val = 0;
        for(let i = 0; i<hours.length; i++){
            val = Math.ceil(this.rndomCust[i]*this.avgSale);
            this.cookie.push(val);

        }
    }

};

seattle.calcRndomCust();
seattle.calcCookie();
console.log(seattle);
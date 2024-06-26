let marks =[85, 97, 44, 37, 76, 60];
let avg=0;
for(m of marks)
    {avg= avg+m;}
avg= avg/ marks.length;
console.log(avg);
 let price=[250, 645, 300, 900, 50];
/*for(d of price)
   {d= d- (d*0.1);}
    // {price[d]= price[d] - (price[d]*0.1);} 
    didnt work.
    because index cant be tracked
    */
for(i=0; i<price.length; i++)
        {price[i]= price[i]- (price[i]*0.1);}
console.log(price); 

//using for-of loop
let index=0;
for(val of price)
    {price[i]= val- val*0.1;
        index++;
    }
    //saves the effort of writing proce[i] for accessing the value of array element.
    
console.log(price); 


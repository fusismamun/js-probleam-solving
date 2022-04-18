// Delivery Cost 
function deliveryCost(cost){
    const lessThenshirt100 = 100;
    const lessThenshirt200 = 80;
    const upto200 = 50; 
   if (cost <=100){
       const less100 = cost *lessThenshirt100;
       return less100;
   }
   else if (cost <=200){
       const lessThen100 = 100 * lessThenshirt100;
       const restcharge = cost - 100;
       const lessThen200 = restcharge * lessThenshirt200;
       const total = lessThen100 + lessThen200;
       return total;
   }
   else {
       const lessThen100 = 100 * lessThenshirt100;
       const lessThen200 = 100 * lessThenshirt200;
       const restcharge = cost - 200;
       const restcharges = restcharge * upto200;
       const totalcharge = lessThen100 + lessThen200 + restcharge;
       return totalcharge;
   }
}

let check = deliveryCost(201);
console.log(check);
//sum of multiple of 3 from 0 to 15 
let a = 0;
let sum =0;
while(a<=15){
  if(a%3==0){
    sum=sum+a;
  }
  ++a;
}
console.log(sum);
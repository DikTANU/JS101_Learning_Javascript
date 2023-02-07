let x ="";
for(let i =1; i<=10;++i){
  x=x+i+"* ";
}
  console.log(x);
for(let a=1;a<=6;a++){
  if(a==5){
    continue
  }
  console.log(a);
}
let n =9;
count1=0;
count2=0;
for(let i=1;i<=9;++i){
 if(n%i==0){
   count1++;
 }
  else{
    count2++;
  }
}
console.log(count1,count2);

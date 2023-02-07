let num=10;
let count=0;
for(let i=0;i<=num;i++){
  for(let j=1;j<num;j++){
    if(i+j>num&&i==j){
    count++;
  }
}
}
console.log(count)
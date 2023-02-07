for(let i=2;i<=10;i++){
  let flag =0;
  for(let a=2;a<i;a++){
    if(i%a==0){
      flag=1;
      break;
    }
  }
  if(i>1&&flag==0){
    console.log("Prime number"+i)
  }
}
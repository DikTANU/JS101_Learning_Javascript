for(let i=1;i<=10;i++){
  let bag ="";
  for(let a=1;a<=10;a++){
    if(i==1||i==10){
      bag=bag+"*";
    }
    else if(a==1||a==10){
      bag =bag+"*    ";
    }
  else {
    bag=bag+"";
  }
}
  console.log(bag)
}
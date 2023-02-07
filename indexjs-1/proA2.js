let character="z";
let lowerCase=["p","q","r","s","t","u","v","w","x","y","z"];
let capitalCase=["P","Q","R","S","T","U","V","W","X","Y","Z"];
for(let i=0;i<lowerCase.length;i++){
  if(character==lowerCase[i]){
    character=capitalCase[i];
  }
}
console.log(character);
let sum =0;
let count=0;
for(let i =1;i<=100;++i){
  sum=sum+i;
  count++;
}
console.log(sum/count);
let classroom =["diksha","True","1"];
console.log(classroom[0]);
console.log(classroom[1]);
console.log(classroom[2]);
console.log(classroom.length);
console.log(classroom.length-1);
let arry=[12,14,15,13,18];
for(let i=1;i<arry.length;++i){
  if((arry[i]%2==0)||(arry[i]%3==0)){
    console.log((arry[i]));
  }
}
let array1=[1,2,3,-1,-2,-3];
for(i=0;i<array1.length;i++){
  if(array1[i]>0){
    array1[i]=1
  }
else{
  console.log(array1[i])
}
}
let a ="Diksha Awasthi";
//console.log(a.length);
//console.log(a[2]);
//console.log(a[1]);
for(i=0;i<a.length;i++){
console.log(a[i])  ;
}
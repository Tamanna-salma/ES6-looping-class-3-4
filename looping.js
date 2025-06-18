// forloop***
/*const number =[10,11,12,13,14,15];
// console.log(number[3]);
for(i=0;i<number.length;i++){
// console.log(number[i]);
if(i===3){
  continue;  
}
console.log(number[i]);
}*/

// for of***
/*const number =[10,11,12,13,14,15];
let i=0
for (const num of number) {
 if(num===3){
  break;
 }
 console.log(num);
 i++
}*/

// for each**
/*const number =[10,11,12,13,14,15];
const patro = number.forEach(k=> console.log(k))*/

        // Map*****
 /*const number =[10,20,30,40,50] 
 console.log('ager array',number);    
 const newnumber= number.map((num)=>num*2)
 newnumber[3] = 1000
 console.log('porer array',newnumber);*/

        // Filter**
   /*const number =[10,11,12,13,14,15,16];
   const chakni =number.filter(num=>num%2===0);
   console.log(chakni);*/

   /*const students =['sima','meem','kakoly','simu','muksina','salma'];
   const newstudentsnam =students.filter(Name=>Name[4]==='a')
   console.log(newstudents);*/

            // Find****
   /*const students =['sima','meem','kakoly','simu','muksina','salma'];
   const notunstudents = students.find((i)=>i[1]==='i')
   console.log(notunstudents);*/

   /*const studentsmarriage =[
     { name : 'kakoly',age:23},
     { name : 'saima',age:21},
     { name : 'meem',age:25},
     { name : 'salma',age:27},
   ]
   const actual = studentsmarriage.find((std)=>std.age>23);
   console.log(actual);*/

              //  reduce****


/*const number =[10,20,30,40,50,60];
const result=number.reduce((aggerman,porerman)=> aggerman + porerman,0)
console.log(result);*/

/*const ponnos =[
   {product : 'alu',qnty : 10 ,price : 40},
   {product : 'begun',qnty : 2 ,price : 60},
   {product : 'moida',qnty : 4 ,price : 120},
   {product : 'potol',qnty : 2 ,price : 40},
   {product : 'mistialu',qnty :5 ,price : 150},
]
const bazer = ponnos.reduce((ponno,item)=>ponno+(item.price) * item.qnty ,0)
console.log(bazer);*/

/*const students =[
   {Name : 'shimu',markes :85},
   {Name : 'mim',markes :90},
   {Name : 'salma',markes :78},
   {Name : 'rafi',markes :88},
]
  const moutresult = students.reduce((total,item)=>total+item.markes)
console.log(moutresult);*/

 /*const orders =[
  {Name : 'shirt',price : 500, quantity : 2},
  {Name : 'pant',price : 500, quantity : 1},
  {Name : 'shoe',price : 500, quantity : 1},
];
const totalprice = orders.reduce((agerman,porerman)=>agerman+porerman.price * porerman.quantity,1);
console.log(totalprice);*/

/*const products = [
  { name: 'Alu', quantity: 10 },
  { name: 'Potol', quantity: 5 },
  { name: 'Begun', quantity: 7 }
];
const totaltaka =products.reduce((total,upadan)=>total+upadan.quantity,0);
console.log(totaltaka);*/

/*const products = [
  { name: 'Alu', quantity: 10 },
  { name: 'Potol', quantity: 5 },
  { name: 'Begun', quantity: 7 }
];
const totaltaka =products.reduce((total,upadan)=>total/upadan.quantity,products[0].quantity);
console.log(totaltaka);*/

/*const numbers =[100,2 ,5,20];
const result =numbers.reduce((total,num)=>total+num,0)
const getvalue=result/2
console.log(getvalue);
const getting = numbers.reduce((prothom,shes)=>prothom+shes/numbers[0],0)
 console.log(getting);*/

// Some***
  /*const products=[
    {name:'alo',qnty:5,price:100},
    {name:'mango',qnty:4,price:150},   
    {name:'potol',qnty:5,price:70},
    
]
// const result= products.some(item=>item.price>150);
// console.log(result);*/

// JSON****
/*const studentsinfo ={
  Name : 'tamanna',
  Age   : 28,
  isReading : true,
  Hobbies : ['coding kora', 'gumanu', ,' garden kora' ,'reals dekha']
}
const convertToJson = JSON.stringify(studentsinfo);
console.log(convertToJson);
const converttoObject =JSON.parse(convertToJson);
console.log(converttoObject);*/
             

/* Synchronous JavaScript***
কাজগুলো একটার পর একটা হয় (step-by-step)
আগেরটা শেষ হলে পরবর্তী কাজটি শুরু হয়*/

/*const one =()=>{
  console.log('number-1');
}
const two =()=>{
  console.log('number-2');
}
const three =()=>{
  console.log('number-3');
}
one();
two();
three();*/

/* Asynchronous JavaScript:
কিছু কাজ (যেমন API call, file load, delay) শেষ না হলেও পরের লাইন এক্সিকিউট হয়
পরে সেই কাজ শেষ হলে সে নিজে নিজেই চলে আসে (callback, promise বা async/await দিয়ে)*/

/*const one =()=>{
  console.log('number-1');
}
const two =()=>{
setTimeout(()=>{
  console.log('number-2');
},4000)
}
const three =()=>{
  console.log('number-3');
}
one();
two();
three();*/

// promise****

/*const mypromise =new Promise((resolve,reject)=>{
  const success = true
  if(!success){
    resolve('yes ami paye gesi');
  }else{
   reject('A jibon reke r lav nai');
  }
})
mypromise.then((message)=>{
   console.log(message);
}).catch((error)=>{
  console.log(error);
})*/

/*const mypromise= new Promise((pass,fail)=>{
    const result =true
    if(result){
        pass('ami pass koreci');//resolve
    }else{
       fail('ami fail koreci');//reject
    }
})

mypromise.then((sottho)=>{
  console.log(sottho);
}).catch((mittha)=>{
  console.log(mittha);
})*/




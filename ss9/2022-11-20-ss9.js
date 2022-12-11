/*
- Bất đồng bộ trong JS
- Làm bài kiểm tra checkpoint
- Lên ý tưởng dự án cuối khóa
- Vì sao JS được gọi là ngôn ngữ bất đồng bộ?
+ Ngôn ngữ thông dịch (code đến đây chạy đến đó) || JAVA biên dịch code từ đầu đến cuối sau khi viết xong
- Xử lý bất đồng bộ trong JS như thế nào?
*/


/// VD sau: 
// function task1() {
//   setInterval(() => {
//     console.log("Task 1");
//   }, 3000)
// }
// function task2() {
//   setInterval(() => {
//     console.log("Task 2");
//   }, 2000)
// }

// task1()
// task2()


///=> giải quyết thế nào?  (Không thay đổi time)
// function task1() {
//   setInterval(() => {
//     console.log("Task 1");
//     task2();
//   }, 3000);
// }

// function task2() {
//   setInterval(() => {
//     console.log("Task 2");
//   }, 2000)
// }

// //// Callback
// task1();

// const myPromise =new Promise(function(resolve,reject){
//   setInterval(() => {
//   resolve("Task 1");
//     task2();
//   }, 3000);
// })
// myPromise().then((resolve) =>{
//   console.log(resolve)
//   task2();
// })
// .catch(reject => {
//   console.log(reject);
// })

function clock1(){
  let mm1=document.querySelector(".mm1")
  let ss1=document.querySelector(".ss1")
  let i=0
  let k=0
  const set1=setInterval(()=>{
    i++
ss1.innerHTML=`${i}`

if (i==59){
      k++
mm1.innerHTML=`${k}`
i=0
}  
}, 1000) 
}

function clock1stop(){
  clearInterval(clock1().set1)
}

function clock2(){
  let mm2=document.querySelector(".mm2")
  let ss2=document.querySelector(".ss2")
  let i=0
  let k=0
  setInterval(()=>{
    i++
ss2.innerHTML=`${i}`

if (i==59){
      k++
mm2.innerHTML=`${k}`
i=0
}  
}, 1000) 
}

function clock3(){
  let mm3=document.querySelector(".mm3")
  let ss3=document.querySelector(".ss3")
  let i=0
  let k=0
  setInterval(()=>{
    i++
ss3.innerHTML=`${i}`

if (i==59){
      k++
mm3.innerHTML=`${k}`
i=0
}  
}, 1000) 
}
function clock4(){
  let mm4=document.querySelector(".mm4")
  let ss4=document.querySelector(".ss4")
  let i=0
  let k=0
  setInterval(()=>{
    i++
ss4.innerHTML=`${i}`

if (i==59){
      k++
mm4.innerHTML=`${k}`
i=0
}  
}, 1000) 
}

function clock5(){
  let mm5=document.querySelector(".mm5")
  let ss5=document.querySelector(".ss5")
  let i=0
  let k=0
  setInterval(()=>{
    i++
ss5.innerHTML=`${i}`

if (i==59){
      k++
mm5.innerHTML=`${k}`
i=0
}  
}, 1000) 
}
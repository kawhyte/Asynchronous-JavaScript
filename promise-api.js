// const p = Promise.resolve(1);
// p.then(result => console.log(result));

const p1 = new Promise((resolve) =>{

setTimeout(() => {
  console.log('Async 1');
  resolve(1)
}, 2000);
});
const p2 = new Promise((resolve) =>{

setTimeout(() => {
  console.log('Async 2');
  resolve(2);  
}, 2000);
});

Promise.all([p1,p2])
.then(res => console.log(res));
// Promise.race([p1,p2])
// .then(res => console.log(res));
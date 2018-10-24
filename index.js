console.log('Before');
let ans  = getUser(1);
console.log(ans);
console.log('After');




function getUser (id){
setTimeout(()=> {

console.log( 'Getting user info from DB...');

return { id: id , userName: 'Kenny'}

}, 2000);

}
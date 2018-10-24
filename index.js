console.log('Before');

/* getUser(1, getRepositories);
function getRepositories(){
    getRepositories(user.userName, getCommits);
}
function getCommits(repo){
    getCommits(repo, displayCommits);
}
function displayCommits(commits){
 console.log(commits);
} */

getUser(1)
    .then(user => getRepositories(user.userName))
    .then(repos => getCommits(repos[0]))
    .then( commits => console.log(commits))
    .catch( err => console.log ( 'Error', err.message));



console.log('After');

function getUser (id){
return new Promise((resolve, reject) =>{
    setTimeout(()=> {
        console.log( 'Getting user info from DB...');
        resolve({ id: id , userName: 'Kenny'});
        }, 2000);   
    });
}

function getRepositories (username) {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            console.log( 'calling...');
            resolve(['repo1', 'repo2', 'repo2']);

        }, 2000);
    });
   
}

function getCommits(repos){
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            console.log( 'calling API...');
            resolve(['commit']);
        }, 2000);
    });

}

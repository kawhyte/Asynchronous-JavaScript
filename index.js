console.log('Before');

getUser(1, getRepositories);

function getRepositories(){
    getRepositories(user.userName, getCommits);
}

function getCommits(repo){
    getCommits(repo, displayCommits);
}

function displayCommits(commits){
 console.log(commits);
}


console.log('After');

function getUser (id, callback){
setTimeout(()=> {
    console.log( 'Getting user info from DB...');
    callback({ id: id , userName: 'Kenny'});
    return; 
    }, 2000);
}

function getRepositories (username, callback) {
    setTimeout(()=> {
        console.log( 'calling...');
        callback(['repo1', 'repo2', 'repo2']);
    return;
    }, 2000);

}
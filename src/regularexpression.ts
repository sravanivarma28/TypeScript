let password : string = 'sravani';
let regExp : any =/[A-Z]{4,10}/;

if (password.match(regExp)){
    console.log('password verified ..');
    
} else {
    console.log('Error : password 4 to 10 chars Uppercase Only');
}
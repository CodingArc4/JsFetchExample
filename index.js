//get
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => response.json())
.then((data) => console.log(data));

const data = {
    name: 'This is a title',
    body: 'This is a body',
    userId: 2
}

//post
fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json'
    }
}).then((response) => response.json()).then((data) => console.log(data));


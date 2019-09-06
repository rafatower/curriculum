Exercises to work with api.
The material of that exercise comes from books.adalab.es



## EXERCISE 1 | Random number
The first exercise you can create a password generator.
For this you have the next api

https://api.rand.fun/text/password?length=20




### Random Dog | Complete example of a fetch request
How the second part you do use this code for show a random dog image in html.
[Codepen Example](https://codepen.io/adalab/pen/oqQNvK?editors=1010)

```javascript

fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(data => {
    const img = document.querySelector('img');
    img.src = data.message;
    img.alt = 'Un perro';
  });

```

### Exercise 2 | Chihuahuas, Chihuahuas everywhere

Let's keep playing with the [Dog API](https://dog.ceo/dog-api/):

a)  We are going to modify the previous example so that the photos of our page only appear dogs of the Chihuahua breed.

b)  We will encapsulate all the logic to create a request in a function. We add a button to the page with the title 'Show me another Chihuahua' so that when pressed, another request is made to the server of a random image and a new image of Chihuaua appears.


### EXERCISE 3 | Github User

Now we are going to explore a new API: [the GitHub user API](https://developer.github.com/v3/users/).
The URL of this API is https://api.github.com/users/{username}, where {username} is the name of the user on GitHub. For example, here is the URL to obtain Isra user information https://api.github.com/users/gootyfer. If you put this URL in a new browser tab you can see what data the API returns.
We are going to create a page with a text input and a search button. The user will enter a GitHub username in the input. We will prepare a function that will be executed when the search button is pressed and that contains a request to the API to obtain information from that user and thus display it on our page:
- first name
- number of repositories
- avatar (image)

### EXERCISE 4 | Github User no Found
Now, use the .catch for show a message when doesn't exist the user.

[catch documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch)
Example catch use.

```javascript 
fetch('https://jsonplaceholder.typicode.com/404')
  .then(res => {
    if(res.ok) {
      return res;
    } else {
      throw Error(`Request rejected with status ${res.status}`);
    }
  })
  .catch(console.error)
```


### EXERCISE 5 | Github Repository list

List of repos of an organization in Github
We will continue exploring the GitHub API by exploring the part of the API to access the information about organizations. The URL of this API is https://api.github.com/orgs/${orgname}/repos, where {orgname} is the name of the organization on GitHub. For example, here you have the URL to obtain information from the Adalab organization https://api.github.com/orgs/Adalab. If you put this URL in a new browser tab you can see what data the API returns.
The objective of this exercise is to display on a website the complete list of repositories of an organization that are created in GitHub. For example, for Adalab, the end result should be similar to this:
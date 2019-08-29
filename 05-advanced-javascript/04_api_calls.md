# API Calls

We can retrieve information that is not already present in our
JavaScript program by means of making an *external call*, that is,
sending a request to a remote server and then retrieving the answer
from inside our program.

To make the request we need to convert the data we send into a
string. Also, to understand the response, which will be a text, we
need to convert it into objects in JavaScript. The process to convert
the data from/to text form is called *serialization*. The format we
will use is [JSON](https://en.wikipedia.org/wiki/JSON).

When we make remote requests, the responses can take a long time to
reach the client again. We don't want our program to freeze and stop
responding, so the way we handle this communication is
*asynchronously*. There are different ways to execute code
asynchronously, but we will see only the more modern one, which is
based on the [fetch
method](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch). This
will return a special kind of object, which is called a
[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## JSON

To convert some data into a JSON string, we use the `JSON.stringify` function:

```js
const data = ...;

const s = JSON.stringify(data);
```

Conversely, we can recover the data from its serialized form with `JSON.parse`:

```js
const data = JSON.parse(s);
```

## Promises

A
[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
is a special kind of object, which is created with a callback function
which will act on the data once it is retrieved from the server.

```js
var promise1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('foo');
    }, 300);
});

promise1.then(function(value) {
    console.log(value);  // outputs "foo"
});

console.log(promise1);  // outputs [object Promise]
```

## Old days

The original In the old days, the only way to retrieve content from a
server was by means of a `XMLHttpRequest`. The way they were done
looked like this:

```js
var request = new XMLHttpRequest();

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
request.onload = function() {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
        for (var i = 0; i < data.length; i++)
            console.log(data[i].title);
    } else {
        console.log('error');
    }
}

request.send();
```

(By the way, see the funny use of `var` and `function() {...` and `for
(var i...`?  This should feel bad. You don't want to write like that.)

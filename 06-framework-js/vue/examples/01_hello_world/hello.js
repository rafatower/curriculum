const app = new Vue({
    el: '#app',
    data: {
        message: 'Hello world!'
    }
});


const app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
});


const app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
});


const app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            'Learn Vue',
            'Teach Vue',
            'Live happily ever after'
        ]
    }
});


const app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('');
        }
    }
});


const app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello Vue!'
    }
});

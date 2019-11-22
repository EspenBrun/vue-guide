const forecast = new Vue({
  el: '#forecast',
  data: {
    filename: '',
    cellA1: '',
    selected: [],
    checkedNames: [],
  },
});

forecast.$watch('filename', (newValue) => {
  console.log(newValue);
});

forecast.$watch('cellA1', (newValue) => {
  console.log(newValue);
});

const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!',
  },
});


const app2 = new Vue({
  el: '#app-2',
  data: {
    message: `You loaded this page on ${new Date().toLocaleString()}`,
  },
});

const app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true,
  },
});

const app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'kvdkk' },
    ],
  },
});

const app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Ye boi',
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split('').reverse().join('');
    },
  },
});

const app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'What use is a phonecall, Mr. Anderson, if you are unable to speak?',
  },
  computed: {
    reverseMessage() {
      return this.message.split('').reverse().join('');
    },
  },
});

// $watch is an instance method
app6.$watch('message', (newValue, oldValue) => {
  // This callback will be called when 'app6.message' changes
  console.log(oldValue);
  console.log(newValue);
});

Vue.component('todo-item', {
  // The todo-item component now accepts a
  // "prop", which is like a custom attribute.
  // This prop is called todo.
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>',
});

const app7 = new Vue({
  el: '#app-7',
  data: {
    groceries: [
      { id: 0, text: 'Vegg' },
      { id: 1, text: 'Bean' },
      { id: 2, text: 'Spaget' },
    ],
  },
});

Vue.component('button-counter', {
  data() {
    return {
      count: 0,
    };
  },
  template: '<button v-on:click="count++" class="btn waves-effect waves">You clicked me {{ count }} times.</button>',
});

const demoComponent = new Vue({ el: '#demo-component' });
const demoComponent2 = new Vue({ el: '#demo-component2' });

Vue.component('blog-post', {
  props: ['title'],
  template: '<h6><a>{{ title }}</a></h6>',
});

// eslint-disable-next-line no-new
new Vue({
  el: '#blog-post',
  data: {
    posts: [
      { id: 1, title: 'Ruminations on nuclear fission' },
      { id: 2, title: 'Geopolitical implications of nuclear winter' },
      { id: 3, title: 'How I stopped worrying and love the bomb' },
    ],
  },
});

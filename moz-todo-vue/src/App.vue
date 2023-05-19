<template>
  <div id="app">
    <h1>To-Do List</h1>
    <ul>
      <li><ToDoItem /></li>
    </ul>
  </div>
</template>

<script>
  import ToDoItem from './components/ToDoItem.vue';

  export default {
    name: 'app',
    components: {
      ToDoItem,
    },
  }
</script>

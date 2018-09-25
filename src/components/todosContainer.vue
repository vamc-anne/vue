<template>
    <section>
        <input v-model="filter" ref="todosFilter" v-on:keyup='filterTodo(filter)' placeholder="Filter.."/>
        <AddTodo ref="todosapp" v-on:add-todo="addTodo"/>
        <Todo
            v-for="(todo, index) of filterTodo(filter)"
            ref="todosComp"
            v-bind:key="index"
            v-bind:todo='todo'
            v-if="!todo.deleted"
        >
        </Todo>
    </section>
</template>

<script>
import Todo from './todosItem.vue'
import AddTodo from './addTodo.vue'

export default {
  // props: ["todos"],
  data: function () {
    return {
      todos: [],
      filter: '',
      filteredTodos: []
    }
  },
  components: {
    Todo,
    AddTodo
  },
  methods: {
    addTodo: function (todo) {
      this.todos.push(todo)
    },
    filterTodo: function (todoItem) {
      return this.todos.filter(item => item.title.includes(todoItem))
    }
  }
}
</script>

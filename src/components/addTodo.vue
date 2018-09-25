<template>
    <input placeholder="Add todo.." v-model="todo" v-on:keyup.enter="addTodo(todo)">
</template>
<script>
export default {
  data: function () {
    return {
      todo: ''
    }
  },
  methods: {
    addTodo (todo) {
      const newTodo = Object.assign(
        {},
        { title: todo, complete: false, deleted: false }
      )
      this.$emit('add-todo', newTodo)
      this.todo = ''
    }
  }
}
</script>

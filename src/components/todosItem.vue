<template>
    <div v-bind:class = "{strike:todo.complete}" class="todo">
        <input type="checkbox" v-model="todo.complete" />
        <span>{{todo.title}}</span>&nbsp;
        <span v-on:click="todo.deleted = true "><i class="fas fa-trash-alt"></i></span>
    </div>
</template>
<script>
export default {
  inheritAttrs: true,
  props: ['todo']
}
</script>
<style scoped>
.strike {
  text-decoration: line-through;
}
.todo {
  margin: 5px;
  cursor: pointer;
}
</style>

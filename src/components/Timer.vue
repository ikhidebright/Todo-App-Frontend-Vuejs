<template>
    <div class="main">
        <p> {{ todo.time }} </p>
    </div>
</template>

<script>
export default {
  name: 'Timer',
  props: ['todo']
}
</script>

<style scoped>
.main {
    margin-left: 3vmin;
    margin-top: 1vmin;
    color: rgb(131, 129, 129);
    font-size: 0.7rem;
    font-style: italic;
}

</style>

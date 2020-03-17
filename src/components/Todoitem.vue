<template>
    <div :class="[todo.completed == 1? 'itemdone' : 'item']">
        <h6>
          <label>
     <input :checked="todo.completed == 1" type="checkbox"
     size="lg" @change="$emit('mark', todo)"
    >
    {{ todo.task }}
      </label>
    <i class="far fa-trash-alt" @click="$emit('del-task', todo.id)"></i>
    <Timer v-bind:todo="todo"/>
    <!-- <i class="far fa-trash-alt" @click="$emit('del-task', todo.id)"></i> -->
    </h6>
    </div>
</template>

<script>
import Timer from './Timer'
export default {
  name: 'Todoitem',
  props: ['todo'],
  components: {
    Timer
  },
  methods: {
  }
}
</script>
<style lang="scss">
h6 {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

label {
  cursor: pointer;
}

.sub2 {
  background-color: #065566;
}

.fa-trash-alt {
float: right;
width: 3%;
height: 3vh;
border: none;
color: red;
margin-right: 4vmin
}

.fa-trash-alt:hover {
float: right;
background-color: inherit;
border: none;
color: #065566;
margin-right: 4vmin
}

.item {
    background-color: rgb(255, 255, 255);
    /* height: 15vh; */
    padding-top: 4vmin;
    padding-bottom: 2vmin;
    font-weight: bold;
    padding-left: 1vmin;
    border-left: 5px solid rgb(180, 4, 4);
    border-bottom: 0px solid rgb(194, 194, 194);
    box-shadow: 3px 3px 5px rgb(175, 174, 174);
    margin: 2vmin;
    color: black;
    margin-bottom: 2vmin;
    box-sizing: border-box;
    cursor: pointer;
}

.item:hover {
    background-color: #ffebeb;
    transform: scale(1.03);
    border: none;
    transition-duration: 500ms;
    color: #065566;
}

.itemdone {
    background-color: rgb(152, 185, 178);
    /* height: 15vh; */
    padding-top: 4vmin;
    padding-bottom: 2vmin;
    font-weight: bold;
    padding-left: 1vmin;
    border-left: 5px solid rgb(18, 143, 49);
    border-bottom: 0px solid rgb(194, 194, 194);
    box-shadow: 3px 3px 5px rgb(175, 174, 174);
    margin: 2vmin;
    color:rgb(4, 63, 48);
    text-decoration: line-through;
    transform: scale(0.97);
    margin-bottom: 2vmin;
    box-sizing: border-box;
    cursor: pointer;
}

.itemdone h6 label {
  text-decoration: line-through;
}
</style>

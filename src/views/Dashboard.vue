<template>
  <div class="home">
  <Header />
    <div class="container">
      <div class="main mt-9">
      <br>
     <div v-bind:key="todo.id" v-for="todo in todos">
       <Todoitem v-bind:todo="todo" v-on:del-task="delTodo" v-on:mark="markTodo"/>
     </div>
     <i class="fas fa-clipboard-list" v-if="this.todos.length === 0"></i>
     <div>
  <b-modal id="modal-center" centered title="Add Todo" hide-header-close= true cancel-variant="danger" ok-title="Add">
     <template v-slot:modal-footer="{ ok, cancel }">
      <!-- Emulate built in modal footer ok and cancel button actions -->
      <div class="mb-1">
     <b-button @click="showMsgBoxTwo" variant="" size="sm" class="sub2">Add</b-button>
    </div>
      <!-- <b-button size="sm" variant="" class="sub" @click="addtodo">
        Add
      </b-button> -->
      <b-button size="sm" variant="danger" @click="cancel()">
        Cancel
      </b-button>
    </template>
    <div>
  <b-form-textarea
    id="textarea-no-resize"
    v-model="task"
    placeholder="Enter a Task"
    rows="4"
    no-resize
  ></b-form-textarea>
    <b-row class="my-1" v-for="type in types" :key="type">
      <b-col sm="6">
        <b-form-input :id="`type-${type}`" :type="type" v-model="time"></b-form-input>
      </b-col>
    </b-row>
</div>
  </b-modal>
</div>
  <button @click="dateNow" v-b-modal.modal-center class="add">+</button>
      </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import Todoitem from '../components/Todoitem.vue'
import Header from '@/components/Header'

export default {
  name: 'Dashboard',
  components: {
    Todoitem,
    Header
  },
  data () {
    return {
      types: [
        // 'date',
        'time'
      ],
      user: this.$store.state.user[0].username,
      todos: [],
      task: '',
      alert: '',
      time: '',
      user_id: this.$store.state.user[0].id
    }
  },
  methods: {
    dateNow () {
      const d = new Date()
      const h = d.getHours()
      const m = d.getMinutes()
      this.time = h + ':' + m
    },
    delTodo (id) {
      const result = confirm('Sure you want to delete?')
      if (result) {
        axios.get(`https://todo-app-backend-node.herokuapp.com/delete/${id}`, {
          id: id
        }).then((res) => {
          this.load()
        })
      }
    },
    markTodo (todo) {
      axios.put(`https://todo-app-backend-node.herokuapp.com/mark/${todo.id}`, {
        completed: !todo.completed
      }).then((res) => {
        this.load()
      })
    },
    load () {
      axios.get(`https://todo-app-backend-node.herokuapp.com/todos/${this.user_id}`, {
        user_id: this.user_id
      }).then((res) => {
        this.todos = res.data.result
      })
    },
    sendTodo () {
      if (this.task.length < 5) {
        alert('Task must be more than 5 letter words')
      } else {
        axios.post('https://todo-app-backend-node.herokuapp.com/todo', {
          task: this.task,
          user_id: this.user_id,
          time: this.time
        }).then((res) => {
          this.alert = res.data.message
          this.load()
        })
        this.task = ''
        this.dateNow()
      }
    },
    showMsgBoxTwo () {
      this.sendTodo()
      this.boxTwo = ''
      this.$bvModal.msgBoxOk(this.alert, {
        title: 'Confirmation',
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'primary',
        class: '.sub2',
        centered: true
      })
        .then(value => {
          this.boxTwo = value
          this.$bvModal.hide('modal-center')
          // alert('hey')
        })
        .catch(err => {
          throw err
        })
    }
  },
  created () {
    this.dateNow()
    axios.get(`https://todo-app-backend-node.herokuapp.com/todos/${this.user_id}`, {
      user_id: this.user_id
    }).then((res) => {
      this.todos = res.data.result
    })
  }
}
</script>

<style scoped>
b-dropdown-item:active {
  background-color: red;
}

.sub {
  background-color: #065566;
  width: 50%;
}

.sub2 {
  background-color: #065566;
}

.ok {
  background-color: black;
}

h4 {
  padding: 1vmin;
}

.fa-clipboard-list {
  color: rgb(223, 223, 223);
  font-size: 3rem;
  width: 100%;
  margin: 0 auto;
  margin-top: 26vh;
  text-align: center;
}

.add {
border: none;
background-color: white;
box-shadow: 0 3px 6px 0 rgba(0,0,0,.25);
border-radius: 50%;
font-weight: ;
color: #810909;
font-size: 1.5rem;
font-family: Squada One;
width: 60px;
position: fixed;
bottom: 0;
right: 0;
margin: 0 10vw 10vw 0;
height: 60px;
float: right;
}

.add:focus {
  outline: none;
}

.add:hover {
background-color: #e1ecee;
}

.main {
width: 100%;
height: 90vh;
}

#nav {
  background-color: #065566;
  height: 9vh;
  color: white;
  padding: 0%;
  margin-bottom: 1%;
}

router-link {
  color: white;
}

@media only screen and (min-width: 600px) {
.sub {
  background-color: #065566;
  width: 50%;
}

.ok {
  background-color: black;
}

h5 {
  padding: 3vmin;
}

.fa-clipboard-list {
  color: rgb(223, 223, 223);
  font-size: 10vmin;
  width: 100%;
  margin: 0 auto;
  margin-top: 26vh;
  text-align: center;
}

.add {
border: none;
background-color: white;
box-shadow: 0 3px 6px 0 rgba(0,0,0,.25);
border-radius: 50%;
font-weight: bold;
color: #810909;
font-size: 18px;
width: 60px;
position: fixed;
bottom: 0;
right: 0;
margin: 0 30vw 6vw 0;
height: 60px;
float: right;
}

/* .add:focus {
  outline: none;
}

.add:hover {
background-color: #e1ecee;
} */

.main {
width: 60%;
margin: 0 auto;
/* box-shadow: 0 0 6px gray; */
height: 80vh;
margin-top: 11vh;
position: relative;
bottom: 2vmin;
/* border-top-left-radius: 5vmin;
border-top-right-radius: 5vmin; */
}

#nav {
  background-color: #065566;
  height: 9vh;
  color: white;
  width: 100%;
  padding: 0;
  position: fixed;
  top: 0;
  z-index: 1;
  margin-bottom: 2%;
}

router-link {
  color: white;
}
}
</style>

<template>
  <el-col :span="24">
    <el-col>
      <el-row>
        <el-col :span="24" justify="center"><h1 class="title">Search It</h1></el-col>
      </el-row>
      <el-row>
        <el-input v-model="search" v-on:keyup.native="filterTasks" placeholder="Type your keywords">
        </el-input>
      </el-row>
    </el-col>
    <el-row :gutter="50" style="margin-top: 50px">
      <h3> </h3>
      <hr>
      <el-col :span="18">
        <div v-if="!newTasks">
          <list-tasks :value="filteredTasks" @input="(updatedTasks) => {filteredTasks = updatedTasks}"></list-tasks>
        </div>
        <div v-if="newTasks">
          <create-task :value="tasks"
                       v-on:input="updateTasks"
                       v-on:added="reverseFin">
          </create-task>
        </div>
      </el-col>
      <el-col :span="6">
        <el-button @click="reverseFin"
                   :icon="newTasks ? 'el-icon-coin' : 'el-icon-plus'"
                   type="success"
                   plain>
        </el-button>
      </el-col>
      <div>
        <!--    <div class="hello">-->
        <!--      <div class="columns">-->
        <!--        <div class="column is-half">-->
        <!--          <h2 class="subtitle">Todo</h2>-->
        <!--          <div class="todo">-->
        <!--            <div class="card">-->
        <!--              <div class="card-content">-->
        <!--                <div class="content">-->
        <!--                  Task description-->
        <!--                </div>-->
        <!--              </div>-->

        <!--              <footer class="card-footer">-->
        <!--                <a class="card-footer-item" v-on:click="setStatus(new_task.id)">Done</a>-->
        <!--              </footer>-->
        <!--            </div>-->
        <!--          </div>-->
        <!--        </div>-->

        <!--        <div class="column is-half"> &lt;!&ndash; Half of the column for done tasks &ndash;&gt;-->
        <!--          <h2 class="subtitle">Done</h2>-->

        <!--          <div class="done">-->
        <!--            <div class="card">-->
        <!--              <div class="card-content">-->
        <!--                <div class="content">-->
        <!--                  Task description-->
        <!--                </div>-->
        <!--              </div>-->
        <!--            </div>-->
        <!--          </div>-->
        <!--        </div>-->
        <!--      </div>-->
        <!--    </div>-->


        <!--    <div class="columns">-->
        <!--      <div class="column is-one-third is-offset-one-third">-->
        <!--        <form v-on:submit.prevent="addTask">-->
        <!--          <h2 class="subtitle">Add task</h2>-->

        <!--          <div class="field">-->
        <!--            <label class="label">Description</label>-->
        <!--            <div class="control">-->
        <!--              <input class="input" type="text" v-model="description">-->
        <!--            </div>-->
        <!--          </div>-->

        <!--          <div class="field">-->
        <!--            <label class="label">Status</label>-->
        <!--            <div class="control">-->
        <!--              <div class="select">-->
        <!--                <select v-model="status">-->
        <!--                  <option value="0">To do</option>-->
        <!--                  <option value="1">Done</option>-->
        <!--                </select>-->
        <!--              </div>-->
        <!--            </div>-->
        <!--          </div>-->

        <!--          <div class="field is-grouped">-->
        <!--            <div class="control">-->
        <!--              <button class="button is-link">Submit</button>-->
        <!--            </div>-->
        <!--          </div>-->
        <!--        </form>-->
        <!--      </div>-->
        <!--    </div>-->
      </div>
    </el-row>
  </el-col>
</template>

<script>
  import axios from 'axios';
  import CreateTask from "./CreateTask";
  import ListTasks from "./ListTasks";

  export default {
    name: 'Main',
    components: {ListTasks, CreateTask},
    data() {
      return {
        newTasks: false,
        search: '',
        tasks: [],
        filteredTasks: [],
        description: '',
        status: 0
      }
    },
    mounted() {
      this.getTasks();
    },
    methods: {
      getTasks() {
        axios({
          method: 'get',
          url: `https://${window.location.hostname}/tasks/`,

        }).then(response => {
          this.tasks = response.data;
          this.filteredTasks = Object.assign([], this.tasks);
        });
      },
      updateTasks(updatedTasks) {
        this.tasks = updatedTasks;
        this.reverseFin();
      },
      reverseFin() {
        this.newTasks = !this.newTasks;
      },
      filterTasks() {
        console.log(this.search);
        this.filteredTasks = Object.assign([], this.tasks);
        this.filteredTasks = this.filteredTasks.filter(data => !this.search || data.description.toLowerCase().includes(this.search.toLowerCase()))
        console.log(this.filteredTasks);
      },
    }
  }
</script>

<style scoped>
  @import url("//unpkg.com/element-ui@2.8.2/lib/theme-chalk/index.css");

  .select, select { /* 100% width for the select */
    width: 100%;
  }

  .card { /* Adding some air under the tasks */
    margin-bottom: 25px;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

  .done { /* Make the done tasks a little bit transparent */
    opacity: 0.3;
  }
</style>

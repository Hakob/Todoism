<template>
  <el-row>

    <el-col :span="12">
      <h2 class="subtitle">Todo</h2>
      <div class="todo">
        <div class="card" v-for="task in value" v-if="task.status === 0">
          <div class="card-content">
            <div class="content">
              {{ task.description }}
            </div>
          </div>
          <footer class="card-footer">
            <a class="card-footer-item" @click="setStatus(task.id)">Done</a>
          </footer>
        </div>
      </div>
    </el-col>

    <el-col :span="12">
      <h2 class="subtitle">Done</h2>
      <div class="done">
        <div class="card" v-for="task in value" v-if="task.status === 1">
          <div class="card-content">
            <div class="content">
              {{ task.description }}
            </div>
            <el-button icon="el-icon-delete-solid" v-on:click="deleteTask(task.id)"></el-button>
          </div>
        </div>
      </div>
    </el-col>

  </el-row>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "ListTasks",
    props: {
      value: {
        type: Array,
        required: true,
      }
    },
    watch: {
      value: {
        handler: function (val, oldVal) {
          this.$emit('input', this.value);
        },
        deep: true,
      }
    },
    methods: {
      setStatus(task_id) {
        let description = '';

        for (let i = 0; i < this.value.length; i++) {
          if (this.value[i].id === task_id) {
            this.value[i].status = 1;
            description = this.value[i].description;
            break
          }
        }

        axios({
          method: 'put',
          url: 'http://127.0.0.1:8000/tasks/' + task_id + '/',
          headers: {
            'Content-Type': 'application/json'
          },
          data: {
            description: description,
            status: 1
          },

        })
      },
      deleteByID(valID) {
        for (let i = 0; i < this.value.length; i++) {
          let obj = this.value[i];

          if (obj.id === valID) {
            this.value.splice(i, 1);
          }
        }
      },
      deleteTask(task_id) {
        axios({
          method: 'delete',
          url: 'http://127.0.0.1:8000/tasks/' + task_id + '/',
          headers: {
            'Content-Type': 'application/json'
          },

        }).then((response) => {
          if (response.status === 204) {
            this.deleteByID(task_id);
          }
        })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  }
</script>

<style scoped>

</style>

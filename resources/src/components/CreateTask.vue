<template>
    <el-col justify="center">
      <el-row>
        <div>Fill task's description and set the status</div>
      </el-row>
      <el-row>
        <el-input v-model="new_task.description">
        </el-input>
      </el-row>
      <el-row>
        <el-select v-model="new_task.status" placeholder="Select a status">
          <el-option value="0" label="To Do">

          </el-option>
          <el-option value="1" label="Done">

          </el-option>
        </el-select>
      </el-row>
      <el-row>
        <el-button icon="el-icon-price-tag" v-on:click="addTask">

        </el-button>
      </el-row>
    </el-col>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "CreateTask",
    props: {
      value: {
        type: Array,
        required: true
      },
    },
    data() {
      return {
        new_task: {
          status: '0',
          description: '',
        }
      }
    },
    methods: {
      addTask() {
        if (this.new_task.description) {
          axios({
            method: 'post',
            url: `https://${window.location.hostname}/tasks/`,
            data: this.new_task,

          }).then((response) => {
            let newTask = {
              'id': response.data.id,
              'description': this.new_task.description,
              'status': parseInt(this.new_task.status)
            };

            this.value.push(newTask);

            this.new_task.description = '';
            this.new_task.status = '0';
          })
            .catch((error) => {
              console.log(error);
            });
          this.$emit('added');
        }
      },
      watch: {
        value: {
          handler: function (val, oldVal) {
            this.$emit('input', this.value);
          },
          deep: true,
        },
      },
    }
  }
</script>

<style scoped>

</style>

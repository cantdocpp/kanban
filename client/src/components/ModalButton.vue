<template>
  <div id="modal">
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
      Add Task
    </button>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Add task</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="recipient-name" class="col-form-label">assign to:</label>
                <input type="text" class="form-control" id="recipient-name" v-model="assign">
              </div>
              <div class="form-group">
                <label for="message-text" class="col-form-label">task:</label>
                <input type="text" class="form-control" id="recipient-name" v-model="task" v-on:keyup.enter="submitTask">
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="submitTask()">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { namesRef } from '../firebase'

export default {
  name: "",
  data () {
    return {
      assign: '',
      task: ''
    }
  },

  firebase: {
    names: namesRef
  },

  methods: {
    submitTask() {
      namesRef.push({
        task: this.task,
        assign: this.assign,
        status: 'backlog'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
</style>

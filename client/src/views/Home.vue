<template>
  <div class="home">
    <Modal></Modal>
    <div class="row">
      <div class="col-md-3">
        <div class="card-header">
          <p class="label">Backlog</p>
        </div>
        <div class="kanban-list">
          <div class="item">
            <div class="kanban-list-content" v-for="t in task">
              <div v-if="t.status == 'backlog'">
                <div class="kanban-task-body">
                  <p class="property">{{t.task}}</p>
                </div>
                <hr>
                <div class="kanban-task-footer">
                  <p class="property footer">{{t.assign}}</p>
                  <button @click='pindahKeProgress(t[".key"])'>done</button>
                  <button @click='removeTask(t[".key"])'>remove</button>
                  <button @click="editTask(t['.key'])">edit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card-header">
          <p class="label">In Progress</p>
        </div>
        <div class="kanban-list">
          <div class="item">
            <div class="kanban-list-content" v-for="t in task">
              <div v-if="t.status == 'in progress'">
                <div class="kanban-task-body">
                  <p class="property">{{t.task}}</p>
                </div>
                <hr>
                <div class="kanban-task-footer">
                  <p class="property footer">{{t.assign}}</p>
                  <button @click='pindahKeTesting(t[".key"])'>done</button>
                  <button @click='removeTask(t[".key"])'>remove</button>
                  <button @click="editTask(t['.key'])">edit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card-header">
          <p class="label">Testing</p>
        </div>
        <div class="kanban-list">
          <div class="item">
            <div class="kanban-list-content" v-for="t in task">
              <div v-if="t.status == 'testing'">
                <div class="kanban-task-body">
                  <p class="property">{{t.task}}</p>
                </div>
                <hr>
                <div class="kanban-task-footer">
                  <p class="property footer">{{t.assign}}</p>
                  <button @click='pindahKeDone(t[".key"])'>done</button>
                  <button @click='removeTask(t[".key"])'>remove</button>
                  <button @click="editTask(t['.key'])">edit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card-header">
          <p class="label">Done</p>
        </div>
        <div class="kanban-list">
          <div class="item">
            <div class="kanban-list-content" v-for="t in task">
              <div v-if="t.status == 'done'">
                <div class="kanban-task-body">
                  <p class="property">Done</p>
                </div>
                <hr>
                <div class="kanban-task-footer">
                  <p class="property footer">{{t.assign}}</p>
                  <button @click='removeTask(t[".key"])'>remove</button>
                  <button @click="editTask(t['.key'])">edit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue'
import Modal from '@/components/ModalButton.vue'
import { namesRef } from '../firebase'


export default {
  name: 'home',
  data() {
    return {
      tes: 'doge'
    }
  },

  firebase: {
    task: namesRef
  },

  methods: {
    pindahKeProgress(key) {
      namesRef.child(key).update({status: 'in progress'})
    },

    pindahKeTesting: function(key) {
      namesRef.child(key).update({status: 'testing'})
    },

    pindahKeDone: function(key) {
      namesRef.child(key).update({status: 'done'})
    },

    removeTask: function(key) {
      namesRef.child(key).remove()
    },

    editTask: function(key) {
      namesRef.child(key).update()
    }
  },

  components: {
    Modal
  }
}
</script>

<style lang="scss" scoped>
  .row {
    padding-top: 50px
  }

  #card {
    width: 290px;
    border: solid 1px black;
    display: inline-block;
    box-sizing: content-box;
    margin: 5px
  }

  .card-header {
    height: 46px;
    background: #3498db;
    position: relative;
    font-family: 'PT Sans',Tahoma;
    z-index: 2
  }

  .label {
    padding-left: 10px;
    height: 100%;
    color: white;
    font-size: 18px;
    white-space: normal;
    outline: 0;
  }

  .item {
    padding: 4px 8px 5px;
    border: none;
    position: relative;
    line-height: 29px;
    white-space: normal;
    box-sizing: border-box;
  }

  .kanban-list {
    background-color: #f5f5f5;
  }

  .kanban-list-content {
    box-sizing: border-box;
    background-color: #fff;
    padding: 0 7px;
    border-radius: 2px;
    border: 1px solid #e2e2e2;
  }

  .kanban-task-body {
    height: 22px;
    overflow: hidden;
    cursor: pointer;

  }

  .kanban-task-footer {
    font-size: 15px;
    line-height: 20px;
    outline: 0;
    height: auto;
    justify-content: space-between;
  }

  .property {
    font-family: 'PT Sans',Tahoma;
  }
</style>

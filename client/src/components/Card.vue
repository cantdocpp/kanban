<template>
  <div id="card">
    <div class="card-header">
      <p class="label">{{title}}</p>
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
              <button @click='pindah(t[".key"])'>done</button>
              <button @click='removeTask(t[".key"])'>remove</button>
              <button @click="editTask(t['.key'])">edit</button>
            </div>
          </div>
          <div v-else-if="t.status == 'in progress'">
            <div class="kanban-task-body">
              <p class="property">{{t.task}}</p>
            </div>
            <hr>
            <div class="kanban-task-footer">
              <p class="property footer">{{t.assign}}</p>
              <button @click='pindah(t[".key"])'>done</button>
              <button @click='removeTask(t[".key"])'>remove</button>
              <button @click="editTask(t['.key'])">edit</button>
            </div>
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
    props: ["title", "task"],
    methods: {
      pindah(key) {
        namesRef.child(key).update({status: 'in progress  '})
      },

      removeTask: function(key) {
        namesRef.child(key).remove()
      },

      editTask: function(key) {
        namesRef.child(key).update()
      }
    },
    data: () => ({

    })
  }
</script>

<style lang="scss" scoped>
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

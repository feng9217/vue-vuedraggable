<template>
  <draggable class="drag-wrapper" :list="list2" :move="getdata" @update="datadragEnd" :options="{animation: 300, handle:'.dargDiv'}">
    <transition-group name="list-complete" >
      <div v-for="element in list2" :key="element.it.name"  class="list-complete-item">
        <div class="styleclass dargDiv">{{element.id}}</div>
        <div class="styleclass">{{element.it.name}}</div>
      </div>
    </transition-group>
  </draggable>
</template>

<script type="text/javascript">
  import draggable from 'vuedraggable'

  export default {
    data() {
      return {
        list2:[
          {id:"id1",it:{name:'bbbb'}},
          {id:"id2",it:{name:'2222'}},
          {id:"id3",it:{name:'3333'}},
          {id:"id4",it:{name:'4444'}}
        ]
      }
    },
    methods: {
      getdata: function(evt){
        console.log(evt.draggedContext.element.id);
      },
      datadragEnd:function(evt){
        console.log('拖动前的索引：'+evt.oldIndex);
        console.log('拖动后的索引：'+evt.newIndex);
      }
    },
    components: {
      draggable
    }
  }
</script>

<style scoped>
[v-cloak]{
  display:none;
}
.drag-wrapper{
  width: 100%;
  margin: 0 auto;
  padding: 20px;
}
.list-complete-item {
  transition: all 0.5s;
  height: 30px;
  width: 600px;
  line-height: 30px;
  background: #000;
  color: #fff;
  text-align: center;
  font-size: 16px;
  margin-top: 10px;
}
.styleclass{
  float: left;
  width: 100px;
}
.list-complete-enter, .list-complete-leave-active {
  opacity: 0;
  height: 0px;
  margin-top: 0px;
  padding: 0px;
  border: solid 0px;
}
.list-complete-sortable-chosen, .list-complete-sortable-ghost{
  opacity: 0;
  height: 0px;
  margin-top: 0px;
  padding: 0px;
  border: solid 0px;
}
.dargDiv{
  cursor: move;
  background: red;
}
.wrods{
  margin-top: 50px;
}
p{
  line-height: 24px;
  text-align: center;
}
</style>
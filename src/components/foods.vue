<template>
  <div class="wrapper">
  <section class="foods">
    <div class="menu-wrapper">
      <draggable class="menu list-group" element="ul" v-model="menu" :options="dragOptions" @start="isDragging=true" @end="isDragging=false">
        <transition-group type="transition" :name="'flip-list'">
          <li class="menu-item list-group-item" v-for="item in menu" :key="item.name">
            <span class="text">{{item.name}}</span>
          </li>
        </transition-group>
      </draggable>
    </div>
    <div class="food-wrapper">
      <div class="food-content list-group" v-for="item in menu">
        <div class="title">{{item.name}}</div>
        <draggable element="ul" v-model="item.food" :options="dragOptions" @start="isDragging=true" @end="isDragging=false">
          <li class="foods list-group-item" v-for="food in item.food">
            <span class="name">{{food.name}}</span>
            <span class="price">{{food.price}}</span>
          </li>
        </draggable>
      </div>
    </div>
    <div class="list-group">
      <pre>{{menu}}</pre>
    </div>
    <div class="list-group">
      <pre>{{newItem}}</pre>
    </div>
  </section>
  <section class="form-wrapper">
    <input type="text" name="菜式" placeholder="大菜/中菜/小菜" @change="setId" ref="sort">
    <input type="text" name="'name'" placeholder="输入菜名" v-model.trim.lazy="newItem.name">
    <input type="text" name="'price'" placeholder="输入价格" v-model.number="newItem.price">
    <button type="submit" class="btn btn-info" @click="submit">提交</button>
  </section>
  </div>
</template>

<script type="text/javascript">
  import draggable from 'vuedraggable'

  export default {
    data() {
      return {
        menu: [
          {
            "type_id":1,
            "name":"大菜",
            "food":[
              {"food_id":1,"name":"鱼香肉丝","price":"10"},
              {"food_id":2,"name":"红烧肉","price":"11"},
              {"food_id":3,"name":"香辣粉","price":"12"}
            ]
          },
          {
            "type_id":2,
            "name":"中菜",
            "food":[
              {"food_id":4,"name":"小炒肉","price":"13"},
              {"food_id":5,"name":"云吞","price":"14"}
            ]
          },
          {
            "type_id":3,
            "name":"小菜",
            "food":[
              {"food_id":6,"name":"雪糕","price":"15"},
              {"food_id":7,"name":"黄瓜","price":"16"}
            ]
          }
        ],
        editable: true,
        isDragging: false,
        delayedDragging: false,
        newItem: {}
      }
    },
    computed: {
      dragOptions() {
        return {
          animation: 0,
          group: 'description',
          disabled: !this.editable,
          ghostClass: 'ghost'
        }
      }
    },
    methods: {
      setId() {
        let count = []
        let foods = this.menu
        // console.log(foods)
        // 遍历 生成不重复的 food_id
        for(let i=0; i<foods.length; i++) {
          let food = foods[i].food
          // console.log(food)
          for(let j=0; j<food.length;j++) {
            count.push(food[j].food_id)
          }
        }
        // console.log(count)
        this.newItem.food_id = count.length + 1
        // console.log(this.newItem)
      },
      searchOrder(id) {
        for (let i=0; i<this.menu.length; i++) {
          if(this.menu[i].type_id === id) {
            return i
          }
        }
      },
      submit() {
        let child = this.newItem
        // console.log(child)
        // 根据菜式插入对应数组中
        let value = this.$refs.sort.value
        // console.log(value)
        if (!value) {
          console.log('值还没输完呢!!!')
          return
        }
        if (value === '大菜') {
          this.menu[this.searchOrder(1)].food.push(this.newItem)
        } else if (value === '中菜') {
          this.menu[this.searchOrder(2)].food.push(this.newItem)
        } else {
          this.menu[this.searchOrder(3)].food.push(this.newItem)
        }
        // 清空为初始值
        this.newItem = {}
        this.$refs.sort.value = ''
      }
    },
    components: {
      draggable
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .foods{
    // margin-top: 60px;
    display: flex;
    width: 80%;
    color: rgb(7,17,27);
  }
  .menu-wrapper{
    flex: 0 0 60px;
    width: 60px;
    margin: 20px 10px 0 0;
  }
  .menu-wrapper .menu-item{
    display: table;
    margin-bottom: 10px;
    cursor: move;
  }
  .menu-item .text{
    display: table-cell;
    vertical-align: middle;
  }
  .food-wrapper{
    flex: 1;
  }
  .food-wrapper .title{
    text-align: left;
    padding-left: 16px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
  }
  .food-wrapper .foods{
    margin-bottom: 10px;
    cursor: move;
    position: relative;
  }
  .foods .price{
    position: absolute;
    right: 16px;
  }
  .form-wrapper{
    margin-top: 20px;
    width: 600px;
    border: 1px solid #E7E7E7;
    border-radius: 4px;
    padding: 10px 10px;
    display: flex;
  }
  .form-wrapper input{
    flex: 1;
    width: 60px;
    margin: 0 10px;
    padding: 0 10px;
  }
  /* 定义动画 */
  .flip-list-move {
    transition: transform 0.5s;
  }
  .no-move {
    transition: transform 0s;
  }
  .ghost {
    opacity: 0.5;
    background: #E7E7E7;
  }
</style>
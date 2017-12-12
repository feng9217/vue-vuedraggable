<template>
  <section class="foods">
    <div class="menu-wrapper">
      <ul class="menu">
        <li class="menu-item" v-for="item in menu">{{item.name}}</li>
      </ul>
    </div>
    <div class="food-wrapper">
      <ul class="food-content" v-for="item in menu">
        <span class="title">{{item.name}}</span>
        <li class="foods" v-for="food in item.food">
          <span class="name">{{food.name}}</span>
          <span class="price">{{food.price}}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script type="text/javascript">
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
        ]
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .foods{
    color: #fff;
    display: flex;
    width: 80%;
  }
  .menu-wrapper{
    flex: 0 0 60px;
    width: 60px;
    text-align: center;
    background: #792f54;
  }
  .food-wrapper{
    flex: 1;
    background: #352435;
  }
</style>
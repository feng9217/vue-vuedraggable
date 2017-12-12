var menu = [
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
];
/*
step 1: 根据menu的数据，动态生成一个二级联运菜单
step 2: 实现动态增加、修改、删除菜单dom节点，同时保持dom结构与json保持同步
step 3: 实现通过拖拽修改菜单结构（可使用jQuery插件），同时保持dom结构与json保持同步
step 4: 将结果发送到2926269816@qq.com，邮件标题写上姓名，谢谢！
*/

// 左边做一个menu-view
// 右边按分类做菜单
// 拖拽事件 通过每个数组的高判断位置 然后解构互换

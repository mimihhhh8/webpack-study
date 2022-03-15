require(['./requirejs/add.js','./requirejs/minus.js'],function(add,minus){
  add(1,2)
  minus(3,4)
  console.log(add(1,2),
  minus(3,4))
})
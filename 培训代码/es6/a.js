
//   async function m() {
//      await move(ball1,200);
//      await move(ball2,200);
//      await move(ball3,200);
//   }
//   m().then(data=>{
//     alert('全部走完了')
//   })

  // move(ball1,200).then(data=>{
  //     return  move(ball2,200)
  //   }).then(data=>{
  //     return move(ball3,200)
  // })
  // function m(){
  //   return {name:1}.then()
  // }
  // m().then()
//第一种 
// move(ball1,200).then(data=>{
//    move(ball2,200).then(data=>{
//      move(ball3,200).then(data=>{
//         alert('我动完了')
//      })
//    })
// })
function move(element, target){ 
        return new Promise((resolve,reject)=>{
          let m = 0;
          window.timer = setInterval(() => {
              m += 5;
              console.log(m)
              element.style.left = m + 'px';
              if (parseInt(element.style.left) > target) {
                  clearInterval(window.timer)
                  element.style.left = target + 'px'
                  resolve('成功')
              }
          }, 13)
        })
};
// 第一种写法， 缺点 会一直嵌套 
// move(ball1,200).then(res=>{
//     move(ball2,200).then(res=>{
//         move(ball3,200).then(res=>{
//             alert('运动完成')
//         })
//     })
// })

// 第二种写法 嵌套变少了  
// move(ball1,200).then(res=>{
//     return move(ball2,200)
// }).then(res=>{
//     return move(ball3,200)
// }).then(res=>{
//     alert('运动完成')
// })


// 第三种写法  

async function moveBall1 (){
  await move(ball1,200)
  await move(ball2,200)
  await move(ball3,200)
}
moveBall1().then(res=>{
    alert('运动完成')
})













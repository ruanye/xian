// 递归函数

// 判断一个字符是不是回文字符串    'abccba'

// 第二次传入的值 bccb

function fn(str){
 if(str.length<=1){
        return true
  }
  if(str[0]!==str[str.length-1]){
       return false
  }
  return  fn(str.slice(1,-1))
}

console.log(fn('abccba'))
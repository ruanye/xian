// vue3 实现原理的底层  代理对象 

const target = {
    message: 'hello world',
    a:'111'
}

// 定义一个代理对象

let handler = {
    get(target,key) {
      // 用来拦截获取值 
       console.log(`获取值，${key}`)
       return target[key]
    },
    set(target,key,value) {
      // 用来拦截设置值
      console.log(`设置了什么值 ${value}`)
      target[key] = value;
      return true;
    }
}

const proxyObj = new Proxy(target,handler);

proxyObj.message = 'goodbye,world';

console.log(proxyObj.message)


const validator = {
    set: function(target, prop, value) {
      if (prop === 'age') {
        if (!Number.isInteger(value)) {
          throw new TypeError('Age must be an integer');
        }
        if (value < 0) {
          throw new TypeError('Age must be a positive integer');
        }
      }
      target[prop] = value;
      return true;
    }
  };

  
  const person = new Proxy({}, validator);
  
  person.age = 30;
  console.log(person.age); // Output: 30
  
//   person.age = 'thirty'; // Throws TypeError: Age must be an integer
  
//   person.age = -30; // Throws TypeError: Age must be a positive integer
const child = {
    template: `<div @click='changeAppMsg'>点击子组件</div>`,
    props:{
        msg: {
            type:String,
            default:'默认显示值',
            // 进行数据的自定义验证 
            validator(value, props) {
                //  定义自定义验证的逻辑 
               if(value.length < 5){
                  throw new Error('长度不能小于5')
               }
            }
        }
    },
    // setup 函数是有参数的 第一参数 props  第二个参数是 context  emit 是在context 中解构出来的 
    setup(props, {emit}) {
        const changeAppMsg=()=>{
            // emit 中第一参数是事件，第二个参数是事件携带的参数 
           emit('custom-event','修改 message')
        }
       return {
        changeAppMsg
       }
    },
  };
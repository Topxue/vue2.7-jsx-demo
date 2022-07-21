# 在vue2中写jsx的几种方式，包含vue2.7
## 版本
本文版本配置 vue: 2.7.2 vue-cli: ~4.5.18；
[github仓库地址]()
## render函数
render函数和vue中的template是互斥的，template最终是要编译成virtual Dom的，而render函数可以更直接构建virtual Dom；
virtual Dom由树状的vnode构成，h函数可以构建vnode
>vue templates are compiled into virtual DOM render functions. vue also provides APIs that allow us to skip the template compilation step and directly author render functions

>If both render and template are present in a component, render will take higher priority.

如果render和template同时出现，render会有更高的权限（vue2不太一样，下面会说）。

这些在文档中有更直接的说明[vue3 render函数](https://vuejs.org/guide/extras/render-function.html)

## jsx/tsx
jsx类似于h函数，都是更直接使用javascript来构建DOM，需要注意的是jsx语法需要去编译处理，有的脚手架可能有预先配置，有的没有。

在typescript下需要编写tsx

## 使用jsx的几种方式
### 使用js对象注册component
>When not using a build step, a Vue component can be >defined as a plain JavaScript object containing >Vue-specific options:
>
>vue组件也可以直接使用普通的js对象来注册
```
// 定义一个js文件，导出组件对象
// componentObject.js
export default {
  data() {
      return {
          msg: 'hello'
      }
  },
  created() {
      setTimeout(() => {
          this.msg = 'hello world'
      }, 1000);
  },
  render() {
      return <h1>{this.msg}</h1>
  }
}
```
```
<script>
import componentObject from './../components/componentObject.js'

export default {
  components: {
    jsxComponent
  }
};
</script>
```
### 使用.vue文件
这里如果template和render函数如果同时指定的话，会用template覆盖掉render,显然是template优先级更高，跟文档上的render优先级更高不一样
```
// sfcJsx.vue
<!-- <template>
  <div>test</div>
</template> -->
<script>
  export default {
    data() {
      return {
        msg: 'i am sfc jsx'
      }
    },
    created() {
        setTimeout(() => {
            this.msg = 'i am sfc jsxxxx'
        }, 1000);
    },
    render() {
        return <h1>{this.msg}</h1>
    }
  }
</script>
```
### vue2.7在.vue文件中结合compositionApi和jsx
在setup里写jsx需要配置babel preset,具体参考[文档](https://github.com/vuejs/jsx-vue2/releases/tag/v1.3.0#fn-1)
我用的vue-cli v4,配置如下
```
// babel.config.js
module.exports = {
  presets: [
    [
      "@vue/cli-plugin-babel/preset",
      {
        jsx: {
          compositionAPI: true,
        },
      },
    ],
  ],
};
```
```
// sfcJsx.vue
<script>
import { ref, onMounted } from "vue";
export default {
  setup() {
    const count = ref(0);
    const refH1 = ref(null);
    onMounted(() => {
      console.log(refH1.value);
      refH1.value.value = "hello world";
    });
    setTimeout(() => {
      count.value = 12;
    }, 1000);
    return () => (
      <div>
        <h1>{count ? <span>11</span> : <span>22</span>}</h1>
        <input ref={refH1} type="text"></input>
      </div>
    );
  }
};
</script>
```
不过文档也提到了，可能会有不安全隐患。有遇到问题的，可以留言交流
> This feature is opt-in, because there are subtle differences between the global h function and this.$createElement1, which may affect some legacy codebases.
It's safe to use it in new projects, though.


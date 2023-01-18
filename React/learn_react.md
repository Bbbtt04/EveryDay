# React

## JSX

特点：

1. 定义VDOM时，不能用引号
2. 标签中JS**表达式**用`{}`
3. 样式的类名不能用`class`，要用`className`
4. 内联样式，要用`style={{color:"white"}}`
5. 只有一个根标签
6. 组件标签首字母需要大写

## 函数式组件

1. 首字母大写
2. `ReactDOM.render(<MyComponent>,root)`

## 受控组件和非受控组件

非受控组件：没被`react`管理的组件

受控组件：

![image-20230116175704080](C:\Users\23937\AppData\Roaming\Typora\typora-user-images\image-20230116175704080.png)

## 父子间通信

### 父传子

#### 1.props

![image-20230116180724010](C:\Users\23937\AppData\Roaming\Typora\typora-user-images\image-20230116180724010.png)

![image-20230116180738159](C:\Users\23937\AppData\Roaming\Typora\typora-user-images\image-20230116180738159.png)



### 子传父

#### 1.回调函数

```js
// Child
import React, { PureComponent } from 'react'

export class Child extends PureComponent {
  constructor(props) {
    super()
    this.state = {
      msg: "我是子组件"
    }
  }

  render() {
    return (
      <div>
        <button onClick={() => this.props.fatherFun(this.state.msg)}>传！</button>
      </div>
    )
  }
}

export default Child

// Father
import React, { PureComponent } from 'react'
import Child from './Child'

export class Father extends PureComponent {
  render() {
    return (
      <div>
        <Child fatherFun={(msg) => this.fatherFun(msg)}></Child>
      </div>
    )
  }

  fatherFun(msg) {
    console.log("子组件传过来的信息：" + msg);
  }
}

export default Father
```

## PureComponent

作用：当组建的`props和state`没有改变时，`render`函数不会再次触发，省去了VDOM和DOM的对比更新，性能提升

## 在React如何编写CSS样式？

`npm i craco@alpha`

`npm i craco-less`

配置



![image-20230116211200530](C:\Users\23937\AppData\Roaming\Typora\typora-user-images\image-20230116211200530.png)

### styled-components


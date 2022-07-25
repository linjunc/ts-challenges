# TS 类型挑战

## Hello World

在这个挑战中，你需要修改下方的代码使得测试通过（使其没有类型错误）。
```ts
// 期望是一个 string 类型
type HelloWorld = any
```

```ts
// 你需要使得如下这行不会抛出异常
type test = Expect<Equal<HelloWorld, string>>
```

```ts
type HelloWorld = string
```
---
简单
## 实现 Pick

从类型 T 中选择出属性 K，构造成一个新的类型。
例如
```ts
interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}
```

```ts

```
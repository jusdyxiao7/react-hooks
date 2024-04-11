# 个人笔记

## 环境搭建

```
npx create-react-app react-hooks
cd react-hooks
npm start
```

访问 `http://localhost:3000/` 即可 看到 启动画面


## 使用useStateHook



## 安装 axios

调用 dog.api 获取小狗图片

https://dog.ceo/dog-api/


```
npm install axios --save
```


## 使用hooks函数处理


调用 thecatapi 获取小猫的图片

https://thecatapi.com/

查询api

https://developers.thecatapi.com/

```
https://api.thecatapi.com/v1/images/search?limit=10&category_ids=1,2,5
```

## Hook规则

只在最顶层使用Hook

只在React函数中使用Hook

[React官方说明](https://react.dev/reference/rules/rules-of-hooks)


> Rules of Hooks
> Hooks are defined using JavaScript functions, but they represent a special type of reusable UI logic with restrictions on where they can be called.
> 
> Only call Hooks at the top level
> Only call Hooks from React functions

参考不同的 hooks

https://usehooks.com/

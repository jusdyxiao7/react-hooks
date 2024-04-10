import React, { useState, useEffect } from 'react'

const LikeButton = () => {
    // useState(0) 表示 初始值 为 0 
    // 返回的是一个数组，两个分别代表：当前值和更新函数
    // 定义一个 stat 变量 like

    // 一般函数退出退出时候，变量会消失；state 的值却是会被保留的

    // 分别调用，互不相干
    const [like, setLike] = useState(0)
    const [on, setOn] = useState(true)

    // useEffect不需要清除的 Effect
    // 第一次渲染和每次更新的时候都会执行
    useEffect(() => {
        document.title = `点击了${like}次`
    })

    // 所有state同时调用
    // const [obj, setObj] = useState({ like: 0, on: true })
    // <button onClick={() => setObj({ like: obj.like + 1, on: obj.on })}>
    //     {obj.like} 赞~
    // </button>
    // <button onClick={() => setObj({ on: !obj.on, like: obj.like })}>
    //     {obj.on ? 'On' : 'Off'}
    // </button>

    // 两种方式均可，在于取舍和平衡，适度组合state让组件更加可读，便于后续的复用
    return (
        // <></> 表示 react的空节点
        <>
            <button onClick={() => setLike(like + 1)}>
                {like} 赞~
            </button>
            <button onClick={() => setOn(!on)}>
                {on ? 'On' : 'Off'}
            </button>
        </>
    )
}

export default LikeButton
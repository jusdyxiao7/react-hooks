import React, { useState, useEffect } from 'react'

const MouseTracker = () => {
    const [positions, setPositions] = useState({ x: 0, y: 0 })
    // 错误示例
    // 副作用未清除
    // 执行一遍又一遍回调函数
    // useEffect(() => {
    //     const updateMouse = (event) => {
    //         console.log('inner')
    //         setPositions({ x: event.clientX, y: event.clientY })
    //     }
    //     document.addEventListener('click', updateMouse)
    // })

    // 副作用清除
    useEffect(() => {
        const updateMouse = (event) => {
            console.log('inner')
            setPositions({ x: event.clientX, y: event.clientY })
        }
        console.log('add listener')
        document.addEventListener('click', updateMouse)
        return () => {
            console.log('remove listener')
            document.removeEventListener('click', updateMouse)
        }
    })
    return (
        <p>
            X: {positions.x}，Y: {positions.y}
        </p>
    )
}

export default MouseTracker
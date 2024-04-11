import React, { useState, useEffect } from 'react'
import axios from 'axios'

const DogShow = () => {
    const [url, setUrl] = useState('')
    const [loading, setLoading] = useState(false)
    const [fetch, setFetch] = useState(false)
    const style = {
        width: 200
    }
    // 错误写法 - 无限循环，无限调用
    // useEffect(() => {
    //     setLoading(true)
    //     axios.get('https://dog.ceo/api/breeds/image/random').then(result => {
    //         console.log(result)
    //         setUrl(result.data.message)
    //         setLoading(false)
    //     })
    // })



    // 可控effect，只执行一次
    // useEffect(() => {
    //     setLoading(true)
    //     axios.get('https://dog.ceo/api/breeds/image/random').then(result => {
    //         console.log(result)
    //         setUrl(result.data.message)
    //         setLoading(false)
    //     })
    // }, [])



    // 可控effect，根据fetch变化而变化
    useEffect(() => {
        setLoading(true)
        axios.get('https://dog.ceo/api/breeds/image/random').then(result => {
            console.log(result)
            setUrl(result.data.message)
            setLoading(false)
        })
    }, [fetch])
    return (
        <>
            {loading ? <p>Dog读取中</p>
                : <img src={url} alt='dog' style={style}></img>}
            <button onClick={() => {setFetch(!fetch)}}>再看一张图片</button>
        </>
    )
}

export default DogShow

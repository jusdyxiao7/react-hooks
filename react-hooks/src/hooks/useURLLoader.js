/**
 * @作者 Conor Sun
 * @开源仓库 $ https://github.com/jusdyxiao7
 * @创建时间 2024/4/11 星期四 下午 14:00
 */
import React, { useState, useEffect } from "react";
import axios from 'axios'

const useURLLoader = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    axios.get(url).then(result => {
      // console.log(result)
      setData(result.data)
      setLoading(false)
    })
  }, [url]);
  // 希望外界拿到什么东西，就都放在这个数组中即可
  return [data, loading]
}

export default useURLLoader



import Report, {useState, useEffect} from 'react';

// 抽离出单独的hook函数，方便后续复用
const useMousePosition = (element) => {
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
  useEffect(() => {
    const updateMouse = (event) => {
      setMousePosition({x: event.clientX, y: event.clientY})
    }
    document.addEventListener('mousemove', updateMouse)
    return () => {
      document.removeEventListener('mousemove', updateMouse)
    }
  })
  return mousePosition
}

export default useMousePosition

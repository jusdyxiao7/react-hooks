import logo from './logo.svg';
import './App.css';
import LikeButton from './components/LikeButton';
import MouseTracker from './components/MouseTracker';
import DogShow from './components/DogShow';
import useMousePosition from './hooks/useMousePosition';
import useURLLoader from "./hooks/useURLLoader";
import {useState} from "react";


// 简单的样式，正常是要独立在单独的样式表文件中的
const style = {
  width: 200
}

// 使用hook函数，构建高阶组件的用法
const DogShowWithHook = () => {
  const [data, loading] = useURLLoader('https://dog.ceo/api/breeds/image/random')
  // console.log(data)
  // console.log(loading)
  return (
    <>
      {loading ? <p>Dog读取中</p>
        : <img src={data && data.message} alt='dog' style={style}></img>}
    </>
  )
}

// 另一个hook函数
// https://thecatapi.com/
const CatShowWithHook = () => {
  const [category, setCategory] = useState('1');
  const [data, loading] = useURLLoader(`https://api.thecatapi.com/v1/images/search?limit=10&category_ids=${category}`)
  console.log(data)
  console.log(loading)
  return (
    <>
      {loading ? <p>Cat读取中</p>
        : <img src={data && data[0].url} alt='dog' style={style}></img>}
      <button onClick={() => setCategory('1')}>帽子</button>
      <button onClick={() => setCategory('5')}>盒子</button>
    </>
  )
}

function App() {
  // 使用hook函数，声明后直接引用使用即可
  const position = useMousePosition()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1>{position.x}</h1>
        <DogShowWithHook/>
        <CatShowWithHook/>
        {/*<DogShow></DogShow>*/}
        <MouseTracker></MouseTracker>
        <LikeButton></LikeButton>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

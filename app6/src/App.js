// useEffect는 어떤 값이 변경될 때마다 특정 코드를 실행하는 이벤트 훅이다.
// useEffect를 이용하면 컴포넌트의 State 값이 바뀔때마다 변경된 값을 콘솔에 출력할 수 있다.
import { useState, useEffect } from "react";
import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";

function App() {
  const [count, setCount] = useState(0);
  const handleSetCount = (value) => {
    setCount(count + value);
  };

  // useEffect 함수는 2개의 인수를 전달받는다.
  // 첫번째 인수는 콜백 함수다. 두번째 인수는 배열이다.
  // 두번째 인수로 전달한 배열을 의존성 배열(Dependency Array)이라고 한다.
  // useEffect 함수는 이 배열 요소의 값이 변경되면 첫번째 인수로 전달받은 콜백함수를 실행한다. 
  useEffect(() => {
    console.log("count 값 변경", count);
  }, [count]);

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count}/>
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} />
      </section>
    </div>
  );
}

export default App;

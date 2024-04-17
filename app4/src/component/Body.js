// Ref를 이용하면 HTML DOM 요소를 직접 조작할 수 있다.
// 리액트에서는 useRef라는 리액트 함수를 이용해 Ref 객체를 생성한다.
import { useState, useRef } from "react";

function Body() {
    const [text, setText] = useState("");
    // useRef함수를 실행해서 Ref 객체 생성하기
    const textRef = useRef()

    const handleOnChange = (e) => {
        setText(e.target.value);
    }
    const handleOnClick = () => {
        alert(text)
    }
    const handleOnClick2 = () => {
        textRef.current.value = "";
    }

    return (
        <div>
            <div>
                <label>텍스트</label><br />
                <input type="text" ref={textRef} value={text} onChange={handleOnChange}/>
            </div>

            <button onClick={handleOnClick}>경고창 표시</button>
            <button onClick={handleOnClick2}>입력창 초기화</button>
        </div>
    );
}

export default Body;
// 부모 컴포넌트의 State 값을 Props로 자식 컴포넌트로 전달하기
import { useState } from "react";

// 자식 컴포넌트에서 Props로 전달받은 값이 변경되면 자식 컴포넌트도 다시 랜더링된다.
function Viewer({count}) {
    return (
        <div>
            카운트 갯수 : { count }
        </div>
    );
}

function Body() {
    const [number, setNumber] = useState(0);
    const onIncrease = () => setNumber(number + 1);
    const onDecrease = () => setNumber(number -1);

    return (
        <div>
            <h1>State와 자식 컴포넌트</h1>
            
            <div>
                <Viewer count={number} />
                <button onClick={onDecrease}>-</button>
                <button onClick={onIncrease}>+</button>
            </div>
        </div>
    );
}
export default Body;
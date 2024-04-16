// props로 부모 컴포넌트로부터 값 전달받기
// function Body(props) {
//     const {name, location} = props;
//     return (
//         <div>
//             {props.name}님은 {props.location}에 살고 있습니다.
//         </div>
//     );
// }
// export default Body;

// 구조분해할당으로 여러 개의 값 사용하기
// function Body(props) {
//     // props객체의 값을 구조분해할당으로 name과 location에 대입한다.
//     const {name, location} = props;
//     return (
//         <div>
//             {name}님은 {location}에 살고 있습니다.
//         </div>
//     );
// }
// export default Body;

// 구조분해할당으로 여러 개의 값 사용하기
// function Body({name, location, favorites}) {
//     return (
//         <div>
//             <p>{name}님은 {location}에 살고 있습니다.</p>
//             <p>{name}님은 {favorites.length}개의 과일을 좋아합니다.</p>
//         </div>
//     );
// }
// export default Body;

// Props로 전달받은 값에 대해서 기본값을 미리 설정하기
// function Body({name, location, favorites}) {
//     return (
//         <div>
//             <p>{name}님은 {location}에 살고 있습니다.</p>
//             <p>{name}님은 {favorites.length}개의 과일을 좋아합니다.</p>
//         </div>
//     );
// }

// // defaultProps를 사용하면 컴포넌트가 전달받을 Props의 기본값을 미리 설정할 수 있다.
// Body.defaultProps = {
//     favorites: []
// }
// export default Body;

// 이벤트 처리하기
// function Body({name, location, favorites}) {
//     function handleOnClick(e) {
//         console.log(e.target.name)
//     }

//     return (
//         <div>
//             <p>{name}님은 {location}에 살고 있습니다.</p>
//             <p>{name}님은 {favorites.length}개의 과일을 좋아합니다.</p>
//             <button name="btn1" onClick={handleOnClick}>버튼1</button>
//             <button name="btn2" onClick={handleOnClick}>버튼2</button>
//         </div>
//     );
// }

// Body.defaultProps = {
//     favorites: []
// }
// export default Body;

// State로 컴포넌트의 상태관리
// 리액트에서는 useState 함수로 State를 생성한다.
import { useState } from "react";

function Body({name, location, favorites}) {
    // useState함수로 State 생성하기
    // useState의 용법
    // const[count,     setCount] = useState(0)
    //       |          |            |
    //       State변수  setter함수   생성자(초기값)
    // useState 함수를 호출하면 2개의 요소가 담긴 배열을 반환한다.
    // 배열의 첫번째 요소 count는 현재 상태의 값을 저장하고 있는 변수다.
    // 배열의 두번째 요소 setCount는 State 변수의 값을 변경하는 setter 함수다.
    const [count, setCount] = useState(0);

    function handleOnClick(e) {
        console.log(e.target.name)
    }

    function onIncrease() {
        setCount(count + 1);
    }

    return (
        <div>
            <p>{name}님은 {location}에 살고 있습니다.</p>
            <p>{name}님은 {favorites.length}개의 과일을 좋아합니다.</p>
            
            <button name="btn1" onClick={handleOnClick}>버튼1</button>
            <button name="btn2" onClick={handleOnClick}>버튼2</button>
            
            <p>카운트 { count }</p>
            <button onClick={onIncrease}>카운트증가 버튼</button>
        </div>
    );
}

Body.defaultProps = {
    favorites: []
}
export default Body;


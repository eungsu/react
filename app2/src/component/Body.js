// import { useState } from "react";

// function Body() {
//     const[text, setText] = useState('');

//     function handleOnChange(e) {
//         setText(e.target.value);
//     }

//     return (
//         <div>
//             <h1>State로 사용자 입력 관리하기</h1>
//             <div>
//                 <input value={text} onChange={handleOnChange} />
//                 <p>{ text }</p>
//             </div>
//         </div>
//     );
// }
// export default Body;

// 여러 개의 사용자 입력 관리하기
// 사용자로부터 여러 입력정보를 받아 State로 처리하는 경우, 관리할 State의 갯수가 많아진다.
// 객체 자료형을 이용하면 입력 내용이 여러 가지라도 하나의 State에서 관리할 수 있다.
import { useState } from "react";
function Body() {
    const [user, setUser] = useState({
        name: "",
        gender: "",
        birth: "",
        bio: ""
    });

    const handleOnChange = (e) => {
        console.log("현재 수정 대상:", e.target.name);
        console.log("현재 입력값:", e.target.value);

        // 스프레드 연산자를 이용해서 기존 객체의 값을 나열한다.
        // 객체의 괄호 표기법을 사용해서 입력폼의 name 속성을 key로 입력폼에 입력한 값을 value로 저장한다.
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <h1>State로 사용자 입력 관리하기</h1>
            <div>
                <div>
                    <label>이름</label><br />
                    <input type="text" name="name" value={user.name} onChange={handleOnChange} />
                </div>
                <div>
                    <label>성별</label><br />
                    <select name="gender" value={user.gender} onChange={handleOnChange} >
                        <option key={""}> 선택하세요</option>
                        <option key={"female"}> 여성</option>
                        <option key={"male"}> 남성</option>
                    </select>
                </div>
                <div>
                    <label>생일</label><br />
                    <input type="date" name="birth" value={user.birth} onChange={handleOnChange} />
                </div>
                <div>
                    <label>소개</label><br />
                    <textarea name="bio" value={user.bio} onChange={handleOnChange} />
                </div>
            </div>
        </div>
    );
}
export default Body;
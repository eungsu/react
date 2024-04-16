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
function Body({name, location}) {
    return (
        <div>
            {name}님은 {location}에 살고 있습니다.
        </div>
    );
}
export default Body;
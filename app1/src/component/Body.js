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
function Body({name, location, favorites}) {
    return (
        <div>
            <p>{name}님은 {location}에 살고 있습니다.</p>
            <p>{name}님은 {favorites.length}개의 과일을 좋아합니다.</p>
        </div>
    );
}

// defaultProps를 사용하면 컴포넌트가 전달받을 Props의 기본값을 미리 설정할 수 있다.
Body.defaultProps = {
    favorites: []
}
export default Body;
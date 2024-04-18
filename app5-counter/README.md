# 카운터 앱 

## 요구사항 분석하기
- 첫번째 영역에는 현재의 카운트를 표시한다.
- 두번째 영역에는 카운트를 증가/감소시키는 버튼이 있다.

## 컴포넌트 단위로 생각하기
- App 컴포넌트
  + Viewer와 Controller 컴포넌트를 감싸는 템플릿이다.
- Viewer 컴포넌트
  + 현재 카운트를 표시하는 컴포넌트다.
- Controller 컴포넌트
  + 카운트를 제어할 수 있는 기능을 제공하는 컴포넌트다.

## 기능 구현하기
### State를 이용해 카운터 기능 구현하기
- App 컴포넌트
  + useState함수로 현재 카운트를 관리하는 State를 생성한다.
  + State의 count값을 변경하는 handleSetCount 함수를 생성한다.
  + Viewer 컴포넌트에 State 변수 count의 값을 Props로 전달한다.
  + Controller 컴포넌트에 State 값을 변경하는 handleSetCount 함수를 Props로 전달한다.
- Viewer 컴포넌트
  + App 컴포넌트에서 받은 Props를 페이지에 렌더링한다.
  + Props로 받은 State 값이 변결될 때마다 새로 렌더링된다.
- Controller 컴포넌트
  + App 컴포넌트에서 함수 handleSetCount를 Props로 전달받는다.
  + 버튼에서 클릭 이벤트 발생시 실행할 이벤트 핸들러 함수 handleOnClick 함수를 정의한다.
  + 버튼을 클릭하면 handleOnClick 함수가 실행되고, handSetCount 함수를 호출해서 App 컴포넌트의 State 값을 변경한다.
  
## 리액트의 데이터, 이벤트 전달
- 리액트에서 컴포넌트 간에 데이터를 전달할 때는 Props를 사용한다.
- 데이터 전달 방향은 항상 부모 컴포넌트에서 자식 컴포넌트에게 전달하는 방식이다.
- 리액트의 데이터 전달 특징은 "단방향 데이터 흐름"이다.
- 부모 컴포넌트의 State를 변경하는 이벤트는 자식 컴포넌트에서 부모 컴포넌트로 전달된다.
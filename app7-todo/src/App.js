import "./App.css";
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";

import { useState, useRef } from "react";

function App() {
  const idRef = useRef(3);
  const mockTodos = [
    {
      id: 0,
      isDone: false,
      content: "React 공부하기",
      createDate: new Date()
    },
    {
      id: 1,
      isDone: false,
      content: "프로젝트 주제 정하기",
      createDate: new Date()
    },
    {
      id: 2,
      isDone: false,
      content: "화면 디자인하기",
      createDate: new Date()
    },
  ]
  const [todos, setTodos] = useState(mockTodos);
  
  const onCreate = (content) => {
    const newItem = {
      id: idRef.current,
      content,
      isDone: false,
      createDate: new Date()
    };
    setTodos([newItem, ...todos]);
    idRef.current += 1;
  };

  const onUpdate = (todoId) => {
    setTodos(todos.map(todo => todo.id === todoId ? {...todo, isDone:!todo.isDone} : todo))
  };

  const onDelete = (todoId) => {
    setTodos(todos.filter(todo => todo.id != todoId));
  };

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate}/>
      <TodoList todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  );
}

export default App;

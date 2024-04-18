import { useState } from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onUpdate, onDelete }) => {
    const [keyword, setKeyword] = useState("");
    const onChangeSearch = (e) => {
        setKeyword(e.target.value);
    };
    const getSearchResult = () => {
        return keyword === "" 
            ? todos 
            : todos.filter((todo) => todo.content.toLowerCase().includes(keyword.toLowerCase()));
    };
    return (
        <div className="TodoList">
            <h4>Todo List</h4>
            <input value={keyword} 
                onChange={onChangeSearch}
                className="searchbar" 
                placeholder="검색어를 입력하세요" />

            <div className="list_wrapper">
                {getSearchResult().map(todo => (
                    <TodoItem {...todo} key={todo.id} 
                        onUpdate={onUpdate} 
                        onDelete={onDelete} />
                ))}
            </div>
        </div>
    )
}
export default TodoList;
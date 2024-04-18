import "./TodoEditor.css";
import { useState, useRef } from "react";

const TodoEditor = ({ onCreate }) => {
    const [content, setContent] = useState("");
    const contentRef = useRef()

    const onChangeContent = (e) => {
        setContent(e.target.value);
    }
    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            onSubmit();
        }
    }
    const onSubmit = () => {
        if (!content) {
            alert("할 일을 입력하세요.");
            contentRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("");
    }

    return (
        <div className="TodoEditor">
            <h4>새로운 Todo 작성하기</h4>
            <div className="editor_wrapper">
                <input type="text" 
                    ref={contentRef} 
                    value={content} 
                    onChange={onChangeContent} 
                    onKeyDown={onKeyDown}
                    placeholder="새로운 Todo..." />
                <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    );
}
export default TodoEditor;
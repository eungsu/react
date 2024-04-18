import moment from "moment/dist/moment.js";
import "moment/dist/locale/ko.js";

import "./TodoItem.css";

const TodoItem = ({ id, content, idDone, createDate, onUpdate, onDelete }) => {
    const onChangeChecked = () => {
        onUpdate(id);
    };

    const onClickDelete = () => {
        onDelete(id);
    };

    return (
        <div className="TodoItem">
            <div className="checkbox_col">
                <input type="checkbox" checked={idDone}
                    onChange={onChangeChecked}/>
            </div>
            <div className="title_col">{content}</div>
            <div className="date_col">{moment(createDate.getTime()).format("YYYY년 M월 D일 dddd")}</div>
            <div className="btn_col">
                <button onClick={onClickDelete}>삭제</button>
            </div>
        </div>
    );
}
export default TodoItem;
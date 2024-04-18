import "./Header.css";
import moment from "moment/dist/moment.js";
import "moment/dist/locale/ko.js";

const Header = () => {
    return (
        <div className="Header">
            <h3 className="card-title">오늘</h3>
            <h1>{ moment().format("YYYY년 M월 d일 dddd") }</h1>
        </div>
    );
};
export default Header;
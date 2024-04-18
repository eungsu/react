const Controller = ({handleSetCount}) => {
    const handleOnClick = (e) => {
        let num = parseInt(e.target.getAttribute("data-num"));
        handleSetCount(num);
    };

    return (
        <div>
            <button onClick={handleOnClick} data-num="-1">-1</button>
            <button onClick={handleOnClick} data-num="-10">-10</button>
            <button onClick={handleOnClick} data-num="-100">-100</button>
            <button onClick={handleOnClick} data-num="100">+100</button>
            <button onClick={handleOnClick} data-num="10">+10</button>
            <button onClick={handleOnClick} data-num="1">+1</button>
        </div>
    );
}
export default Controller;
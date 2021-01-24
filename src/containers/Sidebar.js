import React from "react";
import ToRead from "../components/ToRead";
import CurrentlyReading from "../components/CurrentlyReading";

const Sidebar = ({ toRead, current, finished, setToRead, setCurrent, setFinished }) => {

    return (
        <div>
            <ToRead 
                list={toRead} 
                setList={setToRead}
                current={current}
                setCurrent={setCurrent}
            />
            <CurrentlyReading
                list={current}
                setList={setCurrent}
                finished={finished}
                setFinished={setFinished}
            />
            {/* <DoneReading/> */}
        </div>
    )
}

export default Sidebar
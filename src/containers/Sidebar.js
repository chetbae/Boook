import React from "react";
import { ToRead } from "../components/ToRead";

const Sidebar = ({ toRead, current, finished, setToRead, setCurrent, setFinished }) => {

    return (
        <div>
            <ToRead 
                list={toRead} 
                setList={setToRead}
                current={current}
                setCurrent={setCurrent}
            />

            {/* <DoneReading/> */}
        </div>
    )
}

export default Sidebar
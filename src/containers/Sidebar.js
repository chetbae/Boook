import React from "react";
import ToRead from "../components/ToRead";
import CurrentlyReading from "../components/CurrentlyReading";
import DoneReading from "../components/DoneReading";
import { sidebarBlock } from "../styles/Sidebar"


const Sidebar = ({ toRead, current, finished, setToRead, setCurrent, setFinished }) => {

    return (
        <div style={sidebarBlock}>
        {/* <div> */}
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
            <DoneReading
                list={finished}
            />
        </div>
    )
}

export default Sidebar
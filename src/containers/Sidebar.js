import React from "react";
import ToRead from "../components/Sidebar/ToRead";
import CurrentlyReading from "../components/Sidebar/CurrentlyReading";
import DoneReading from "../components/Sidebar/DoneReading";
import { sidebarBlock } from "../styles/Sidebar"


const Sidebar = ({ toRead, current, finished, setToRead, setCurrent, setFinished }) => {

    return (
        <div style={sidebarBlock}>
            <br/><br/>
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
                toRead={toRead}
                setToRead={setToRead}
            />
            <DoneReading
                list={finished}
            />
            <br/><br/><br/><br/>
        </div>
    )
}

export default Sidebar
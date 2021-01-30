import React from 'react';
import Row from './CurrentlyReadingRow';
import { innerBlock, content } from '../styles/Sidebar';

const CurrentlyReading = ({ list, setList, finished, setFinished }) => {

    function removeItem(id) {
        const newList = list.filter((item) => (
            item.id === id ? false : true
        ));
        setList(newList);
    }

    function moveToFinished(item) {
        const newItem = { ...item, end:new Date() };
        const newFinishedList = finished.concat( newItem );
        setFinished(newFinishedList);
    }

    return(
        <div style={innerBlock}>
            <h1>Currently Reading:</h1>
            <div style={{...content, width:"17rem"}}>
            {list.map((item) => (
                        <Row 
                            id={item.id}
                            item={item} 
                            handleMove={moveToFinished}
                            handleRemove={removeItem}
                        />
                ))}
            
            </div>
            {/* <div style={{position: "relative", bottom: "0",s left:"12rem", opacity:0.24}}>finished reading? :P</div><br/> */}
        </div>
    );
}

export default CurrentlyReading;

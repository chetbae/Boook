import React from 'react';
import Row from './CurrentlyReadingRow';
import { innerBlock, content } from '../styles/Sidebar';

const CurrentlyReading = ({ list, setList, finished, setFinished, toRead, setToRead }) => {

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
        removeItem(item.id);
    }

    function moveToRead(item) {
        const newItem = { ...item, start: null };
        const newToReadList = toRead.concat( newItem );
        setToRead(newToReadList);
        removeItem(item.id);
    }

    return(
        <div style={innerBlock}>
            <h1>Currently Reading:</h1>
            <div style={{...content, width:"24rem", right:0}}>
            {list.map((item) => (
                        <Row 
                            id={item.id}
                            item={item} 
                            handleFinished={moveToFinished}
                            handleToRead={moveToRead}
                        />
                ))}
            
            </div>
        </div>
    );
}

export default CurrentlyReading;

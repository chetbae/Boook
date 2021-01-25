import React, { useState } from 'react';
import Row from './CurrentlyReadingRow';

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
        <div>
            <h1>Currently Reading:</h1>
            <ul style={{listStyleType:"none", padding:'20 20 0 0'}}>
                { list.map((item) => (
                    <li key={item.id}>
                        <Row 
                            item={item} 
                            handleMove={moveToFinished}
                            handleRemove={removeItem}
                        />
                    </li>
                ))}
            </ul>
            <p id="b" style={{position:'relative', left:'24%', opacity:0.24}}>finished reading? :P</p>
        </div>
    );
}

export default CurrentlyReading;
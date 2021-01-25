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
        <div style={{maxWidth:'280px'}}>
            <h1>Currently Reading:</h1>
            <ul style={{listStyleType:"none"}}>
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
            <div style={{padding: '0px 0px 0px 20%', opacity:0.24}}>finished reading? :P</div><br/>
        </div>
    );
}

export default CurrentlyReading;
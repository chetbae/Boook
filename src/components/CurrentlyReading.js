import React from 'react';
import Row from './CurrentlyReadingRow';

const CurrentlyReading = ({ list, setList, finished, setFinished }) => {

    function removeItem(id) {
        const newList = list.filter((item) => (
            item.id === id ? false : true
        ));
        setList(newList);
    }

    function moveToFinished(item) {
        let today = new Date();
        const newItem = { ...item, end:{today} };
        const newFinishedList = finished.concat( newItem );
        setFinished(newFinishedList);
    }

    return(
        <div>
            <h1>Currently Reading:</h1>
            <ul>
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
        </div>
    );
}

export default CurrentlyReading;
import React from 'react';

const CurrentlyReadingRow = ({ item, handleMove, handleRemove }) => {

    function handleMigrate() {
        handleMove(item);
        handleRemove(item.id);
    };

    return (
        <div>
            <button onClick={handleMigrate} >{item.name}</button>
        </div>
    );
}

export default CurrentlyReadingRow;
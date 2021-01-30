import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    font-size: 15px;
    border-width: 2px;
    border-color: black;
    background-color: white;
    padding: 2px 7px 2px 7px;
    transition: all 0.5s ease;
    margin: 0.5rem;
    &:hover {
        box-shadow: 5px 5px;
        margin: 5px;
    }

`



const CurrentlyReadingRow = ({ id, item, handleMove, handleRemove }) => {

    function handleMigrate() {
        handleMove(item);
        handleRemove(item.id);
    };

    return (
            <StyledButton id={id} onClick={handleMigrate} >{item.name}</StyledButton>
    );
}

export default CurrentlyReadingRow;
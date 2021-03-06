import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    font-size: 1rem;
    border-width: 2px;
    border-color: black;
    border-style:solid;
    background-color: white;
    padding: 0.25rem 0.4rem;
    transition: all 0.5s ease;
    margin: 0.5rem 0;
    max-width: 23rem;
    word-wrap: break-word;
    &:hover {
        box-shadow: 5px 5px;
    }
`

const StyledRemove = styled.button`
    font-size: 1rem;
    color: red;
    border-color: red;
    background-color: transparent;
    // border-width: 0.125rem 0 0.125rem 0.125rem;
    padding: 0.25rem 0.4rem;
    transition: all 0.5s ease;
    margin-right: -0.125rem;
    opacity: 0.05;
    &:hover {
        color: white;
        border-color: red;
        background-color: red;
        border-style: solid;
        opacity: 1;
    }
`


const CurrentlyReadingRow = ({ id, item, handleFinished, handleToRead }) => {

    function handleMoveToFinished() {
        handleFinished(item);
    };

    function handleMoveToRead() {
        handleToRead(item);
    }

    return (
        <div style={{textAlign:'right', paddingRight:'1rem'}}>
            <StyledRemove onClick={handleMoveToRead}>✕</StyledRemove>
            <StyledButton id={id} onClick={handleMoveToFinished} >{item.name}</StyledButton>
        </div>
    );
}

export default CurrentlyReadingRow;
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Row from './ToReadRow'
import { StyledButton } from '../styles/ToReadRow'

const buttoncss = {
    position: 'relative',
    display: 'inline',
    verticalAlign: 'middle',
    left: '25px'
}

const bulletStyle = {
    listStyleType:"none", 
    padding:'0px', 
    listStylePosition:'outside',
    marginLeft: '1em'
}

const ToRead = ({ list, setList, current, setCurrent }) => {

    function updateList(item, newName) {
        const newItem = { ...item, name:newName };
        const newList = list.map((element) => (
            element.id === item.id ? newItem : element
        ));
        setList(newList);
    }

    const AddButton = () => {
        function handleAdd() {
            //check if no-book exists
            if (list.length === 0);
            else if (list[list.length-1].name === 'Click Me!') return;
            //add new-book
            const blankItem = {
                name: 'Click Me!',
                id: uuidv4(),
                start: null,
                end: null
            }
            const newList = list.concat(blankItem)
            setList(newList)
            
        }

        return (
            <StyledButton type="button" onClick={handleAdd}>
                Add Book
            </StyledButton>
        )
    }

    function handleRemove(id) {
        const newList = list.filter((element) => (
            element.id === id ? false : true
        ))
        setList(newList)
    }

    // helper for moving toread book to currentlyreading; starts the date as time clicked
    function moveToCurrent(item) {
        let today = new Date();
        const newList = current.concat({
            ...item,
            start: {today}
        })
        setCurrent(newList)
    }


    return (
        <div>
            <h1 style={{display: 'inline-block', verticalAlign:'middle'}}>To-Read:</h1>
            <p style={buttoncss}><AddButton/></p>
                <div className='toRead'>
                <ul style={bulletStyle} >
                    { list.map((item) => (
                            <li key={item.id}>
                                <Row 
                                    item={item} 
                                    onMigrate={moveToCurrent}
                                    onRemove={handleRemove}
                                    onUpdate={updateList}
                                />
                            </li>
                    ))}
                </ul>
                </div>
        </div>
    )
}

export default ToRead;
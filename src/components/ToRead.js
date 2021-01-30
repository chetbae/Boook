import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import Row from './ToReadRow'
import { StyledButton, StyledUl, innerBlock, content, toReadH1, toReadHeader } from '../styles/Sidebar'

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
            else if (list[list.length-1].name === 'Edit Me!') return;

            //add new-book
            const blankItem = {
                name: 'Edit Me!',
                id: uuidv4(),
                start: null,
                end: null
            }
            const newList = list.concat(blankItem)
            setList(newList)
            
        }

        return (
            <StyledButton onClick={handleAdd}>
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
        <div style={innerBlock}>
            <h1 style={toReadH1}>To-Read:</h1>      
            <p style={toReadHeader}><AddButton/></p>
            <div style={{...content, overflow: "scroll", maxHeight: "26vh"}}>
                <StyledUl>
                    {list.map((item) => (
                        <li key={item.id}>
                            <Row 
                                item={item} 
                                onMigrate={moveToCurrent}
                                onRemove={handleRemove}
                                onUpdate={updateList}
                            />
                        </li>
                    ))}
                </StyledUl>
            </div>
        </div>
        </div>
    )
}

export default ToRead;
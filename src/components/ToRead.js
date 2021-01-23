import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import Row from './Row'


export const ToRead = ({ list, setList, current, setCurrent }) => {

    const AddButton = () => {
        function handleAdd() {
            const blankItem = {
                name: '',
                id: uuidv4(),
                start: null,
                end: null
            }
            const newList = list.concat(blankItem)
            setList(newList)

        }

        return (
            <button type="button" onClick={handleAdd}>
                Add Book
            </button>
        )
    }

    function updateList(item, newName) {
        const newItem = { ...item, name:newName };
        const newList = list.map((element) => (
            element.id === item.id ? newItem : element
        ));
        setList(newList);
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
            <h1>To-Read:</h1>
            <AddButton/>
            <ul>
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
            <br/>
        </div>
    )
}
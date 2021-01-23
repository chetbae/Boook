import React, { useState } from 'react'

const ReadRow = ({ item, onMigrate, onRemove, onUpdate }) => {
    const [title, setTitle] = useState(item.name)

    function handleChange(e) {
        setTitle(e.target.value)
    }

    function handleBlur(e) {
        if (e.target.value === '') onRemove(item.id);
        else onUpdate(item, e.target.value);
    }

    function handleEnter(e) {
        if (e.key === 'Enter') onUpdate(item, e.target.value);
    }

    function handleRemove() {
        onRemove(item.id);
    }

    function handleMigrate() {
        onMigrate(item);
        onRemove(item.id);
    }

    return (
        <div>
            <button onClick={handleRemove} />
            <input type='text' value={title} autoFocus
                onChange={handleChange} 
                onBlur={handleBlur}
                onKeyDown={handleEnter} 
            />
            <button onClick={handleMigrate} />
        </div>
    )
}

export default ReadRow;
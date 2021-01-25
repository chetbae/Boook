import { RemoveButton, MoveButton } from "../styles/ToReadRow";
import styled from 'styled-components';

const ReadRow = ({ item, onMigrate, onRemove, onUpdate }) => {

    function handleBlur() {
        let field = document.getElementById(item.id).textContent;
        if (field === 'Click Me!' || field === '') onRemove(item.id);
        else onUpdate(item, field);
    }

    // function handleEnter(e) {
    //     if (e.key === 'Enter') onUpdate(item, e.target.value);
    // }

    function handleRemove() {
        onRemove(item.id);
    }

    function handleMigrate() {
        onMigrate(item);
        onRemove(item.id);
    }

    function textGenerator() {
        let num = Math.floor(Math.random() * 11);
        let phrase;
        if (num < 6) 
            phrase = 'start reading?';
        else if (num >= 6 && num < 8) 
            phrase = 'u know u wanna :^)';
        else if (num >= 8)
            phrase = 'read me!'
        return phrase;
    }

    return (
        <div>
            <RemoveButton onClick={handleRemove}/>
            <span id={item.id}
                    contentEditable
                    onBlur={handleBlur}
                    style={{outline: 'none'}}
                >{item.name}</span>
                
                <MoveButton onClick={handleMigrate} >{textGenerator()}</MoveButton>
        </div>
    )
}

export default ReadRow;
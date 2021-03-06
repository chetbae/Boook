import { RemoveButton, MoveButton } from "../../styles/Sidebar";

const ReadRow = ({ item, onMigrate, onRemove, onUpdate }) => {

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

    function handleFocus() {
        if (item.name === "Edit Me!") {
            let range = document.createRange();
            range.selectNodeContents(document.getElementById(item.id));
            let sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
        }
    }

    function handleBlur() {
        let field = document.getElementById(item.id).textContent;
        if (field === 'Edit Me!' || field === '') onRemove(item.id);
        else onUpdate(item, field);
    }

    function keyPress(e) {
        if(e.charCode === 13) {
            let field = document.getElementById(item.id).textContent;
            onUpdate(item, field);
            e.preventDefault();
            document.activeElement.blur();
        }
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
            <RemoveButton onClick={handleRemove}/>
            <span id={item.id}
                    contentEditable
                    onClick={handleFocus}
                    onBlur={handleBlur}
                    onKeyPress={keyPress}
                    style={{outline: 'none',spellcheck:"false"}}
                >{item.name}</span>
                
                <MoveButton onClick={handleMigrate} >{textGenerator()}</MoveButton>
        </div>
    )
}

export default ReadRow;
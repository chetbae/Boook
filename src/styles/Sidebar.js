import styled from 'styled-components';

export const StyledButton = styled.button`
    width: 120px;
    height: 45px;
    color: black;
    font-size: 15px;
    font-weight: bold;
    border-width: 3px;
    border-color: black;
    background-color: white;
    display: table-cell;
    vertical-align: middle;
    transition: all 0.2s linear;
    position:fixed;
    right:3rem;
    top:2rem;

    &:hover {
        color: white;
        background-color: black;
    }
`

export const StyledUl = styled.ul`
    list-style-type: none; 
    padding:0px; 
    margin-left: 1em;
`

export const RemoveButton = styled.button`
    position: relative;
    border: none;
    padding: 0px 15px 0px 0px;
    background: none;
    width: 30px;
    cursor: pointer;
    margin: 4px;
    font-size: 21px;
    background-clip:content-box;


    &::before {
        content: "•";
    }

    &:hover {
        &::before {
            content: "✕";
        }
    }
`

export const MoveButton = styled.button`
    color: white;
    border: none;
    background-color: black;
    vertical-align: middle;
    transition: all 0.5s linear;
    opacity: 0;

    &:hover {
        opacity: 1;
    }
`

// Positioning

// Sidebar block
export const sidebarBlock = {
    height: '100vh',
    overflow: "scroll",
    paddingRight: "2rem",
    // backgroundColor: "green",
}

// ToRead block ----->
export const innerBlock  = {
    width: "24rem",
    minHeight: "30vh",
    // backgroundColor:"blue",
}

export const content = {
    // backgroundColor: 'purple',
}

export const toReadH1 = {
    display: 'inline', 
    verticalAlign:'middle'
}

export const toReadHeader = {
    // display: 'inline', 
    // position:"absolute", 
    // right:"2rem", top:"1rem",
}

// <-----
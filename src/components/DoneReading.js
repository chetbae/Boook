import React from "react";
import styled from 'styled-components';
import { innerBlock, content } from '../styles/Sidebar';

const StyledBlock = styled.h2`
    font-weight: 800;
    word-wrap: break-word;
    display: inline;
    width: 100px;
    max-width: 100px;
`


const DoneReading = ({ list }) => {
    const arr = ['black','red', 'black', 'black']

    return (
        <div style={innerBlock}>
            <h1>Done Reading:</h1>
            <div style={{...content, paddingRight:"0.5rem", /*textAlign: "right",borderStyle:"solid"*/}}>
                {list.map((item, index) => (
                        <StyledBlock style={{color:arr[index%5]}}>
                            {item.name.replaceAll(/\s/g,'')}
                        </StyledBlock>
                    )
                )}
            </div>
        </div>
    )
}

export default DoneReading;
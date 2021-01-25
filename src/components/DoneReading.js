import React, { useState } from "react";
import styled from 'styled-components';

const DoneReading = ({ list }) => {
    const arr = ['black','black', 'red', 'black', 'black'];

    const StyledBlock = styled.h3`
        font-weight: 700;
        word-wrap: break-word;
        display: inline;
        width: 100px;
        max-width: 100px;
    `

    return (
        <div style={{maxWidth:'280px'}}>
            <h1>Done Reading:</h1>
            {list.map((item, index) => (
                    <StyledBlock style={{color:arr[index%6]}}>
                        {item.name.replaceAll(/\s/g,'')}
                    </StyledBlock>
                )
            )}
        </div>
    )
}

export default DoneReading;
import React, { useState } from "react";
import styled from 'styled-components';

const DoneReading = ({ list }) => {
    const arr = ['black','black', 'red', 'black', 'black'];

    const StyledBlock = styled.h4`
        font-weight: 700;
        word-wrap: break-word;
        display: inline;
        position: relative;
        width: 200px;
        max-width: 200px;
    `

    return (
        <span>
            <h1>Done Reading:</h1>
            {list.map((item, index) => (
                    <StyledBlock style={{color:arr[index%6]}}>
                        {item.name.replaceAll(/\s/g,'')}
                    </StyledBlock>
                )
            )}
        </span>
    )
}

export default DoneReading;
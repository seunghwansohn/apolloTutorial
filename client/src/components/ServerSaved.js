import React from 'react';
import styled from 'styled-components';

const StyledTd = styled.td`
  border : 1px solid black;
`

const ServerSaved = () => {
  return (
    <table >
      <tr>
        <StyledTd>쿄쿄</StyledTd>
        <StyledTd>캬캬</StyledTd>
      </tr>
      <tr>
        <StyledTd>쿄쿄</StyledTd>
      </tr>
      <tr>
        <StyledTd>쿄쿄</StyledTd>
      </tr>
      
    </table>
  )
}

export default ServerSaved
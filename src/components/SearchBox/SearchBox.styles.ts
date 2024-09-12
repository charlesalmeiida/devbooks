import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #d9d9d9;
  border-radius: 10px;
  padding: 0 10px;
  flex: 1;

  svg {
    height: 20px;
    color: #d9d9d9;
    max-width: 20px;
  }

  input {
    width: 100%;
    height: 46px;
    border: 0;
    margin-left: 12px;
    outline: none;
  }
`

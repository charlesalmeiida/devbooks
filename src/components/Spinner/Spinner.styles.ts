import styled, { keyframes } from 'styled-components'

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`

export const Spinner = styled.div`
  width: 48px;
  height: 48px;
  border-width: 5px;
  border-style: solid;
  border-color: #e3552b;
  border-radius: 50%;
  border-bottom-color: transparent;
  animation: ${rotation} 1s linear infinite;
`

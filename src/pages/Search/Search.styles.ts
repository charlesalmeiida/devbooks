import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  padding: 20px;

  h1 {
    margin-bottom: 24px;
    color: #333;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 24px;
    }
  }
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 600px;
  width: 100%;
  gap: 12px;
`

export const SearchButton = styled.button`
  padding: 0 12px;
  height: 48px;
  border: none;
  border-radius: 10px;
  background-color: #ef552b;
  color: white;
  font-weight: bold;
  align-self: flex-start;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;

  &:hover {
    filter: brightness(90%);
  }
`

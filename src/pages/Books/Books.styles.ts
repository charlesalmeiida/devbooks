import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px 40px;
  width: 100%;

  h1 {
    margin: 24px 0;
    color: #333;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    max-width: 1200px;
    width: 100%;
    list-style: none;
    grid-gap: 16px;
  }

  li {
    &:hover {
      div {
        background-color: #ef522b;
      }
    }
  }

  a {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 24px;
    }
  }
`

const clampText = css`
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

export const Title = styled.h2`
  font-size: 24px;
  margin-top: 16px;
  margin-bottom: 8px;
  color: #333;

  ${clampText}

  @media (max-width: 768px) {
    font-size: 18px;
  }
`

export const Subtitle = styled.h3`
  font-weight: normal;
  font-size: 16px;
  color: #333;

  ${clampText}

  @media (max-width: 768px) {
    font-size: 14px;
  }
`

import styled, { css } from 'styled-components'

interface ContainerProps {
  bgColor: string
  size: 'small' | 'large'
}

const containerCustomStyles = {
  small: () => css`
    height: 300px;
    width: 100%;
    border-radius: 4px;

    svg {
      max-width: 120px;
      width: 100%;
      color: #fff;
    }
  `,
  large: () => css`
    height: 100vh;
    width: 50%;

    svg {
      max-width: 300px;
      width: 100%;
      color: #fff;
    }
  `
}

const imageCustomStyles = {
  small: () => css`
    width: 120px;
  `,
  large: () => css`
    width: 50%;
  `
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.bgColor};
  transition: all 0.3s ease;

  ${(props) => containerCustomStyles[props.size]}

  img {
    ${(props) => imageCustomStyles[props.size]}
  }
`

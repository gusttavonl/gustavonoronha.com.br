import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-itens: center;
  justify-content: center;
  padding: 30px;
`

export const Menu = styled.div``

export const Items = styled.ul`
  display: flex;
  flex-direction: row;
`

export const Item = styled.li`
  margin-left: 25px;
  list-style: none;
  cursor: pointer;

  ${({ theme }) => css`
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.gray300};

    &:hover {
      color: ${theme.colors.gray100};
    }
  `}
`

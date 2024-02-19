import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;

  padding: 50px;
  margin-top: 30px;
`

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`
export const Img = styled.img`
  border-radius: 1000px;
  width: 160px;
  height: 160px;
`

export const Titles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 50px;
`

export const Title = styled.h1`
  width: 100%;
  margin-top: 50px;
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.gray300};
  `}
`

export const SubTitle = styled.h3`
  width: 100%;
  margin-top: 2px;
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.gray400};
  `}
`

export const About = styled.p`
  width: 100%;
  margin-top: 50px;
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.gray400};
  `}
`

export const Contact = styled.div`
  margin-top: 50px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.gray300};
  `}
`

export const ContactText = styled.h4`
  margin-left: 12px;
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.gray300};
  `}
`

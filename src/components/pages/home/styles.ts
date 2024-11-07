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
  flex-direction: column;
  justify-content: flex-start;
`
export const Img = styled.img`
  border-radius: 1000px;
  width: 140px;
  height: 140px;
`

export const Titles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  flex-direction: column;
  align-items: center;
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.gray400};
  `}
`

export const ContactArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Contact = styled.div`
  margin-top: 50px;
  margin-right: 20px;
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
  margin-left: 5px;
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.gray300};
  `}
`

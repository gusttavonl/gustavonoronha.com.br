import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
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
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.gray300};
  `}
`

export const SubTitle = styled.h3`
  width: 100%;
  margin-top: 2px;
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.gray400};
  `}
`

export const Projects = styled.div``

export const Project = styled.div``

export const ProjectImg = styled.img``

export const ProjectTitle = styled.h2``

export const ProjectDescription = styled.h4``

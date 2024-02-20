import * as S from './styles'

const ProjectComponent = () => {
  return (
    <S.Container>
      <S.Main>
        <S.Titles>
          <S.Title>Projects</S.Title>
          <S.SubTitle>{`Here are some of the projects I've worked on.`}</S.SubTitle>
        </S.Titles>
      </S.Main>
      <S.Projects>
        <S.Project>
          <S.ProjectImg />
          <S.ProjectTitle>Any</S.ProjectTitle>
          <S.ProjectDescription>Any Any Any</S.ProjectDescription>
        </S.Project>
      </S.Projects>
    </S.Container>
  )
}

export default ProjectComponent

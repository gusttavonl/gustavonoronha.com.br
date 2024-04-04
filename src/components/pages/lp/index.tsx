import Image from 'next/image'
import * as S from './styles'

const LpComponent = () => {
  return (
    <S.Container>
      <S.Header>header</S.Header>
      <S.Introduction>
        <S.IntroductionText>introduction text</S.IntroductionText>
        <S.IntroductionImage>
          a
          <Image src="" alt="" />
        </S.IntroductionImage>
      </S.Introduction>
      <S.ForPeople>for people</S.ForPeople>
      <S.CourseContent>course content</S.CourseContent>
      <S.AboutMe>about me</S.AboutMe>
      <S.Footer>footer</S.Footer>
    </S.Container>
  )
}

export default LpComponent

import * as S from './styles'
import { FaExternalLinkAlt } from 'react-icons/fa'

const HomeComponent = () => {
  const navigate = (url: string) => {
    window.open(url, '_blank')
  }

  return (
    <S.Container>
      <S.Main>
        <S.Img src="img/gustavo.jpg" />
        <S.Titles>
          <S.Title>Gustavo Noronha</S.Title>
          <S.SubTitle>Software Engineer & Founder</S.SubTitle>
        </S.Titles>
      </S.Main>
      <S.About>
        {`
        Hello! I'm Gustavo Noronha, a software engineer with a passion for technology. With six years of experience, I've worked across diverse industries, specializing in areas such as payments, management software, streaming, and credit.

        My expertise extends to both front-end and back-end development, with proficiency in languages like JavaScript, Rust, Go, and Python, as well as technologies such as React. I have a strong background in building microservices architectures and implementing messaging systems.

        While serving as the Chief Technology Officer (CTO) of my own company, I've led the successful development of our Learning Management System (LMS) from inception to deployment. Additionally, I currently hold the position of tech lead at a streaming company, where I oversee project development, mentor team members, and tackle complex challenges.

        Beyond my professional endeavors, I'm also a content creator on YouTube, where I share insights on technology and personal development.

        I am also the founder of MeuMelhorTreino.com.br, a platform that generates personalized workout and diet plans using artificial intelligence to help users achieve their fitness goals effectively.
        `}
      </S.About>
      <S.Contact
        onClick={() => navigate('https://www.linkedin.com/in/gusttavonl/')}
      >
        <FaExternalLinkAlt />
        <S.ContactText>Contact</S.ContactText>
      </S.Contact>
      <S.Contact onClick={() => navigate('https://www.meumelhortreino.com.br')}>
        <FaExternalLinkAlt />
        <S.ContactText>Meu Melhor Treino</S.ContactText>
      </S.Contact>
    </S.Container>
  )
}

export default HomeComponent

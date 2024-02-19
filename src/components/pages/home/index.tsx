import * as S from './styles'

const HomeComponent = () => {
  return (
    <S.Container>
      <S.Title>Gustavo Noronha</S.Title>
      <S.SubTitle>Software Engineer & Content Creator</S.SubTitle>
      <S.About>
        {`
        Hello! I'm Gustavo Noronha, a software engineer with a passion for technology. With six years of experience, I've worked across diverse industries, specializing in areas such as payments, management software, streaming, and credit.

        My expertise extends to both front-end and back-end development, with proficiency in languages like JavaScript, Rust, Go, and Python, as well as technologies such as React. I have a strong background in building microservices architectures and implementing messaging systems.

        While serving as the Chief Technology Officer (CTO) of my own company, I've led the successful development of our Learning Management System (LMS) from inception to deployment. Additionally, I currently hold the position of tech lead at another company, where I oversee project development, mentor team members, and tackle complex challenges.

        Beyond my professional endeavors, I'm also a content creator on YouTube, where I share insights on technology and personal development.
        `}
      </S.About>
      <S.Contact>Contact</S.Contact>
    </S.Container>
  )
}

export default HomeComponent

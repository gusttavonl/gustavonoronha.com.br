import { useRouter } from 'next/router'
import * as S from './styles'

const Header = () => {
  const router = useRouter()
  const navigate = (route: string) => {
    router.replace(origin, route)
  }
  return (
    <S.Container>
      <S.Menu>
        <S.Items>
          <S.Item onClick={() => navigate('about')}>About</S.Item>
          <S.Item onClick={() => navigate('blog')}>Blog</S.Item>
          <S.Item onClick={() => navigate('project')}>Project</S.Item>
          <S.Item onClick={() => navigate('videos')}>Videos</S.Item>
          <S.Item onClick={() => navigate('resume')}>Resume</S.Item>
          <S.Item onClick={() => navigate('leetcode')}>LeetCode</S.Item>
        </S.Items>
      </S.Menu>
    </S.Container>
  )
}

export default Header

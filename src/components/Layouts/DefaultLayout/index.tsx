import Header from '@/components/header'
import * as S from './styles'

type DefaultLayoutProps = {
  children: React.ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <S.Layout>
      <Header />
      <S.Content>{children}</S.Content>
    </S.Layout>
  )
}

export default DefaultLayout

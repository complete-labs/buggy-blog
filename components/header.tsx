import Link from 'next/link'
import LoginHeader from '../components/loginheader'

type Props = {
  callbackURL: string
}

const Header = ({callbackURL}: Props) => {
  return (
    <>
      <LoginHeader callbackURL={callbackURL} />
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
        <Link href="/">
          <a className="hover:underline">
            Blog
          </a>
        </Link>
        .
      </h2>
    </>
  )
}

export default Header

import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/router'

type Props = {
  href: string
  as: string
  className?: string
  children: React.ReactNode
  premium: boolean
  ariaLabel?: string
}

const CustomLink = ({
  as,
  href,
  children,
  premium,
  className,
  ariaLabel
}: Props) => {
  const router = useRouter()
  const session = useSession()

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault()
    if (premium && !session.data) {
      signIn(undefined, { callbackUrl: as })
      return
    }

    router.push(as)
  }

  return (
    <Link href={href} as={as}>
      <a className={className} aria-label={ariaLabel} onClick={handleClick}>
        {children}
      </a>
    </Link>
  )
}

export default CustomLink

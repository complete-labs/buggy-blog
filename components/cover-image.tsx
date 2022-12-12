import cn from 'classnames'
import Link from 'next/link'
import LockIcon from './icons/lock-icon'
import UnlockIcon from './icons/unlock-icon'
import CSS from 'csstype';
import { getCookie } from 'cookies-next';
import { useEffect, useState } from 'react';

type Props = {
  title: string
  src: string
  premium: boolean
  slug?: string
}

const containerStyle: CSS.Properties = {
  position: 'relative',
  display: 'inline-flex'
}

const CoverImage = ({ title, src, premium, slug }: Props) => {
  const [insession, setInSession] = useState(false)
  useEffect(() => {
    let user = getCookie('user')
    setInSession(typeof user !== "undefined")
  }, [])

  // const inSession = () => { 
  //   let user = getCookie('user') 
  //   const insession = typeof user !== "undefined"
  //   return insession
  // }

  const image = (
    <img
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a style={containerStyle} aria-label={title}>
            {image}
            {premium && (insession ? (
              <UnlockIcon/>
            ) : (
              <LockIcon/>
            ))}
            {/* {(premium && !inSession()) && <LockIcon/>}
            {(premium && inSession()) && <UnlockIcon/>} */}
          </a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage

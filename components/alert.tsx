import Container from './container'
import cn from 'classnames'
import { EXAMPLE_PATH } from '../lib/constants'
import { signOut, useSession } from 'next-auth/react'

type Props = {
  preview?: boolean
}

const Alert = ({ preview }: Props) => {
  const { data: session } = useSession()

  return (
    <div
      className={cn('border-b', {
        'bg-accent-7 border-accent-7 text-white': preview,
        'bg-accent-1 border-accent-2': !preview
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This page is a preview.{' '}
              <a
                href="/api/exit-preview"
                className="underline hover:text-cyan duration-200 transition-colors"
              >
                Click here
              </a>{' '}
              to exit preview mode.
            </>
          ) : (
            <>
              The source code for this blog is{' '}
              <a
                href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
                className="underline hover:text-success duration-200 transition-colors"
              >
                available on GitHub
              </a>
              .
            </>
          )}

          {session && (
            <a
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1.5 px-4 border border-gray-400 rounded shadow ml-4"
              href={`/api/auth/signout`}
              onClick={(e) => {
                e.preventDefault()
                signOut()
              }}
            >
              sign out
            </a>
          )}
        </div>
      </Container>
    </div>
  )
}

export default Alert

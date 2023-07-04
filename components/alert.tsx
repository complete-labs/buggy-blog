import Container from './container'
import cn from 'classnames'
import { EXAMPLE_PATH } from '../lib/constants'
import { useSession, signIn, signOut } from 'next-auth/react'

type Props = {
  preview?: boolean
}

const Alert = ({ preview }: Props) => {
  const { data: session } = useSession();

  const handleAuth = () => {
    if (session) {
      signOut({ callbackUrl: "/" });
    } else {
      signIn();
    }
  }
  const authText = (session) ? "out" : "in";

  return (
    <div
      className={cn('border-b', {
        'bg-accent-7 border-accent-7 text-white': preview,
        'bg-accent-1 border-accent-2': !preview,
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
          {/* Absolute positioning is not great, but put it here to avoid changing too much for readability purposes */} 
          <button
            className="absolute top-1 right-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded"
            onClick={((e) => {
              e.preventDefault()
              handleAuth()
            })}
          >
            {`Sign ${authText}`}
          </button>
        </div>
      </Container>
    </div>
  )
}

export default Alert

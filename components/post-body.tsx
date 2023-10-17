import { useLoggedInContext } from './authContext'
import LoginPrompt from './login-prompt'
import markdownStyles from './markdown-styles.module.css'

type Props = {
  content: string
  premium?: boolean
}

const PostBody = ({ content, premium }: Props) => {
    const { isLoggedIn } = useLoggedInContext();

  return (
    <div className="max-w-2xl mx-auto">
      {(premium && !isLoggedIn) 
        ? <LoginPrompt /> 
        : (<div
            className={markdownStyles['markdown']}
            dangerouslySetInnerHTML={{ __html: content }}
          />)
      }
    </div>
  )
}

export default PostBody

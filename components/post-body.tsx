import markdownStyles from './markdown-styles.module.css'
import LoginForm from './login-form'
import LogoutButton from './logout-button'

type Props = {
  content: string
  premium?: boolean
  isLoggedIn?: boolean
}

const PostBody = ({ content, premium, isLoggedIn }: Props) => {
  if (premium && !isLoggedIn) return <LoginForm />
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <LogoutButton />
    </div>
  )
}

export default PostBody

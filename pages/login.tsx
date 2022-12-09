import { useRouter } from 'next/router'

type Props = {
     post: PostType
}

const Login = ({ post }: Props) => {
  const router = useRouter()

    var onClick = () => {
        localStorage.setItem("username", "username");
        router.push("/");
    }
      return (
    <>
      <div>
        <button onClick={onClick}>Login</button>
    </div>
    </>
)
}

export default Login

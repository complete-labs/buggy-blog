import { FormEvent } from "react"

type LoginFormAttributes = {
  username: { value: string }
  password: { value: string }
}

type LoginFormEvent = FormEvent<HTMLFormElement> & {
  target: EventTarget & LoginFormAttributes
}

export default LoginFormEvent
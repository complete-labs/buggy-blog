import React, { useContext } from "react"
import markdownStyles from "./markdown-styles.module.css"
import { AuthContext } from "../auth/AuthContext"
import Link from "next/link"

type Props = {
  content: string
  premium: boolean
}

const PostBody = ({ content, premium }: Props) => {
  const authContext = useContext(AuthContext)
  const loginDetails = authContext.state?.loginDetails
  const isLoggedIn = authContext.state?.isLoggedIn

  const PremiumPostPaywall = (props: any) => {
    const loggedIn: boolean = props.loggedIn
    return (
      <div>
        <div style={{ position: "relative" }}>
          <div
            className={markdownStyles["markdown"]}
            dangerouslySetInnerHTML={{ __html: content.substring(0, 900) }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "0px",
              width: "100%",
              height: "250px",
              background:
                "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
            }}
          ></div>
        </div>
        <div className="text-lg">
          Premium content, please{" "}
          <span className="text-blue-600 underline ">
            {loggedIn ? (
              <Link href="/">upgrade your account</Link>
            ) : (
              <Link href="/login">log in</Link>
            )}
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      {!premium || (isLoggedIn && loginDetails?.isPremiumMember) ? (
        <div
          className={markdownStyles["markdown"]}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      ) : !isLoggedIn ? (
        <PremiumPostPaywall loggedIn={false} />
      ) : (
        !loginDetails?.isPremiumMember && <PremiumPostPaywall loggedIn={true} />
      )}
    </div>
  )
}

export default PostBody

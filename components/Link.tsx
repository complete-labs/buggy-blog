import Link from 'next/link'
import Login from './Login'
import { useState, useEffect } from "react"
import { useRouter } from 'next/router'


interface authLinkProps {
    slug: string,
    title: string,
}

export const AuthLink = (props: authLinkProps) => {
  return (
        <>

            <Link as={`/posts/${props.slug}`} href="/posts/[slug]">
                <a className="hover:underline">{props.title}</a>
            </Link>



        </>
    )

}

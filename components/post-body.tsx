import { useEffect, useState } from 'react';
import markdownStyles from './markdown-styles.module.css'
import { getCurrentUser } from '../lib/user';
import UserType from './../types/user';
import LoginWidget from './login-widget';

type Props = {
  content: string
  premium: boolean
}

const PostBody = ({ content, premium }: Props) => {
  let [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
      const u = getCurrentUser();
      setUser(u);
  }, []);

  if (premium && !user) {
    return <LoginWidget />
  }
  
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}

export default PostBody

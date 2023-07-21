import PremiumLock from './premium-lock'

const PostPremiumFlag = () => {
  return (
    <div className="inline-flex items-center space-x-2 text-lg text-yellow-500">
      <div>Premium Post</div>
      <PremiumLock />
    </div>
  )
}

export default PostPremiumFlag

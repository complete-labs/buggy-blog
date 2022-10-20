import { useRouter } from 'next/router'

const Paywall = () => {
  const router = useRouter()
  return (
    <div className='mb-4 text-center'>
      <h1 className='text-4xl font-bold text-black'>Premium Content</h1>
      <p className='text-black mb-4'>Please login to view this content</p>
      <button
        className='bg-black text-white px-4 py-2 rounded-md'
        onClick={() => {
          router.push('/login')
        }}
      >
        Login
      </button>
    </div>
  )
}

export default Paywall

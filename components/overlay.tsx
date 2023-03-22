import LoginButton from "./login";

const Overlay = ({excerpt}: {excerpt?: string}) => {
  return <div className='fixed bg-gray-100 h-full w-full'>
    {excerpt}
    <LoginButton />
  </div>
}
export default Overlay;
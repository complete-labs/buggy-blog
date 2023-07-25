import Login from './login'

const Intro = () => {
  return (
    <section className="flex-row flex items-center justify-between mt-16 mb-8">
      <h1 className="text-6xl font-bold tracking-tighter leading-tight">
        Blog.
      </h1>
      <Login />
    </section>
  )
}

export default Intro

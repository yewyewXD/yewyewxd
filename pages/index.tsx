import Navbar from './components/Navbar'
import PrimaryBtn from './components/PrimaryBtn'

export default function Home() {
  return (
    <div>
      <Navbar />

      <section className="h-screen flex items-center">
        <div className="container flex flex-col justify-center items-center text-center">
          <h1 className="gradientText mb-4">{"Hi, I'm Kang Wei."}</h1>
          <p className="text-lg max-w-[500px] mb-6 leading-normal">
            {
              "I'm a React full-stack developer with 4 years of work experience."
            }
          </p>
          <PrimaryBtn>See Projects</PrimaryBtn>
        </div>
      </section>
    </div>
  )
}

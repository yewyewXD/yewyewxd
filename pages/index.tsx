export default function Home() {
  return (
    <div>
      <section className="h-screen flex items-center">
        <div className="container flex flex-col justify-center items-center text-center">
          <h1 className="gradientText mb-6">{"Hi, I'm Kang Wei."}</h1>
          <div className="text-lg font-medium mb-8">Bangkok, TH</div>
          <p className="text-lg font-medium max-w-[500px]">
            {
              "I'm a React full-stack developer with 4 years of work experience."
            }
          </p>
        </div>
      </section>
    </div>
  )
}

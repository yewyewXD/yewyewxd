import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const CaseStudySpuunPage = () => {
  return (
    <div>
      <Navbar hasBack />

      <div className="container">
        <div className="h-[600px]">image</div>
        <h1 className="text-5xl font-bold mb-3 leading-snug">Spuun</h1>
        <div className="text-lg font-medium mb-8">
          FULLSTACK & MOBILE DEVELOPER<span className="mx-2">•</span>2022
        </div>
        <p className="text-lg">
          To job seekers, ZipRecruiter had long been known as a job search
          engine. While our Suggested Jobs page received a lot of traffic, users
          often complained that they didn’t know why they were being shown
          certain jobs. Our engineering team also had issues with the page,
          adding that it was complex and difficult to run tests on. How could we
          redesign the Suggested Jobs page to give users a stronger sense of
          clarity and control, while also reducing engineering complexity?
        </p>

        <div className="mx-auto w-[664px] px-8 py-6 bg-secondary rounded-xl my-16">
          <h2 className="font-bold mb-2">PROBLEM</h2>
          <p className="text-lg">
            Because our Suggested Jobs page shows mixed job content based on
            search and application activity, a stray look into a dream job or a
            search for a friend could instantly dilute a user’s page with
            seemingly random results.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default CaseStudySpuunPage

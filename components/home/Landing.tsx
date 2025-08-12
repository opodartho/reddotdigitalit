import React from 'react'
import WhoWeAre from '@/components/home/_who_we_are/Section'
import News from '@/components/home/_news/Section'
import ProductSolution from '@/components/home/_product_solution/Section'

export const Landing = () => {
  return (
    <>
      <ProductSolution />
      <News />
      <WhoWeAre />
    </>
  )
}

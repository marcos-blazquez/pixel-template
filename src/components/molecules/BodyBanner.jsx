'use client'
import { useContext } from 'react'
import { Container } from '../atoms/Container'
import { LngContext } from '@/app/context'

export function BodyBanner({ content }) {
  const { t } = useContext(LngContext)
  return (
    <section
      id="features"
      aria-label="Features for investing all your money"
      className="bg-gray-900 py-12 sm:py-16"
    >
      <Container>
        <div className="mx-auto lg:mx-0 ">
          <h2 className="text-center text-xl font-light  text-white sm:text-4xl">
            {t(content)}
          </h2>
        </div>
      </Container>
    </section>
  )
}

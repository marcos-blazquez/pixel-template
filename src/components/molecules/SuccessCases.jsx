'use client'
import { useContext } from 'react'
import Image from 'next/image'
import { Container } from '../atoms/Container'
import { LngContext } from '@/app/context'

export function SuccessCases({ id, title, heading, body, cases }) {
  const { t } = useContext(LngContext)
  return (
    <section
      id={id}
      aria-label="Features for investing all your money"
      className="bg-white pb-20 pt-16"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-full">
          <h3 className="text-base font-semibold uppercase tracking-tight text-secondary lg:ml-0">
            {t(title)}
          </h3>
          <h2 className="pt-4 text-4xl font-bold tracking-tight text-gray-800 lg:ml-0 ">
            {t(heading)}
          </h2>
          <p className="mt-4 text-lg text-gray-600">{t(body)}</p>
          <div className="relative grid-rows-1 lg:grid lg:min-h-[400px] lg:grid-cols-3 lg:gap-x-8 ">
            {cases.map(({ title, body, image }, i) => (
              <div className="pt-12" key={i}>
                <a href={t(image.href)} target="_blank" rel="noreferrer">
                  <Image
                    src={image.src}
                    alt={t(image.alt)}
                    className="pointer-events-none inset-0 h-auto w-full rounded-lg shadow-lg lg:w-[384px]"
                    unoptimized
                  />
                </a>
                <h4 className="pt-4 text-xl font-bold tracking-tight text-gray-800 lg:ml-0 ">
                  {t(title)}
                </h4>
                <div className="flex justify-between align-middle lg:block">
                  <p className="text-lg text-gray-400">{t(body)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

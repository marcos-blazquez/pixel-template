'use client'
import { useContext } from 'react'
import Image from 'next/image'
import { Trans } from 'react-i18next'
import { Container } from '../atoms/Container'
import globant from '@/images/logos/globant.svg'
import latamAirlines from '@/images/logos/latam-airlines.svg'
import papaJohns from '@/images/logos/papa-johns.svg'
import autopia from '@/images/logos/autopia.svg'
import { LngContext } from '@/app/context'

export function ClientsBrands({ title, body }) {
  const { t } = useContext(LngContext)
  return (
    <section
      id="features"
      // modify this later
      // aria-label="Features for investing all your money"
      className="bg-base-300 py-8 lg:py-20"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-full">
          <div className="mx-auto mb-10 sm:mb-0 lg:mx-0 lg:mb-12">
            {/* texto */}
            <h2 className="text-center text-2xl  text-primary lg:ml-0 lg:text-4xl">
              <Trans
                i18nKey={title}
                components={{
                  bold: <span className="font-semibold" />,
                }}
              />
            </h2>
            <p className="pt-8 text-center text-lg text-gray-900">
              {/* Han confiado en nosotros */}
              {t(body)}
            </p>
            <div className="mx-auto flex flex-wrap justify-between pt-8 lg:max-w-3xl">
              <div className="grid w-full grid-cols-2 grid-rows-2 gap-4 pt-4 lg:grid-cols-4 lg:grid-rows-1">
                <Image
                  src={globant}
                  alt=""
                  className="pointer-events-none inset-0 col-span-1 mx-auto h-auto lg:col-span-1 lg:w-32"
                  unoptimized
                  priority={false}
                />
                <Image
                  src={latamAirlines}
                  alt=""
                  className="pointer-events-none inset-0 col-span-1 mx-auto h-auto lg:col-span-1 lg:w-32"
                  unoptimized
                  priority={false}
                />
                <Image
                  src={papaJohns}
                  alt=""
                  className="pointer-events-none inset-0 col-span-1 mx-auto h-auto lg:col-span-1 lg:w-32"
                  unoptimized
                  priority={false}
                />
                <Image
                  src={autopia}
                  alt=""
                  className="pointer-events-none inset-0 col-span-1 mx-auto h-auto lg:col-span-1 lg:w-32"
                  unoptimized
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

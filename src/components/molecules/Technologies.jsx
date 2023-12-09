'use client'
import { useContext } from 'react'
import Image from 'next/image'
import { Container } from '../atoms/Container'
import jamsStack from '@/images/logos/jam-stack.svg'
import netlify from '@/images/logos/netlify.svg'
import nextJs from '@/images/logos/next-js.svg'
import tailwind from '@/images/logos/tailwind.svg'
import figma from '@/images/logos/figma.svg'
import adobeFresco from '@/images/logos/adobe-fresco.svg'
import { LngContext } from '@/app/context'

export function Technologies({ id, title, body }) {
  const { t } = useContext(LngContext)
  return (
    <section
      id={id}
      // modify this later
      aria-label="Features for investing all your money"
      className="bg-base-300 py-8 lg:py-16"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-full">
          <div className="mx-auto mb-10 sm:mb-0 lg:mx-0 lg:mb-12">
            {/* texto */}
            <h2 className="text-base font-semibold uppercase tracking-tight text-secondary lg:ml-0">
              {t(title)}
            </h2>
            <h3 className="pt-4 text-2xl text-primary lg:ml-0 lg:text-4xl">
              {/* Empleamos la <span className="font-bold">tecnología</span> más
              avanzada en el mercado. */}
              {t(body)}
            </h3>
            <div className="mx-auto flex flex-wrap justify-between pt-4">
              <div className="grid w-full grid-cols-2 grid-rows-2 gap-4 pt-4 lg:grid-cols-6 lg:grid-rows-1">
                <Image
                  src={tailwind}
                  alt=""
                  className="pointer-events-none inset-0 col-span-1 mx-auto h-12 lg:col-span-1 lg:w-32"
                  unoptimized
                  priority={false}
                />
                <Image
                  src={nextJs}
                  alt=""
                  className="pointer-events-none inset-0 col-span-1 mx-auto h-12 lg:col-span-1 lg:w-32"
                  unoptimized
                  priority={false}
                />
                <Image
                  src={jamsStack}
                  alt=""
                  className="pointer-events-none inset-0 col-span-1 mx-auto h-12 lg:col-span-1 lg:w-32"
                  unoptimized
                  priority={false}
                />
                <Image
                  src={netlify}
                  alt=""
                  className="pointer-events-none inset-0 col-span-1 mx-auto h-12 lg:col-span-1 lg:w-32"
                  unoptimized
                  priority={false}
                />
                <Image
                  src={figma}
                  alt=""
                  className="pointer-events-none inset-0 col-span-1 mx-auto h-12 lg:col-span-1 lg:w-32"
                  unoptimized
                  priority={false}
                />
                <Image
                  src={adobeFresco}
                  alt=""
                  className="pointer-events-none inset-0 col-span-1 mx-auto h-12 lg:col-span-1 lg:w-32"
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

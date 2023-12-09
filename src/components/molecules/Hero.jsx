'use client'
import { useContext } from 'react'
import { Trans } from 'react-i18next'
import Button from '../atoms/Button'
import { Container } from '../atoms/Container'
import HeroSVG from '../atoms/svg/HeroSVG'
import { LngContext } from '@/app/context'

export function Hero({ title, body, button, id }) {
  const { t } = useContext(LngContext)
  return (
    <section
      className="overflow-hidden bg-base-200 py-12 sm:py-16 lg:max-h-[710px] lg:pb-32 xl:pb-36"
      style={{
        scrollMarginTop: 'unset',
      }}
      id={id}
    >
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-6 lg:max-w-none lg:pt-6">
            <h1 className="text-center text-4xl font-medium tracking-tight text-gray-900 sm:text-left sm:text-[3.5rem] sm:leading-tight">
              <Trans
                i18nKey={title}
                components={{
                  bold: <span className="font-extrabold text-secondary" />,
                }}
              />
            </h1>
            <p className="mt-6 text-center text-lg text-gray-600 sm:text-left">
              <Trans
                i18nKey={body}
                components={{
                  bold: <b />,
                }}
              />
            </p>
            <div className="mt-8  hidden flex-wrap gap-x-6 gap-y-4 lg:flex">
              <Button
                className="btn btn-secondary btn-lg w-full text-lg normal-case sm:w-auto"
                href={t(button.href)}
              >
                <Trans i18nKey={button.label} />
              </Button>
            </div>
          </div>
          <div className="relative mt-4 lg:-top-14 lg:col-span-5 lg:row-span-1 lg:mt-0">
            <HeroSVG className="relative hidden lg:block" />
            <HeroSVG
              style={{
                width: 'calc(100vw - 30%)',
              }}
              className=" relative left-1/2 h-auto max-w-2xl -translate-x-1/2 lg:hidden"
            />
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
            <Button
              className="btn btn-secondary btn-lg w-full text-lg normal-case"
              href={t(button.href)}
            >
              <Trans i18nKey={button.label} />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

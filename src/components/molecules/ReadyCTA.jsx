'use client'
import { useContext } from 'react'
import { Trans } from 'react-i18next'
import { Container } from '../atoms/Container'
import Button from '../atoms/Button'
import { CircleBackground } from '../atoms/CircleBackground'
import { LngContext } from '@/app/context'

export function ReadyCTA({ id, title, body, button }) {
  const { t } = useContext(LngContext)
  return (
    <section
      id={id}
      // modify this later
      aria-label="Features for investing all your money"
      className="relative overflow-hidden bg-base-300 py-8 lg:py-16"
    >
      <Container className="flex justify-center">
        <div className="z-10 mb-10 max-w-2xl sm:mb-0 lg:mx-0">
          {/* texto */}
          <h2 className="pt-4 text-center text-2xl text-primary lg:ml-0 lg:text-4xl">
            <Trans
              i18nKey={title}
              components={{
                bold: <span className="font-bold" />,
              }}
            />
          </h2>
          <p className="pt-4 text-center text-gray-800">{t(body)}</p>

          <div className="flex justify-center pt-8">
            <Button
              className="btn btn-secondary w-full capitalize lg:btn-md lg:w-auto"
              href={t(button.href)}
            >
              {t(button.label)}
            </Button>
          </div>
        </div>
      </Container>
      <div className="absolute left-20 top-1/2 hidden -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2 lg:block">
        <CircleBackground color="#fff" className="z-0 animate-spin-slower" />
      </div>
    </section>
  )
}

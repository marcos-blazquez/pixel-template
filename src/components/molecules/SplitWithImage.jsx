'use client'
import { useContext } from 'react'
import { Trans } from 'react-i18next'
import { Container } from '../atoms/Container'
import Button from '../atoms/Button'
import PersonsWorking from '../atoms/svg/PersonsWorking'
import { LngContext } from '@/app/context'

export function SplitWithImage({ id, title, heading, body, button }) {
  const { t } = useContext(LngContext)
  return (
    <section
      id={id}
      aria-label="Features for investing all your money"
      className="bg-white pb-20 pt-16 lg:py-12"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-full">
          <div className="relative grid-rows-1 pt-4 lg:grid lg:min-h-[400px] lg:grid-cols-12 lg:gap-x-8 ">
            <div className="relative mx-auto sm:mb-0 lg:col-span-6 lg:mx-0">
              {/* imagen */}
              <PersonsWorking className="relative left-1/2 h-auto w-full -translate-x-1/2" />
            </div>
            <div className=" relative mx-auto mb-10 flex items-center sm:mb-0 lg:col-span-6 lg:mx-0 lg:mb-12">
              <div className="relative">
                {/* texto */}
                <h2 className="text-base font-semibold uppercase tracking-tight text-secondary lg:ml-0">
                  <Trans
                    i18nKey={title}
                    components={{
                      bold: <span className="font-extrabold" />,
                    }}
                  />
                </h2>
                <h3 className="pt-4 text-4xl font-bold tracking-tight text-gray-800 lg:ml-0 ">
                  {t(heading)}
                </h3>
                <p className="mt-4 text-lg text-gray-600">
                  <Trans i18nKey={body} />
                </p>
                <Button
                  className="btn btn-secondary btn-md mt-6 normal-case lg:mt-6 lg:block"
                  href={t(button.href)}
                >
                  {t(button.label)}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

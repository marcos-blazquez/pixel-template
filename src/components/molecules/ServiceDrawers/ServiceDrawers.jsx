'use client'
import { useContext } from 'react'
import { Trans } from 'react-i18next'
import { Container } from '../../atoms/Container'
import './ServiceDrawers.css'
import { LngContext } from '@/app/context'

export function ServiceDrawers({ title, body, drawers = [] }) {
  const { t } = useContext(LngContext)
  return (
    <section
      id="features"
      aria-label="Features for investing all your money"
      className="bg-gray-800 py-16 sm:py-24"
    >
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-2">
          <h2 className="text-base font-semibold uppercase tracking-tight text-secondary lg:col-span-12 lg:ml-0">
            {t(title)}
          </h2>
          <div className="mx-auto mb-12 pt-2 sm:mb-0 lg:col-span-6 lg:mx-0">
            <p className="text-xl font-light text-white sm:text-4xl">
              <Trans
                i18nKey={body}
                components={{
                  bold: <b />,
                }}
              />
            </p>
          </div>
          <div className="mx-auto lg:col-span-6 lg:mx-0">
            {drawers.map(({ title, description }, index) => (
              <div className="collapse collapse-arrow" key={index}>
                <input type="radio" name="my-accordion-2" />
                <div
                  id="service-drawer"
                  className="collapse-title flex justify-center font-medium text-base-100"
                >
                  {t(title)}
                </div>
                <div className="collapse-content">
                  <p className="text-center text-base-100">{t(description)}</p>
                </div>
              </div>
            ))}{' '}
          </div>
        </div>
      </Container>
    </section>
  )
}

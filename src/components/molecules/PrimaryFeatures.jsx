'use client'
import { useContext, lazy } from 'react'
import { Trans } from 'react-i18next'
import clsx from 'clsx'
import { Container } from '../atoms/Container'
import Button from '../atoms/Button'
import Numbers from '../atoms/svg/Numbers'
import VerticalDots from '../atoms/svg/VerticalDots'
import { LngContext } from '@/app/context'
import PersonsGather from '@/app/components/atoms/svg/PersonsGather'
import PersonsChill from '@/app/components/atoms/svg/PersonsChill'
import PersonsDashboard from '@/app/components/atoms/svg/PersonsDashboard'

export function PrimaryFeatures({ title, features, id }) {
  const { t } = useContext(LngContext)
  const images = {
    PersonsGather,
    PersonsChill,
    PersonsDashboard,
  }
  features = features.map((feature) => {
    const ImageComponent = images[feature.image.src]
    return {
      ...feature,
      image: {
        src: ImageComponent,
        alt: feature.image.alt,
      },
    }
  })
  const getContent = ({ step, title, body, button, id, image }) => {
    const ImageComponent = image.src
    // check if id is odd
    const isOdd = id % 2 === 1
    return (
      <div
        key={id}
        className="relative grid-rows-1 lg:grid lg:min-h-[400px] lg:grid-cols-12 lg:gap-x-8"
      >
        <div
          className={clsx(
            'relative mx-auto mb-10 sm:mb-0 lg:col-span-5 lg:mx-0 lg:mb-12',
            isOdd && 'lg:col-start-8 lg:col-end-13',
          )}
        >
          <div className="absolute top-0.5 lg:hidden">
            <Numbers number={id + 1} className="h-6 w-6" />
          </div>
          <h3 className="t-10 ml-8 text-xl font-extrabold uppercase tracking-tight text-gray-800 lg:ml-0 lg:pt-12">
            <Trans
              i18nKey={step}
              components={{
                hide: <span className="hidden lg:inline" />,
              }}
            />
          </h3>
          <div className={clsx('lg:hidden')}>
            {/* {image?.src({
              className: 'relative left-1/2 -translate-x-1/2',
              style: {
                width: 'calc(100vw - 30%)',
              },
            })} */}
          </div>
          <h4 className="mt-4 text-xl font-extrabold tracking-tight text-gray-800 lg:pt-4 lg:text-4xl">
            {t(title)}
          </h4>
          <p className="mt-4 text-lg text-gray-600">{t(body)}</p>
          {t(button.label) && (
            <Button
              className="btn btn-primary btn-md mt-6 normal-case lg:mt-8 lg:block"
              href={t(button.href)}
            >
              {t(button.label)}
            </Button>
          )}
        </div>
        <div className="absolute left-1/2 top-1/4 z-10 hidden -translate-x-1/2 lg:block">
          <Numbers
            number={id + 1}
            className="absolute left-1/2 z-30 -translate-x-1/2"
          />
          {/* <div className="relative h-12 w-12 "> */}
          <div className=" absolute -top-[8px] left-1/2 z-20 h-16 w-16 -translate-x-1/2 animate-pulse bg-pink-200"></div>
          {/* </div> */}
        </div>
        {/* render only if its not last id */}
        {id !== features.length - 1 && (
          <div className="absolute left-1/2 top-1/4 hidden -translate-x-1/2 lg:block">
            <VerticalDots number={id + 1} />
          </div>
        )}
        <div
          className={clsx(
            'relative row-start-1 hidden sm:mb-0 lg:col-span-5 lg:mx-0 lg:block',
            !isOdd && 'lg:col-start-8 lg:col-end-13',
          )}
        >
          {/* {image?.src({
            className: 'absolute left-1/2 -translate-x-1/2',
          })} */}
          <ImageComponent />
        </div>
      </div>
    )
  }

  return (
    <section
      id={id}
      aria-label="Features for investing all your money"
      className="pt-4 sm:pt-16"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-full">
          <h2 className="mb-10 text-center text-xl font-bold tracking-tight text-gray-800 lg:mb-0 lg:text-left lg:text-4xl">
            {t(title)}
          </h2>
          {features.map((step, idx) => getContent({ ...step, id: idx }))}
        </div>
      </Container>
    </section>
  )
}
// const getSteps = (t) => {
//   const steps = [
//     {
//       label: (
//         <>
//           PASO <span className="hidden lg:inline">1</span>
//         </>
//       ),
//       title: 'Cuéntanos tu idea',
//       body: 'Comienza proporcionando una breve descripción del proyecto para que comprendamos tus necesidades.',
//       button: {
//         label: 'Conversemos',
//         href: '#contact-us',
//       },
//       image: {
//         src: PersonsGather,
//         alt: 'People gathering',
//       },
//     },
//     {
//       label: (
//         <>
//           PASO <span className="hidden lg:inline">2</span>
//         </>
//       ),
//       title: 'Analizamos el mercado',
//       body: 'Realizamos investigaciones exhaustivas para comprender a tu audiencia con enfoque centrado en el usuario.',
//       image: { src: PersonsChill, alt: 'People chilling' },
//     },
//     {
//       label: (
//         <>
//           PASO <span className="hidden lg:inline">3</span>
//         </>
//       ),
//       title: 'Diseño & Desarrollo',
//       body: 'Sesiones de retroalimentación para perfeccionar tu producto y prepararlo para su lanzamiento.',
//       button: {
//         label: '¡Tengo una idea!',
//         href: '#contact-us',
//       },
//       image: { src: PersonsDashboard, alt: 'People using a dashboard' },
//     },
//   ]
//   return steps
// }

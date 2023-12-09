'use client'
import { useRef, useState, useEffect, useContext } from 'react'
import { Trans } from 'react-i18next'
import ReCAPTCHA from 'react-google-recaptcha'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import 'yup-phone'

import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline'
import { getInputProps } from '../../common/helpers'
import Input from '../atoms/Input'
import TextArea from '../atoms/TextArea'
import GrannyThumbUp from '../atoms/svg/GrannyThumbUp'
import { LngContext } from '@/app/context'

export function ContactUs({
  id,
  title,
  body,
  address,
  phone,
  email,
  formLabels,
  success,
  config: { captchaSitekey },
}) {
  const { t } = useContext(LngContext)
  const [formState, setFormState] = useState({
    submitting: false,
    submitted: false,
    error: false,
  })
  const [token, setToken] = useState('')
  const reCaptcha = useRef()
  const initialValues = {
    fullName: '',
    email: '',
    phone: '',
    message: '',
    captcha: '',
  }
  const errMsgs = formLabels.errors
  const validationSchema = Yup.object({
    fullName: Yup.string()
      .max(70, t(errMsgs.fullName.maxLength))
      .required(t(errMsgs.fullName.required))
      .typeError(t(errMsgs.fullName.typeError))
      .matches(/^[a-zA-Z ]*$/, t(errMsgs.fullName.typeError)),
    email: Yup.string()
      .max(50, t(errMsgs.email.maxLength))
      .required(t(errMsgs.email.required))
      .typeError(t(errMsgs.email.typeError))
      .email(t(errMsgs.email.typeError)),
    phone: Yup.string()
      .required(t(errMsgs.phone.required))
      .test({
        name: 'phone',
        test(value, ctx) {
          const phoneSchema = Yup.string().phone()
          const valid = phoneSchema.isValidSync(value)
          if (!valid) {
            return ctx.createError({
              message: t(errMsgs.phone.typeError),
            })
          }
          return valid
        },
      }),
    message: Yup.string()
      .max(150, t(errMsgs.message.maxLength))
      .required(t(errMsgs.message.required)),
    captcha: Yup.string().required(t(errMsgs.captcha.required)),
  })
  const onSubmit = async (values) => {
    if (!formState.submitting) {
      setFormState({ ...formState, submitting: true })
      try {
        await fetch('/functions/contact', {
          method: 'POST',
          body: JSON.stringify(values),
        })
        setFormState({ ...formState, submitting: false, submitted: true })
      } catch (err) {
        setFormState({ ...formState, submitting: false, error: true })
      }
    }
  }
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    enableReinitialize: true,
    validateOnChange: false,
  })
  useEffect(() => {
    if (token) {
      formik.setFieldValue('captcha', token)
    }
  }, [token])
  return (
    <section className="relative isolate bg-base-100" id={id}>
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 py-16 sm:pt-32 lg:static lg:px-8 lg:py-28">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-base-200 lg:w-1/2" />
            <h2 className="text-xl font-semibold tracking-tight text-gray-800 lg:text-4xl lg:font-bold">
              {t(title)}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">{t(body)}</p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">{t(address)}</span>
                  <BuildingOffice2Icon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <Trans i18nKey={address} />
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">{t(phone)}</span>
                  <PhoneIcon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a className="hover:text-gray-900" href={`tel:${t(phone)}`}>
                    {t(phone)}
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a
                    className="hover:text-gray-900"
                    href={`mailto:${t(email)}`}
                  >
                    {t(email)}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="px-6 py-16 sm:pb-32 lg:px-8 lg:py-28">
          {formState.submitted && (
            <div className="row-auto grid grid-cols-1 justify-center  lg:mr-0 lg:grid-cols-2 lg:grid-rows-1">
              <GrannyThumbUp className="relative left-1/2 row-start-2 max-w-[-webkit-fill-available] -translate-x-1/2 pt-7 lg:row-start-1 lg:pt-0" />
              <div className="row-start-1 text-center lg:ml-6 lg:flex lg:flex-col  lg:justify-center lg:text-left">
                <h3 className=" text-4xl font-bold uppercase">
                  {t(success.title)}
                </h3>
                <p>
                  <Trans i18nKey={success.body} />
                </p>
              </div>
            </div>
          )}

          {!formState.submitted && (
            <form onSubmit={formik.handleSubmit}>
              <div className="lg:mr-0 lg:max-w-lg">
                <Input
                  {...getInputProps('fullName', formik)}
                  placeholder={t(formLabels.fullName)}
                  type="text"
                  autoComplete="text"
                  required
                />
                <Input
                  {...getInputProps('email', formik)}
                  placeholder={t(formLabels.email)}
                  type="email"
                  autoComplete="email"
                  required
                />
                <Input
                  {...getInputProps('phone', formik)}
                  placeholder={t(formLabels.phone)}
                  type="tel"
                  autoComplete="tel"
                  required
                />
                <TextArea
                  {...getInputProps('message', formik)}
                  rows="3"
                  placeholder={t(formLabels.message)}
                  required
                />
                {formik.dirty && (
                  <>
                    <div className="mt-6">
                      <ReCAPTCHA
                        ref={reCaptcha}
                        sitekey={captchaSitekey}
                        onChange={(token) => setToken(token)}
                        onExpired={(e) => setToken('')}
                      />
                    </div>
                    {formik.errors?.captcha && (
                      <p
                        className="mt-1 text-xs text-red-500"
                        id={`error-captcha`}
                      >
                        {formik.errors?.captcha}
                      </p>
                    )}
                  </>
                )}
                <button
                  type="submit"
                  className="btn btn-secondary btn-md mt-8 flex normal-case"
                >
                  {formState.submitting && (
                    <>
                      <span className="loading loading-spinner"></span>
                      Sending...
                    </>
                  )}
                  {!formState.submitting && t(formLabels.cta)}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

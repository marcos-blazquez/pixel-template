'use client'
import { Button as Btn } from "@material-tailwind/react";
import clsx from 'clsx'
export const Button = ({
  type,
  label,
  onClick = () => {},
  loading,
  disabled,
  className,
  children,
  href,
}) => {
  const getButtonProps = () => {
    const props = {}
    if (!disabled) {
      return {
        ...props,
        onClick: (e) => {
          if (!loading && !disabled && onClick) {
            e.preventDefault()
            onClick(e)
          }
        },
      }
    }
  }
  if (href) {
    return (
      <a
        href={href}
        className={clsx(
          className,
          loading && 'loading',
          disabled && 'btn-disabled',
          'w-fit',
        )}
      >
        {label || children}
      </a>
    )
  }

  return (
    <Btn
      type={type}
      {...getButtonProps()}
      className={clsx(
        className,
        loading && 'loading',
        disabled && 'btn-disabled',
      )}
    >
      {label || children}
    </Btn>
  )
}

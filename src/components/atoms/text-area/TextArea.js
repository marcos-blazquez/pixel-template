import { classNames } from '@/app/common/helpers'
export default function TextArea({
  required = false,
  type = 'text',
  name = '',
  label = '',
  id = null,
  placeholder = '',
  error = '',
  value,
  handleChange,
  className,
  ...rest
}) {
  return (
    <div className={className}>
      <div className="relative isolate flex items-center pr-1">
        <label htmlFor={id} className="sr-only">
          {required && 'required field, '} {label}
        </label>
        <textarea
          type={type}
          name={name}
          id={id}
          placeholder={required ? placeholder.concat(' *') : placeholder}
          defaultValue={value}
          onChange={handleChange}
          className={classNames(
            (className =
              'textarea input-bordered w-full bg-white text-gray-400'),
            error && 'textarea-error',
          )}
          {...rest}
          //
        ></textarea>
      </div>
      {error && (
        <p className="mt-1 text-xs text-red-400" id={`${name}-error`}>
          {error}
        </p>
      )}
    </div>
  )
}

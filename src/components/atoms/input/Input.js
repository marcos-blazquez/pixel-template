import { classNames } from '@/app/common/helpers'
export default function Input({
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
        <input
          type={type}
          name={name}
          id={id}
          placeholder={required ? placeholder.concat(' *') : placeholder}
          defaultValue={value}
          onChange={handleChange}
          className={classNames(
            'input input-bordered mb-6 w-full bg-white text-gray-400',
            error && 'input-error',
          )}
          {...rest}
        />
        {error && (
          <p
            className="absolute top-[3.25rem] text-xs text-red-400"
            id={`${name}-error`}
          >
            {error}
          </p>
        )}
      </div>
    </div>
  )
}

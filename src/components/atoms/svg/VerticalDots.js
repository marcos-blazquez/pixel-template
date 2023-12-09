export default function VerticalDots(props) {
  const className = props?.className || ''
  const style = props?.style || {}
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2"
      height="402"
      viewBox="0 0 2 402"
      fill="none"
      className={className}
      style={style}
    >
      <path
        d="M1 0L1 401.5"
        stroke="#FF0096"
        strokeWidth="2"
        strokeDasharray="2 10"
      />
    </svg>
  )
}

export default function Numbers({ number, className, style }) {
  switch (number) {
    case 1:
      return (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          style={style}
        >
          <rect
            width="47.2142"
            height="47.2142"
            transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 0.786133 47.2141)"
            fill="#FF0096"
          />
          <rect
            width="6"
            height="6"
            transform="matrix(-1 0 0 1 21 11)"
            fill="white"
          />
          <rect
            width="7.21296"
            height="35.4637"
            transform="matrix(-1 0 0 1 28.1641 6.61182)"
            fill="white"
          />
        </svg>
      )
    case 2:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          className={className}
          style={style}
        >
          <rect
            width="47.2142"
            height="47.2142"
            transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 0.786133 47.2141)"
            fill="#FF0096"
          />
          <rect
            width="14.4259"
            height="7.21296"
            transform="matrix(-1 0 0 1 28.1641 6.01074)"
            fill="white"
          />
          <rect
            width="7.24146"
            height="7.24146"
            transform="matrix(-1 0 0 1 35.6768 13.2236)"
            fill="white"
          />
          <rect
            width="7.24146"
            height="7.24146"
            transform="matrix(-1 0 0 1 28.4639 20.4368)"
            fill="white"
          />
          <rect
            width="7.24146"
            height="7.24146"
            transform="matrix(-1 0 0 1 21.251 27.6497)"
            fill="white"
          />
          <rect
            width="21.6389"
            height="7.21296"
            transform="matrix(-1 0 0 1 35.6484 34.8625)"
            fill="white"
          />
        </svg>
      )
    case 3:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          className={className}
          style={style}
        >
          <rect
            width="47.2142"
            height="47.2142"
            transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 0.786133 47.2141)"
            fill="#FF0096"
          />
          <rect
            width="14.4259"
            height="7.21296"
            transform="matrix(-1 0 0 1 28.1641 6.01074)"
            fill="white"
          />
          <rect
            width="14.4259"
            height="7.21296"
            transform="matrix(-1 0 0 1 28.1641 35.4636)"
            fill="white"
          />
          <rect
            width="7.24146"
            height="7.24146"
            transform="matrix(-1 0 0 1 35.6768 13.2236)"
            fill="white"
          />
          <rect
            width="7.24146"
            height="7.24146"
            transform="matrix(-1 0 0 1 28.4639 20.4368)"
            fill="white"
          />
          <rect
            x="35.377"
            y="35.4636"
            width="7.21296"
            height="7.81404"
            transform="rotate(180 35.377 35.4636)"
            fill="white"
          />
        </svg>
      )
    default:
      return null
  }
}

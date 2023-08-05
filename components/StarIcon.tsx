interface Props {
  className?: string
}

const StarIcon: React.FC<Props> = ({ className }) => (
  <svg
    id='star'
    data-name='star be-graphic'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 13.15 13.02'
    className={className}
  >
    <defs>
      <style>{`.cls-1 { fill: #fff; }`}</style>
    </defs>
    <path
      className='cls-1'
      d='M6.57,12.64l-.76-2.23c-.5-1.47-1.66-2.63-3.13-3.13L.45,6.51l2.28-.83c1.4-.51,2.51-1.62,3.02-3.02L6.57,.38l.58,1.83c.56,1.77,1.95,3.16,3.72,3.72l1.83.58-1.88.74c-1.61.63-2.73,1.14-3.51,3.51l-.74,1.88Z'
    />
  </svg>
)

export default StarIcon

import PropTypes from 'prop-types'
import styles from './ImgTop.module.css'

const ImgTop = ({ src, name }) => {
  return (
    <img
      src={src}
      alt={name}
      className={styles['img-top']}
    />
  )
}

ImgTop.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default ImgTop

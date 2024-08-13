import PropTypes from 'prop-types'
import styles from './CardBody.module.css'

const CardBody = ({ children }) => {
  return <div className={styles['card-body']}>{children}</div>
}

CardBody.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CardBody

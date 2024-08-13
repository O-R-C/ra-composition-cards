import PropTypes from 'prop-types'
import ImgTop from '../ImgTop/ImgTop'
import CardBody from '../CardBody/CardBody'
import styles from './Card.module.css'

const Card = ({ img, title, text, btn }) => {
  const cardBodyChildren = (
    <>
      <h5 className={styles['title']}>{title}</h5>
      <p className={styles['text']}>{text}</p>
      <a
        href={btn.link}
        className={`${styles.btn} ${styles.btnPrimary}`}
      >
        {btn.text}
      </a>
    </>
  )

  return (
    <div className={styles.card}>
      {img && (
        <ImgTop
          src={img.src}
          name={img.name}
        />
      )}
      <CardBody>{cardBodyChildren}</CardBody>
    </div>
  )
}

Card.propTypes = {
  img: PropTypes.object,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  btn: PropTypes.object.isRequired,
}

export default Card

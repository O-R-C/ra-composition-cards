import CardWithoutImg from './CardWithoutImg'

class CardWithImg extends CardWithoutImg {
  constructor({ img, title, text, btn }) {
    super({ title, text, btn })
    this.img = img
  }
}

export default CardWithImg

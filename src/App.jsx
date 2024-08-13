import Card from './components/Card/Card'
import CardWithImg from './js/CardWithImg'
import CardWithoutImg from './js/CardWithoutImg'

const firstCard = new CardWithImg({
  img: {
    src: 'https://pet-mir.ru/wp-content/uploads/2016/06/dzhek-rassel-terer-5.jpeg',
    name: 'img',
  },
  title: 'Card 1',
  text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  btn: {
    link: '#',
    text: 'Go somewhere',
  },
})

const secondCard = new CardWithoutImg({
  title: 'Card 2',
  text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  btn: {
    link: '#',
    text: 'Go somewhere',
  },
})

function App() {
  return (
    <div className='app'>
      <Card {...firstCard} />
      <Card {...secondCard} />
    </div>
  )
}

export default App

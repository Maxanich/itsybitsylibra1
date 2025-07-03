import Link from 'next/link'

const puzzles = [
  {
    id: '1',
    title: 'Паззл с видом на море',
    description: 'Красивый паззл с видом на океан, 500 деталей.',
    detailsCount: 500,
    owner: 'Алексей',
    city: 'Москва',
    image: 'https://cdn.pixabay.com/photo/2016/11/29/05/36/puzzle-1868725_960_720.jpg',
    addedAt: '2025-06-28'
  },
  {
    id: '2',
    title: 'Городской пейзаж',
    description: 'Паззл с изображением ночного города, 1000 деталей.',
    detailsCount: 1000,
    owner: 'Марина',
    city: 'Санкт-Петербург',
    image: 'https://cdn.pixabay.com/photo/2016/04/24/16/00/jigsaw-1342436_960_720.jpg',
    addedAt: '2025-06-20'
  },
  {
    id: '3',
    title: 'Картина Ван Гога',
    description: 'Паззл с репродукцией картины Ван Гога, 750 деталей.',
    detailsCount: 750,
    owner: 'Иван',
    city: 'Новосибирск',
    image: 'https://cdn.pixabay.com/photo/2014/04/03/10/55/starry-night-310859_960_720.jpg',
    addedAt: '2025-05-30'
  }
]

export default function Home() {
  return (
    <div>
      <header className="header">itsybitsylibra - Обмен паззлами</header>
      <div className="container">
        <h2>Последние добавленные паззлы</h2>
        {puzzles.map(puzzle => (
          <div key={puzzle.id} className="puzzle-card">
            <img src={puzzle.image} alt={puzzle.title} width="100%" height="auto" />
            <h3>{puzzle.title}</h3>
            <p>{puzzle.description}</p>
            <p><b>Деталей:</b> {puzzle.detailsCount}</p>
            <p><b>Владелец:</b> {puzzle.owner} ({puzzle.city})</p>
            <Link href={`/puzzle/${puzzle.id}`}><button>Подробнее</button></Link>
          </div>
        ))}
      </div>
    </div>
  )
}
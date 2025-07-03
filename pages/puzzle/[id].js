import { useRouter } from 'next/router'
import { useState } from 'react'
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

const userPuzzles = [
  {
    id: '10',
    title: 'Паззл с цветами',
    detailsCount: 300
  },
  {
    id: '11',
    title: 'Паззл с животными',
    detailsCount: 400
  }
]

export default function PuzzlePage() {
  const router = useRouter()
  const { id } = router.query

  const puzzle = puzzles.find(p => p.id === id)

  const [showTradeForm, setShowTradeForm] = useState(false)
  const [selectedPuzzleId, setSelectedPuzzleId] = useState('')

  if (!puzzle) {
    return <p>Паззл не найден</p>
  }

  function handleTradeSubmit() {
    alert(`Вы предложили обмен: ваш паззл с ID ${selectedPuzzleId} на паззл "${puzzle.title}"`)
    setShowTradeForm(false)
  }

  return (
    <div>
      <header className="header">itsybitsylibra - Обмен паззлами</header>
      <div className="container">
        <h2>{puzzle.title}</h2>
        <img src={puzzle.image} alt={puzzle.title} width="100%" height="auto" />
        <p>{puzzle.description}</p>
        <p><b>Деталей:</b> {puzzle.detailsCount}</p>
        <p><b>Владелец:</b> {puzzle.owner} ({puzzle.city})</p>
        {!showTradeForm && <button onClick={() => setShowTradeForm(true)}>Предложить обмен</button>}
        {showTradeForm && (
          <div style={{marginTop: '20px'}}>
            <p>Выберите паззл из своих для предложения обмена:</p>
            <select value={selectedPuzzleId} onChange={e => setSelectedPuzzleId(e.target.value)}>
              <option value="">-- Выберите паззл --</option>
              {userPuzzles.map(up => (
                <option key={up.id} value={up.id}>{up.title} ({up.detailsCount} деталей)</option>
              ))}
            </select>
            <button onClick={handleTradeSubmit} disabled={!selectedPuzzleId} style={{marginLeft: '10px'}}>Отправить предложение</button>
            <button onClick={() => setShowTradeForm(false)} style={{marginLeft: '10px'}}>Отмена</button>
          </div>
        )}
        <p><Link href="/">← На главную</Link></p>
      </div>
    </div>
  )
}
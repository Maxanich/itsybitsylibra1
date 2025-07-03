import Link from 'next/link'

const userInfo = {
  name: 'Алексей',
  city: 'Москва',
  puzzles: [
    { id: '10', title: 'Паззл с цветами', detailsCount: 300 },
    { id: '11', title: 'Паззл с животными', detailsCount: 400 },
  ]
}

export default function Profile() {
  return (
    <div>
      <header className="header">itsybitsylibra - Личный кабинет</header>
      <div className="container">
        <h2>Профиль пользователя</h2>
        <p><b>Имя:</b> {userInfo.name}</p>
        <p><b>Город:</b> {userInfo.city}</p>
        <h3>Паззлы на обмен</h3>
        {userInfo.puzzles.map(puzzle => (
          <div key={puzzle.id} className="puzzle-card">
            <h4>{puzzle.title}</h4>
            <p>Деталей: {puzzle.detailsCount}</p>
          </div>
        ))}
        <Link href="/">← На главную</Link>
      </div>
    </div>
  )
}
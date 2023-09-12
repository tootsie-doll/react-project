import React from 'react'
import './App.css'
import Button from './components/Button/Button.jsx'
import JournalItem from './components/JournalItem/JournalItem.jsx'
import CardButton from './components/CardButton/CardButton.jsx'

function App() {
    const data = [
        {
            title: 'Подготовка к обновлению курсов',
            text: 'Сегодня провёл весь день за...',
            date: new Date(),
        },
        {
            title: 'Поход в годы',
            text: 'Думал, что очень много време...',
            date: new Date(),
        },
    ]
    return (
        <>
            <h2>Проект</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusantium aliquid, aspernatur cum cupiditate dolor, dolorum
                enim ex id inventore ipsum iste laboriosam minima minus nemo
                nobis numquam placeat, repellendus voluptatu. Aperiam
                consequatur doloremque ea eaque exercitationem illo minus
                numquam voluptas?
            </p>
            <Button />
            <CardButton>Новое воспоминание</CardButton>
            <CardButton>
                <JournalItem
                    title={data[0].title}
                    text={data[0].text}
                    date={data[0].date}
                />
            </CardButton>
            <CardButton>
                <JournalItem
                    title={data[1].title}
                    text={data[1].text}
                    date={data[1].date}
                />
            </CardButton>
        </>
    )
}

export default App

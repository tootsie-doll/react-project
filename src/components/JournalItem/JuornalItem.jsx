import './JournalItem.css';

function JournalItem() {
  const title = 'Подготовка к обновлению курсов',
    date = new Date(),
    text = 'Горные лыжи открывают удивительные природные ландшафты';

  return (
    <div className="journal-item">
      <h2 className="journal-item__header">{title}</h2>
      <h2 className="journal-item__body">
        <div className="journal-item__date">{date.toDateString()}</div>
        <div className="journal-item__text">{text}</div>
      </h2>
    </div>
  );
}

export default JournalItem;

import React from 'react';
import './App.css';
import Button from './components/Button/Button.jsx';
import JournalItem from './components/JournalItem/JuornalItem.jsx';
function App() {
  return (
    <>
      <h1>Проект</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto assumenda, cumque dolor dolorem minima
        nobis pariatur quod repellat tempora! At dicta, doloremque harum quas quibusdam tempora tenetur veritatis.
        Accusamus doloremque dolorum magni neque nostrum officiis! Adipisci quaerat, ullam. Maxime.
      </p>
      <Button />
      <JournalItem />
    </>
  );
}

export default App;

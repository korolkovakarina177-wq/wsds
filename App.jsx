function App() {
  return (
    <>
      {/* Семантические теги */}
      <header>
        <nav>Меню сайта</nav>
      </header>

      <main>
        <section>
          <h1>Добро пожаловать в мой проект</h1>
          
          {/* Картинка с ленивой загрузкой (Задание 2) */}
          <img 
  src="/photo.jpg" 
  loading="lazy" 
  alt="Описание моей картинки" 
  width="800" 
  height="600" 
/>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 Мой проект</p>
      </footer>
    </>
  )
}

export default App;
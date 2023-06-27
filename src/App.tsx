import ArticleCarousel from "./ArticleCarousel"
import Counter from "./Counter"

function App() {

  const containerStyle = {
    display: "flex",
    flexDirection: "column" as "column",
    alignItems: "center",
  }

  return (
    <div className="container" style={containerStyle}>
      <header>
        <h1>Hello World!</h1>
      </header>

      <main>
        <Counter />

        <ArticleCarousel />

      </main>

      <footer>
        <p>
          🄯 Copyleft 2023
        </p>
      </footer>
    </div>
  )
}

export default App

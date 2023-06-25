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

        <section className="article-carousel">
          <h2>Article Carousel Example</h2>

          <button>Previous Article</button>
          <button>Next Article</button>

          <article>
            <h3>Proin Risus</h3>

            <p>
              Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.
            </p>

            <blockquote>
              Sed ante. Vivamus tortor. Duis mattis egestas metus.
            </blockquote>
          </article>

          <article>
            <h3>Donec ut Dolor</h3>
            
            <p>
              Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.
            </p>

            <blockquote>
              Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.
            </blockquote>
          </article>

          <article>
            <h3>Pellentesque Ultrices Mattis Odio</h3>

            <p>
              Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.
            </p>

            <blockquote>
              Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.
            </blockquote>
          </article>
        </section>
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

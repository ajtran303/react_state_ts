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
            <h3>Article Title 1</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam deserunt 
              aliquam ab accusantium vero cupiditate perferendis, provident quibusdam 
              sequi porro at quidem, excepturi voluptate impedit numquam eius molestias ea earum?
            </p>

            <blockquote>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Odio ut enim 
              blandit volutpat maecenas volutpat blandit aliquam etiam.
            </blockquote>
          </article>

          <article>
            <h3>Article Title 2</h3>
            
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam deserunt 
              aliquam ab accusantium vero cupiditate perferendis, provident quibusdam 
              sequi porro at quidem, excepturi voluptate impedit numquam eius molestias ea earum?
            </p>

            <blockquote>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Odio ut enim 
              blandit volutpat maecenas volutpat blandit aliquam etiam.
            </blockquote>
          </article>

          <article>
            <h3>Article Title 3</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam deserunt 
              aliquam ab accusantium vero cupiditate perferendis, provident quibusdam 
              sequi porro at quidem, excepturi voluptate impedit numquam eius molestias ea earum?
            </p>

            <blockquote>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Odio ut enim 
              blandit volutpat maecenas volutpat blandit aliquam etiam.
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

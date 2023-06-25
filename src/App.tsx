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
        <article>
          <h2>Article Title 1</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam deserunt 
            aliquam ab accusantium vero cupiditate perferendis, provident quibusdam 
            sequi porro at quidem, excepturi voluptate impedit numquam eius molestias ea earum?
          </p>

          <blockquote cite="https://example.com/">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Odio ut enim 
            blandit volutpat maecenas volutpat blandit aliquam etiam.
          </blockquote>
        </article>

        <article>
          <h2>Article Title 2</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam deserunt 
            aliquam ab accusantium vero cupiditate perferendis, provident quibusdam 
            sequi porro at quidem, excepturi voluptate impedit numquam eius molestias ea earum?
          </p>

          <blockquote cite="https://example.com/">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Odio ut enim 
            blandit volutpat maecenas volutpat blandit aliquam etiam.
          </blockquote>
        </article>


        <article>
          <h2>Article Title 3</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam deserunt 
            aliquam ab accusantium vero cupiditate perferendis, provident quibusdam 
            sequi porro at quidem, excepturi voluptate impedit numquam eius molestias ea earum?
          </p>

          <blockquote cite="https://example.com/">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Odio ut enim 
            blandit volutpat maecenas volutpat blandit aliquam etiam.
          </blockquote>
        </article>

        <section className="bulletpoints">
          <h3>Section Title</h3>

          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Elementum integer enim 
              neque volutpat ac tincidunt vitae semper. <a href="https://example.com/" target="blank">Click me</a>
            </li>

            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Elementum integer enim 
              neque volutpat ac tincidunt vitae semper. <a href="https://example.com/" target="blank">Click me</a>
            </li>

            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Elementum integer enim 
              neque volutpat ac tincidunt vitae semper. <a href="https://example.com/" target="blank">Click me</a>
            </li>
          </ul>
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

import { useState } from "react"

const article1 = (
  <article>
    <h3>Proin Risus</h3>

    <p>
      Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.
    </p>

    <blockquote>
      Sed ante. Vivamus tortor. Duis mattis egestas metus.
    </blockquote>
  </article>
)

const article2 = (
  <article>
    <h3>Donec ut Dolor</h3>

    <p>
      Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.
    </p>

    <blockquote>
      Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.
    </blockquote>
  </article>
)

const article3 = (
  <article>
    <h3>Pellentesque Ultrices Mattis Odio</h3>

    <p>
      Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.
    </p>

    <blockquote>
      Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.
    </blockquote>
  </article>
)

const articles = [article1, article2, article3];

function ArticleCarousel() {
  const [index, setIndex] = useState<number>(0);

  function handlePreviousArticleClick(): void {
    let previousIndex;
    if (index === 0) {
      previousIndex = articles.length - 1
    } else {
      previousIndex = index - 1
    }

    setIndex(previousIndex);
  }

  function handleNextArticleClick(): void {
    let nextIndex;
    if (index === 2) {
      nextIndex = 0
    } else {
      nextIndex = index + 1
    }

    setIndex(nextIndex);
  }

  return (
    <section className="article-carousel">
      <h2>Article Carousel Example</h2>

      <button onClick={handlePreviousArticleClick}>Previous Article</button>
      <button onClick={handleNextArticleClick}>Next Article</button>

      {articles[index]}
    </section>
  )
}

export default ArticleCarousel

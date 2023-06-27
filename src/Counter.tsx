import { useState } from "react"

function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <section className="counter">
      <h2>Counter Example</h2>

      <p>
        The current value is: {count}
      </p>

      <button onClick={() => setCount(count + 1)}>Increment value</button>
      <button onClick={() => setCount(count - 1)}>Decrement value</button>
    </section>
  )
}

export default Counter

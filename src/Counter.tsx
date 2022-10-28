import { useState } from 'react'
type CounterProps = {
  initialCount: number
}
const Counter: React.FC<CounterProps> = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount)
  const increment = () => setCount((prev) => prev + 1)
  const decrement = () => setCount((prev) => prev - 1)
  const restart = () => setCount(0)
  const switchSign = () => setCount((prev) => prev * -1)
  return (
    <div>
      <h1>
        Count <h3 data-testid='count'>{count}</h3>
      </h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={restart}>Restart</button>
      <button onClick={switchSign}>Switch Sign</button>
    </div>
  )
}

export default Counter

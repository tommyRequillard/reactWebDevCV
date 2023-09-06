import {useDispatch, useSelector} from "react-redux"
import {decrement, increment, reset} from "./../features/Counter.tsx"

const Counter = () => {
  // @ts-ignore
  const total = useSelector(state => state.counter.total)
  const dispatch = useDispatch()

  return (
    <div className="flex justify-center flex-col mx-2 mt-8 gap-2">
      <h1 className="flex justify-center">{total}</h1>
      <div className="flex justify-center mx-2 gap-2 mb-8">
        <button
          className="rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={() => dispatch(increment())}>Increase
        </button>
        <button
          className="rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={() => dispatch(reset())}>Reset
        </button>
        <button
          className="rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={() => dispatch(decrement())}>Decrease
        </button>
      </div>
    </div>
  )
}

export default Counter
import MainLayout from "./../layouts/MainLayout.tsx"
import MainArea from "./../layouts/MainArea.tsx"
import CounterRedux from '../components/CounterRedux.tsx'

const Counter = () => {
  return (
    <>
      <MainLayout/>
      <MainArea>
        <CounterRedux/>
      </MainArea>
    </>
  )
}

export default Counter

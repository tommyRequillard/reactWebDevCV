import MainLayout from "./../layouts/MainLayout.tsx"
import MainArea from "./../layouts/MainArea.tsx"
import Counter from './../components/Counter.tsx'

const Reports = () => {
  return (
    <>
      <MainLayout/>
      <MainArea>
        <Counter/>
      </MainArea>
    </>
  )
}

export default Reports

import AppRouter from "./router/AppRouter.tsx"
import {Provider} from "react-redux"
import {store} from "./store/Store.tsx"
import ErrorBoundary from "./components/ErrorBoundary.tsx"

function App() {

  return (
    <ErrorBoundary>
      <Provider store={store}>
        <AppRouter/>
      </Provider>
    </ErrorBoundary>
  )
}

export default App

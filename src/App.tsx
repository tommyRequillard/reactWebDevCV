import AppRouter from "./router/AppRouter.tsx"
import {Provider} from "react-redux"
import {store} from "./store/Store.tsx"

function App() {

  return (
    <Provider store={store}>
      <AppRouter/>
    </Provider>
  )
}

export default App

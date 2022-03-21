import { Provider } from 'react-redux';
import './App.css';

import store from './Store';
import Todo from './Components/Views/Todo/TodoPage';

function App() {
  return (
    <Provider store={store}>
      <Todo></Todo>
    </Provider>
  );
}

export default App;
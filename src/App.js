import React  from 'react';

import Todo from './containers/Todo/Todo';
import Title from './components/Title/Title';

const App = () => (
  <>
    <Title title="todos" />
    <Todo />
  </>
);

export default App;

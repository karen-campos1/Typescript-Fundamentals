import TypeScriptTypes from "./components/TypeScriptTypes";
import ColorList from './components/ColorList';
import EvenNumbers from './components/EvenNumbers';
import UserList from './components/UserList';

const App: React.FC = () => {
  
  return (
    <>
    {/* THIS IS TASK ONE */}
  <TypeScriptTypes/>
      {/* THIS IS TASK TWO */}
      <ColorList />
      <EvenNumbers />
      <UserList />
    </>
  )
}

export default App

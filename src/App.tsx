import Main from './components/main';
import Sidebar from './components/sidebar';

const App: React.FC = () => {
  return (
    <div className='app'>
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;

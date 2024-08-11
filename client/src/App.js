import './App.scss';
import AppRouter from './router/AppRouter';
// AuthContext
import { AuthContext } from './context/AuthContext';
// AuthHook
import { useAuth } from './hooks/AuthHook';

function App() {
  const { login, logout, token, userId, isReady } = useAuth();
  const isLogin = !!token;
  
  return (
    <AuthContext.Provider value={{ login, logout, token, userId, isReady, isLogin }}>
      <div className='app'>
        <AppRouter isLogin={isLogin} />
      </div>
    </AuthContext.Provider>
  )
}

export default App;

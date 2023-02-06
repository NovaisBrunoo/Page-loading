
import './style.css';
import BackGround from '../../components/background'
import closeEyes from '../../assets/close-eye.svg'
import openEyes from '../../assets/open-eye.svg'
import { useRef, useState } from 'react';

function App() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const loadingRef = useRef();
  const formRef = useRef();
  const loaginRef = useRef();
  const [error, setError] = useState('')




  function handelForm(event) {
    event.stopPropagation()
    event.preventDefault()

    setError('')

    if (!email) {
      return setError('Preencha com um email valido')
    }
    if (!password) {
      return setError('Preencha com uma senha valida')
    }
    if (password.length <= 7) {
      return setError('A senha tem que ter no minimo 8 caracteres')
    }

    setEmail('');
    setPassword('');

    loadingRef.current.style.display = 'block'
    formRef.current.style.display = 'none'
    loaginRef.current.style.backgroundColor = 'unset'

  }




  return (
    <div className="App">
      <BackGround />
      <div className='loginBox' ref={loaginRef}>
        <form onSubmit={handelForm} ref={formRef}>
          <h1>Login</h1>
          <input
            type='text'
            placeholder='E-mail'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className='password'>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder='Senha'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <img
              src={showPassword ? openEyes : closeEyes}
              alt='Show Password'
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
          <span>Cadastrar-se</span>
          {error && <strong className='error'>{error}</strong>}
          <button>Login</button>
        </form>
        <div className='loading' ref={loadingRef}>
          <span className="loader"></span>
        </div>
      </div>


    </div >
  );
}

export default App;

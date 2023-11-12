import logo from './logo.svg';
import './App.css';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="login-title"></div>

        <div className="login-form">

          <img className="login-icon" width="64" height="64" src="https://img.icons8.com/pastel-glyph/64/user-male-circle.png" alt="user-male-circle"/>

          <label className="login-text" htmlFor="username">Nome de Usuário:</label>
          <input className="login-field" type="text" id="username"  />

          <label className="login-text" htmlFor="password">Senha:</label>
          <input className="login-field" type="password" id="password" />
          <button className="login-button">Entrar</button>

        </div>
      </header>

      <p className="fake-footer">created by Gabriel Mendez</p>

    </div>
  );
}

export default App;

import React from 'react';

import Card from './card.jsx';

import './login.scss';

class Login extends React.Component {
  render() {
    return (
      <div className="login">
        <Card
          withTitle
          title="Logga in"
          subtitle="Autentiera dig med ditt X-lösenord"
          >
          <form>
            <fieldset className="form-group">
              <label htmlFor="username">Användarnamn</label>
              <input className="form-control" type="text" name="username" />
            </fieldset>

            <fieldset className="form-group">
              <label htmlFor="password">Lösenord</label>
              <input className="form-control" type="password" name="password" />
            </fieldset>

            <button type="submit" className="btn btn-primary">Logga in</button>
          </form>
        </Card>
      </div>
    )
  }
}

export default Login;

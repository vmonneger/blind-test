import React, { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  const [token, setToken] = useState('')

  const CLIENT_ID = 'bb98101bfcad442fabbc32052e132d36'
  const REDIRECT_URI = 'http://localhost:3000'
  const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
  const RESPONSE_TYPE = 'token'

  useEffect(() => {
    const hash: string = window.location.hash
    // Je sais pas comment typer ici
    let token: string | null | undefined = window.localStorage.getItem('token')

    if (!token && hash) {
        token = hash
          .substring(1)
          .split('&')
          .find((el) => el.startsWith('access_token'))
          ?.split('=')[1]
      }
      if (token) {
        localStorage.setItem('token', token)
        window.location.hash = ''
        setToken(token)
      }
    }
  })

  return (
    <div className="App">
      <header className="App-header">
        <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
          Login to Spotify
        </a>
      </header>
    </div>
  )
}

export default App

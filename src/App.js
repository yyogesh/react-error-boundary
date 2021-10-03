import React from 'react';
import './App.css';
// import ErrorBoundary from './components/ErrorBoundary';
// import UpdateCount from './components/UpdateCount';
import { ErrorBoundary } from 'react-error-boundary'

// function Greeting({ subject }) {
//   return <div>Hello {subject.toUpperCase()}</div>
// }
// function Farewell({ subject }) {
//   return <div>Goodbye {subject.toUpperCase()}</div>
// }

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

function Bomb({ username }) {
  if (username === 'bomb') {
    throw new Error('💥 CABOOM 💥')
  }
  return `Hi ${username}`
}


// function Greeting({ subject }) {
//   try {
//     return <div>Hello {subject.toUpperCase()}</div>
//   } catch (error) {
//     return <ErrorFallback error={error} />
//   }
// }
// function Farewell({ subject }) {
//   try {
//     return <div>Goodbye {subject.toUpperCase()}</div>
//   } catch (error) {
//     return <ErrorFallback error={error} />
//   }
// }

function Greeting({ subject }) {
  return <div>Hello {subject.toUpperCase()}</div>
}
function Farewell({ subject }) {
  return <div>Goodbye {subject.toUpperCase()}</div>
}

function App() {
  const [username, setUsername] = React.useState('')
  const usernameRef = React.useRef(null)
  return (
    <div className="App">
      <label>
        {`Username (don't type "bomb"): `}
        <input
          placeholder={`type "bomb"`}
          value={username}
          onChange={e => setUsername(e.target.value)}
          ref={usernameRef}
        />
      </label>
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {
        setUsername('')
        usernameRef.current.focus()
      }}
        resetKeys={[username]}>
        {/* <Greeting />
        <Farewell /> */}
        <Bomb username={username} />
      </ErrorBoundary>
      {/* <ErrorBoundary>
        <Farewell />
      </ErrorBoundary> */}
    </div>
  );
}

// function App() {
//   try {
//     return (
//       <div>
//         <Greeting />
//         <Farewell />
//       </div>
//     )
//   } catch (error) {
//     return <ErrorFallback error={error} />
//   }

export default App;

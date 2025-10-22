// src/App.jsx
function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>👋 Hello React!</h1>
      <p style={styles.text}>Welcome to your first React app powered by Vite ⚡</p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '100px',
    fontFamily: 'Arial, sans-serif'
  },
  heading: {
    color: '#61dafb',
    fontSize: '48px'
  },
  text: {
    color: '#333',
    fontSize: '20px'
  }
};

export default App;

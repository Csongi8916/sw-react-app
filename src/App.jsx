import CardContainer from './components/CardContainer/CardContainer.jsx';
import CharacterContextProvider from './store/character-context.jsx';

function App() {
  return (
    <CharacterContextProvider>
      <main>
        <div style={{margin: 'auto', width: '60%'}}>
          <h1 style={{textAlign: 'center'}}>Star Wars API</h1> 
        </div>
        <CardContainer></CardContainer>
      </main>
    </CharacterContextProvider>
  );
}

export default App;

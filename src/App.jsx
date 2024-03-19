import CardContainer from './components/CardContainer/CardContainer.jsx';
import CharacterContextProvider from './store/character-context.jsx';
import Filter from './components/Filter/Filter.jsx';

function App() {
  return (
    <CharacterContextProvider>
      <main>
        <div style={{margin: 'auto', width: '60%'}}>
          <h1 style={{textAlign: 'center'}}>Star Wars API</h1> 
        </div>
        <Filter />
        <CardContainer />
      </main>
    </CharacterContextProvider>
  );
}

export default App;

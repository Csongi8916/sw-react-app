import { createContext, useReducer } from 'react';

export const CharacterContext = createContext({
  characters: [],
  addCharacters: () => {},
  filterCharacters: () => {},
});

function characterReducer(state, action) {
  debugger;
  if (action.type === 'ADD_CHARACTERS') {
    const newCharacters = action.payload;
    return {
      ...state,
      characters: newCharacters,
    };
  }

  if (action.type === 'FILTER_CHARACTERS') {
  }

  return state;
}

export default function CharacterContextProvider({ children }) {
  const [characterState, characterDispatch] = useReducer(
    characterReducer,
    {
      characters: [],
    }
  );

  function handleAddCharacters(characters) {
    characterDispatch({
      type: 'ADD_CHARACTERS',
      payload: characters,
    });
  }

  function handleFilterCharacters(filteredCharacters) {
    characterDispatch({
      type: 'FILTER_CHARACTERS',
      payload: filteredCharacters,
    });
  } 

  const ctxValue = {
    characters: characterState.characters,
    addCharacters: handleAddCharacters,
    filterCharacters: handleFilterCharacters,
  };

  return (
    <CharacterContext.Provider value={ctxValue}>{children}</CharacterContext.Provider>
  );
}
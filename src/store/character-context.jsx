import { createContext, useReducer } from 'react';

export const CharacterContext = createContext({
  characters: [],
  addCharacters: () => {},
  filterCharacters: () => {},
});

function characterReducer(state, action) {
  if (action.type === 'ADD_CHARACTERS') {
    const newCharacters = action.payload;
    return {
      ...state,
      characters: newCharacters,
    };
  }

  if (action.type === 'FILTER_CHARACTERS') {
    const characters = [...state.characters];
    const neededChars = action.payload.toLowerCase();
    const filteredCharacters = characters.map((character) => {
      character.filtered = character.name.toLowerCase().includes(neededChars) ? true : false;
      return character;
    });
    return {
      ...state,
      characters: filteredCharacters,
    };
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

  function handleFilterCharacters(nameFilter) {
    characterDispatch({
      type: 'FILTER_CHARACTERS',
      payload: nameFilter,
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
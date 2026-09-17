import React, { createContext, useContext, useReducer } from 'react';
import type { ReactNode } from 'react';

interface AppState {
  audioInitialized: boolean;
  audioMuted: boolean;
  activeSection: string;
  letterOpened: boolean;
  timeCapsulePlayed: boolean;
}

type Action =
  | { type: 'INIT_AUDIO' }
  | { type: 'TOGGLE_MUTE' }
  | { type: 'SET_SECTION'; payload: string }
  | { type: 'OPEN_LETTER' }
  | { type: 'PLAY_CAPSULE' };

const initialState: AppState = {
  audioInitialized: false,
  audioMuted: false,
  activeSection: 'cover',
  letterOpened: false,
  timeCapsulePlayed: false,
};

function appReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'INIT_AUDIO':
      return { ...state, audioInitialized: true };
    case 'TOGGLE_MUTE': {
      return { ...state, audioMuted: !state.audioMuted };
    }
    case 'SET_SECTION':
      return { ...state, activeSection: action.payload };
    case 'OPEN_LETTER':
      return { ...state, letterOpened: true };
    case 'PLAY_CAPSULE':
      return { ...state, timeCapsulePlayed: true };
    default:
      return state;
  }
}

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<Action>;
} | null>(null);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};

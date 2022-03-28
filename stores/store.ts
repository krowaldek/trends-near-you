import create from 'zustand'

interface AppState {
  location: string
  setLocation: (loc: string) => void
}

export const useStore = create<AppState>((set) => ({
  // initial state
  location: '',
  // methods for manipulating state
  setLocation: (loc: string) => {
    set((state) => ({
      location: loc
    }))
  }
}))

import create from 'zustand'
import { Tag } from '../common/model'

interface AppState {
  location: string
  setLocation: (loc: string) => void,
  searchValue: string
  setSearchValue: (searchValue: string) => void,
  tags: Tag[],
  setTags: (tags: Tag[]) => void
}

export const useStore = create<AppState>((set) => ({
  location: '',
  setLocation: (loc: string) => {
    set((state) => ({
      location: loc
    }))
  },
  searchValue: '',
  setSearchValue: (searchValue: string) => {
    set(() => ({
      searchValue: searchValue
    }))
  },
  tags: [],
  setTags: (tags: Tag[]) => {
    set(() => ({
      tags: tags
    }))
  }
}))

import { create } from 'zustand'

interface Props {
  buttonClick: {
    label: string,
    value: boolean
  },
  setButtonClick: (label: string, value: boolean) => void,
}

export const useUtiltiyStore = create<Props>((set) => ({
  buttonClick: {
    label: '',
    value: false
  },
  query: {},
  activeTab: 'All',
  setButtonClick: (label: string, value: boolean) => set(() => ({ buttonClick: { label, value } })),
}));
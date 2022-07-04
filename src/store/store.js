import create from 'zustand'

const useStore = create((set) => ({
    people: ['Santiago', 'Jerónimo'],
    addPerson: (person)=>set((state)=>({
        people: [...state.people, person]
    }))
}
))

export default useStore
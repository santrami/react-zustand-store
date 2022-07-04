import create from 'zustand'

const useStore = create((set) => ({
    people: [
        {
            id: 1,
            name:'Santiago'
        },
        {
            id: 2,
            name:'Jerónimo'
        },
        {
            id: 3,
            name:'Fernando'
        }
    ],
    addPerson: (person)=>set((state)=>({
        people: [...state.people, person]
    }))
}
))

export default useStore
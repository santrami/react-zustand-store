import useStore from "../store/store";

export default function People() {
    const people = useStore(state => state.people)

    return (
        <div>
            <ul>
                {
                    people.map(p => <li key={p.id}>{p.name}</li>)
                }
            </ul>
        </div>
    )
}

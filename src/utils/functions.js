export default function filteredList(list, currentFilter) {
    switch (currentFilter) {
        case 'all':
            return list

        case 'active':
            return list.filter((item) => {
                return item.completed === false
            })

        case 'completed':
            return list.filter((item) => {
                return item.completed === true
            })

        default:
            throw new Error("Invalid filter")
    }
}

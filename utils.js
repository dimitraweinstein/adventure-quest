export function findById(someArray, id) {
    for (let item of someArray) {
        if (item.id === id) {
            return item;
        }
        
    }
    return null;
}
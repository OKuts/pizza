export const isValid = (data) => {
    if (typeof data.restaurant !== 'string'
        || !(['Domino’s Pizza', 'McDonald’s', 'KFC'].includes(data.restaurant))) return false;
    if (new Date() - new Date(data.checkout) < 0) return false;
    if (!data.orders.every((item) =>
        Object.keys(item).sort().join('') === 'countidpricetitle' &&
        typeof item.id === 'number' &&
        item.id > 0 &&
        item.title.length > 5 &&
        item.title.length < 30 &&
        typeof item.count === 'number' &&
        item.count > 0 &&
        typeof item.price === 'number' &&
        item.price > 0
    )) return false;

    return true;
};

export const dateFormat = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        hour:'numeric',
        minute:'numeric'
    });
}
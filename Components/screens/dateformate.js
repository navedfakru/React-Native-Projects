export default function formatDate(data) {
  const date = new Date(data);
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        timeZone: 'UTC'
    };
    return date.toLocaleDateString('en-US', options);
}

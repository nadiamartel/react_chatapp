//  export const formatDate = (objDate) => {
//     const date = new Date(objDate.seconds * 1000);

//     const time = `${date.getHours()}:${date.getMinutes()}`;

//     const modif = {
//         month : "long",
//         day : "numeric"
//     }

//     const newDate = date.toDateString("en-US",modif);
//     return `${newDate} - ${time}`;
// }

//corregir el formato de hora que aparece en pantalla

export const formatDate = (objDate) => {
    if (!objDate || !objDate.seconds) {
        return "Invalid date";
    }

    const date = new Date(objDate?.seconds * 1000);

    const hours = date.getHours();
    const minutes = date.getMinutes();

    const formattedDate = new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    }).format(date);

    const formattedTime = `${hours}.${minutes < 10 ? '0' : ''}${minutes}`;

    return `${formattedDate} - ${formattedTime}`;
}

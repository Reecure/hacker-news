const padZero = (value: number) => {
    return value < 10 ? `0${value}` : `${value}`;
};

export const formatDate = (unixDate: number) => {
    const date = new Date(unixDate * 1000);

    const year = date.getFullYear();
    const month = padZero(date.getMonth() + 1);
    const day = padZero(date.getDate());
    const hours = padZero(date.getHours());
    const minutes = padZero(date.getMinutes());

    return `${year}-${month}-${day} ${hours}:${minutes}`;
};
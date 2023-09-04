export const scrollLeft = (element: { current: { clientWidth: number; scrollLeft: number; }; }) => {
    const width = element.current.clientWidth;
    element.current.scrollLeft = element.current.scrollLeft - width;
}

export const scrollRight = (element: { current: { clientWidth: number; scrollLeft: number; }; }) => {
    const width = element.current.clientWidth;
    element.current.scrollLeft = element.current.scrollLeft + width;
}
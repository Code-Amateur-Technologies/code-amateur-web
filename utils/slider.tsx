export const slideLeft = (element: { current: { clientWidth: number; scrollLeft: number; }; }) => {
    const width = element.current.clientWidth;
    element.current.scrollLeft = element.current.scrollLeft - width;
}

export const slideRight = (element: { current: { clientWidth: number; scrollLeft: number; }; }) => {
    const width = element.current.clientWidth;
    element.current.scrollLeft = element.current.scrollLeft + width;
}
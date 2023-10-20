"use client";

import { useEffect } from 'react';
import { hotjar } from 'react-hotjar';

const Hotjar = () => {
    useEffect(() => {
        hotjar.initialize(3702405, 6)
    }, [])

    return <></>;
};

export default Hotjar;

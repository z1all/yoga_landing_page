import {useEffect, useState} from "react";

export function usePrevious<T>(currentNumber: T) {
    const [curNumber, setCurNumber] = useState(currentNumber);
    const [prevNumber, setPrevNumber] = useState(currentNumber);

    useEffect(() => {
        setCurNumber(prev => { setPrevNumber(prev); return currentNumber; })
    }, [currentNumber]);

    return [prevNumber, curNumber];
}
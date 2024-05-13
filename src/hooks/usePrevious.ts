import {useEffect, useState} from "react";

export function usePrevious<T>(currentNumber: T) {
    const [prevArr, setPrevArr] = useState<T[]>([currentNumber, currentNumber])

    useEffect(() => {
        if (prevArr.length === 2) {
            // let newPrevArr = [prevArr[1], currentNumber];
            setPrevArr([prevArr[1], currentNumber]);
        }
    }, [currentNumber]);

    return prevArr;

    // const [curNumber, setCurNumber] = useState(currentNumber);
    // const [prevNumber, setPrevNumber] = useState(currentNumber);
    //
    // useEffect(() => {
    //     setCurNumber(prev => { setPrevNumber(prev); return currentNumber; })
    // }, [currentNumber]);
    //
    // return [prevNumber, curNumber];
}
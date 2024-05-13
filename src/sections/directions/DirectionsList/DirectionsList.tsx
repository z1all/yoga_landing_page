import React, {FC} from 'react';
import classes from './DirectionsList.module.scss'
import {IDirection} from "../../../types/types";
import DirectionButton from "./DirectionButton/DirectionButton";

interface IDirectionsList{
    directions: IDirection[];
    current: number;
    setNewDirection: (newDirection: number) => void;
}

const DirectionsList : FC<IDirectionsList> = ({directions, current, setNewDirection}) => {
    return (
        <div className={classes.listContainer}>
            {directions.map((direction, index) =>
                <DirectionButton isActive={index === current} onClick={() => setNewDirection(index)}>
                    {direction.name}
                </DirectionButton>
            )}
        </div>
    );
};

export default DirectionsList;
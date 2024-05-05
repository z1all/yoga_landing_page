import React from 'react';
import classes from './Description.module.scss';
import P1 from "../../../components/ui/P1/P1";

const Description = () => {
    return (
        <div className={classes.descriptionContainer}>
            <P1>
                Здесь мы поможем вам держать тело  в тонусе, а душу - в гармонии.
            </P1>
        </div>
    );
};

export default Description;
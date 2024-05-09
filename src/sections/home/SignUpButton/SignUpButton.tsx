import React, {FC} from 'react';
import classes from './SignUpButton.module.scss'
import flower from '../../../assets/imgs/home/Vector.svg';

interface ISignUpButton {
    className?: string
}

const SignUpButton: FC<ISignUpButton> = ({className}) => {
    return (
        <div className={`${classes.signUpButtonContainer} ${className}`}>
            <button className={`${classes.signUpButton}`}>
                Записаться
            </button>
            <div className={`${classes.flower}`}>
                <img src={flower} alt="Flower"/>
            </div>
        </div>
    );
};

export default SignUpButton;
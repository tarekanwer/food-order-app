import React from 'react';

import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

import mealsImage from '../../assets/meals.jpg';

const Header = (props) => {

    return(
        <React.Fragment>
            <header className={classes.header}>
                <h2>ReactMeals</h2>
                <HeaderCartButton onClick = {props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="a table full of delicious food" />
            </div>
        </React.Fragment>
    )

}

export default Header;
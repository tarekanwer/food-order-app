import { useState, useRef } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [formInputValid, setFormInputValid] = useState({
    name: true,
    street: true,
    city: true,
    postal: true,
  });
  const nameRef = useRef();
  const streetRef = useRef();
  const cityRef = useRef();
  const postalRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const street = streetRef.current.value;
    const city = cityRef.current.value;
    const postal = postalRef.current.value;

    const nameValid = !isEmpty(name);
    const streetValid = !isEmpty(street);
    const cityValid = !isEmpty(city);
    const postalValid = isFiveChars(postal);
    setFormInputValid({
      name: nameValid,
      street: streetValid,
      city: cityValid,
      postal: postalValid,
    });

    const formIsValid = nameValid && streetValid && cityValid && postalValid;

    if(!formIsValid) {
      return;
    }

    props.onConfirm({
        name,
        street,
        city,
        postal
    })
  };

  const nameControlClasses = `${classes.control} ${
    formInputValid.name ? "" : classes.invalid
  }`;
  const streetControlClasses = `${classes.control} ${
    formInputValid.street ? "" : classes.invalid
  }`;
  const cityControlClasses = `${classes.control} ${
    formInputValid.city ? "" : classes.invalid
  }`;
  const postalControlClasses = `${classes.control} ${
    formInputValid.postal ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameRef} />
        {!formInputValid.name && <p>Please enter a valid name</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetRef} />
        {!formInputValid.street && <p>Please enter a valid street name</p>}
      </div>
      <div className={postalControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalRef} />
        {!formInputValid.postal && <p>Please enter a valid postal code</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityRef} />
        {!formInputValid.city && <p>Please enter a valid city name</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;

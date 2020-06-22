
import React from 'react';

export const checkValidity = (value, rules) => {
    let isValid = true;
    if (rules.required) {
        console.log(value);
        isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
        isValid = value.length >= rules.minLength && isValid;
    }
    if (rules.defalutValue) {
        isValid = value !== 'choose' && isValid;
    }

    if (rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid;
    }
    if (rules.isEmail) {
        isValid = rules.regex.test(value) && isValid;
    }
    if (rules.isValidPhone) {
        console.log(value);
        isValid = value.match(/\d/g) ? value.match(/\d/g).length < 15 && isValid : null;
    }

    return isValid;
};

export const dynamicInput = (Input, inputObject, InputchangedHandler) => {
    const TransformedArray = [];

    for (const key in inputObject) {
        TransformedArray.push({
            id: key,
            config: inputObject[key],
        });
    }
    const dynamicInput = TransformedArray.map((inputValue) => (
        <Input
        key={inputValue.id}
            elementType={inputValue.config.elementType}
            elementConfig={inputValue.config.elementConfig}
            value={inputValue.config.value}
            invalid={!inputValue.config.valid}
            touched={inputValue.config.touched}
            shouldValidate={inputValue.config.validation}
            clicked={(event) => InputchangedHandler(event, inputValue.id)}
      />
    ));

    return dynamicInput;
};

export const InputchangedHandler = (inputObject, changeState, fValidaity) => (event, inputIdentifier) => {
    const updatedForm = inputObject[Object.keys(inputObject)[0]];

    const updatedInputElement = updatedForm[inputIdentifier];
    updatedInputElement.value = event.target.value;

    updatedInputElement.valid = fValidaity(updatedInputElement.value,
        updatedInputElement.validation);
    updatedInputElement.touched = true;
    updatedForm[inputIdentifier] = updatedInputElement;

    let formIsValid = true;

    for (const inputIdentifier in updatedForm) {
        formIsValid = updatedForm[inputIdentifier].valid && formIsValid;
    }

    const obj = { updatedForm, formIsValid };

    return changeState(obj);
};
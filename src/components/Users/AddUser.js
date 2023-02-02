import React, { useState, useRef } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

import classes from './AddUser.module.css';

const AddUser = props => {
  // useRef 은 항상 객체를 생성하여 반환하며, 해당 객체는 current prop을 가지고 있다.
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).'
      });
      return;
    }

    // 문자열이 기본입력값이기 때문에 +기호르ㄹ 붙여서 숫자로 변환시켜준다.
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid age (> 0).'
      });
      return;
    }

    props.onAddUser(enteredName, enteredAge);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const errorHandler = () => {
    setError(null);
  }

  return (
    <React.Fragment>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref="nameInputRef"
          />
          <label htmlFor="userage">Age (Years)</label>
          <input
            id="userage"
            type="number"
            ref="ageInputRef"
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;

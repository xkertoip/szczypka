'use client';

import { Form, Field, Formik } from 'formik';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface Props {
  budget?: number;
  subject?: string;
}

const wrapper = {
  in: {
    y: 0,
    opacity: 1,
    display: 'block',
    transition: {
      duration: 1,
      delay: 1
    }
  },
  out: {
    y: '50%',
    opacity: 0,
    transition: {
      duration: 1
    },
    transitionEnd: {
      display: 'none'
    }
  }
};

export default function Mail({ budget, subject }: Props) {
  const [[mail, text], setValid] = useState([false, false]);

  const initialValues = {
    user_budget: budget,
    user_email: '',
    user_choice: subject,
    user_message: ''
  };

  const validateEmail = (value: string) => {
    let error;
    if (!value) {
      error = 'requiredMail';
      setValid([false, text]);
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'invalidMail';
      setValid([false, text]);
    } else {
      setValid([true, text]);
    }
    return error;
  };
  const validateText = (value: string) => {
    let error;
    if (!value) {
      error = 'requiredText';
      setValid([mail, false]);
    } else {
      setValid([mail, true]);
    }
    return error;
  };

  const sendHandler = () => {
    text && mail && console.log('nie poszlo');
  };
  return (
    <>
      <motion.div variants={wrapper}>
        <Formik
          initialValues={initialValues}
          onSubmit={values => {
            console.log({ values });
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form>
            <Field
              as={'input'}
              className={'input--field'}
              placeholder={'email'}
              id={'user_email'}
              name={'user_email'}
            />
            <Field
              as={'textarea'}
              className={'input--field'}
              placeholder={'message'}
              name={'user_message'}
              id={'user_message'}
              rows={6}
            />

            <div className={'text-right'}>
              <button
                className={'btn-primary btn-primary__before btn-primary__after'}
                type={'submit'}
              >
                Send
              </button>
            </div>
          </Form>
        </Formik>
      </motion.div>
    </>
  );
}

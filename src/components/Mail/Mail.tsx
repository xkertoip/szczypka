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
          {({ errors, touched, isValidating }) => (
            <Form>
              <Field
                as={'input'}
                className={
                  'drop-shadow-3xl hover:drop-shadow-4xl rounded-3xl     bg-zinc-800 w-full p-4 mb-8 focus:outline-none focus:drop-shadow-4xl'
                }
                placeholder={'email'}
                id={'user_email'}
                name={'user_email'}
                validate={validateEmail}
              />
              {errors.user_email && touched.user_email && (
                <div>{errors.user_email}</div>
              )}
              <Field
                as={'textarea'}
                className={
                  'drop-shadow-3xl hover:drop-shadow-4xl focus:drop-shadow-4xl rounded-3xl focus:outline-none bg-zinc-800 w-full p-4 mb-8 resize-none'
                }
                placeholder={'message'}
                name={'user_message'}
                id={'user_message'}
                validate={validateText}
                rows={6}
              />
              {errors.user_message && touched.user_message && (
                <div>{errors.user_message}</div>
              )}
              <div className={'text-right'}>
                <button
                  className={
                    'btn-primary btn-primary__before btn-primary__after'
                  }
                  type={'submit'}
                >
                  Send
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </motion.div>
    </>
  );
}

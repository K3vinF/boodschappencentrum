import React, { useRef } from 'react';
import ReactGA from 'react-ga';
import { useForm } from 'react-hook-form';

import 'react-datepicker/dist/react-datepicker.css';
import styles from './form.module.scss';
import _ from 'lodash/fp';

export const TrackClickEvent = (action: string) => {
  ReactGA.event({
    category: 'Click',
    action: action,
  });
};

export default function BbqForm(props: { className: string }) {
  const formRef = useRef<HTMLFormElement>(null);

  const { register, handleSubmit, formState } = useForm({ reValidateMode: 'onBlur' });
  const onSubmit = () => {
    if (!_.isEmpty(formState.errors)) {
      ScrollToError(formState.errors);
    } else {
      formRef.current?.submit();
    }
  };

  const ScrollToError = (errors: { [x: string]: any }) => {
    // Find the 'highest' visible error and scroll there:
    let firstVisualErrorPosition = 0;
    let firstVisualError = null;
    for (const error of Object.values(errors)) {
      if (error?.ref) {
        let y = error.ref.getBoundingClientRect().top;
        if (y < firstVisualErrorPosition || firstVisualErrorPosition == 0) {
          firstVisualErrorPosition = y;
          firstVisualError = error.ref;
        }
      }
    }
    firstVisualError?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <form
      className={props.className + ' ' + styles.form}
      name="bbq"
      action="/bedankt-bbq"
      onSubmit={handleSubmit(onSubmit)}
      method="POST"
      ref={formRef}
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="bbq" />

      <div className="hidden">
        <label>
          Don’t fill this out if you are human: <input name="bot-field" />
        </label>
        <input name={'subject'} defaultValue={'Aanmelden bbq'} />
      </div>

      <p>
        <label htmlFor="name">Je voor- en achternaam:</label>
        <input
          {...register('name', { required: true })}
          type="text"
          name="name"
          id="name"
          autoComplete={'name'}
        />
        {formState.errors.name && <span className={styles.error}>Vul je naam in</span>}
      </p>

      <p>
        <button onClick={() => TrackClickEvent('bbq-form')}>Ja ik kom!</button>
      </p>
    </form>
  );
}

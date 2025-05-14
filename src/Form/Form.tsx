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

export default function CustomForm(props: { className: string }) {
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

  const start = 15;
  const finish = 67;
  const ages = Array.from({ length: finish - start + 1 }, (_, a) => a + start);

  return (
    <form
      className={props.className + ' ' + styles.form}
      name="job-application"
      action="/bedankt"
      onSubmit={handleSubmit(onSubmit)}
      method="POST"
      ref={formRef}
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="job-application" />

      <div className="hidden">
        <label>
          Don’t fill this out if you are human: <input name="bot-field" />
        </label>
        <input name={'subject'} defaultValue={'Sollicitatie via Boodschappencentrum.nl'} />
      </div>

      <h2>Je gegevens</h2>

      <p>
        <label htmlFor="firstname">Je voornaam:</label>
        <input
          {...register('firstname', { required: true })}
          type="text"
          name="firstname"
          id="firstname"
          autoComplete={'given-name'}
        />
        {formState.errors.firstname && <span className={styles.error}>Vul je voornaam in</span>}
      </p>

      <p>
        <label htmlFor="lastname">Je achternaam:</label>
        <input
          {...register('lastname', { required: true })}
          type="text"
          name="lastname"
          id="lastname"
          autoComplete={'family-name'}
        />
        {formState.errors.lastname && <span className={styles.error}>Vul je achternaam in</span>}
      </p>

      <p>
        <label htmlFor="phone">Je telefoonnummer:</label>
        <input
          {...register('phone', { required: true, minLength: 6, maxLength: 12 })}
          type="tel"
          name="phone"
          id="phone"
          autoComplete={'tel'}
        />
        {formState.errors.phone && (
          <span className={styles.error}>Vul je volledige telefoonnummer in</span>
        )}
      </p>

      <div className={styles.select + ' flex flex-row'}>
        <label htmlFor="age">Je leeftijd:</label>
        <select {...register('age', { required: true })} name="age" id="age">
          <option value="">--Selecteer je leeftijd--</option>
          <option value={'binnnenkort 15'}>Ik word binnenkort 15</option>
          {ages.map((age) => (
            <option key={age} value={age}>
              {age}
            </option>
          ))}
          <option value={'67+'}>67+</option>
        </select>
      </div>
      {formState.errors.age && <span className={styles.error}>Vul je leeftijd in</span>}

      <h2>Waar zou je willen werken?</h2>
      <p>
        <fieldset>
          <legend>Selecteer de winkel(s)</legend>
          <label>
            <input type={'checkbox'} name={'winkel'} value={'Albert Heijn'} />
            Albert Heijn
          </label>
          <label>
            <input type={'checkbox'} name={'winkel'} value={'Etos'} />
            Etos
          </label>
          <label>
            <input type={'checkbox'} name={'winkel'} value={'Primera'} />
            Primera
          </label>
          <label>
            <input type={'checkbox'} name={'winkel'} value={'Gall'} />
            Gall & Gall
          </label>
        </fieldset>
      </p>

      <p>
        <button onClick={() => TrackClickEvent('contact-form')}>Verstuur je sollicitatie!</button>
      </p>
    </form>
  );
}

import React, { useRef } from 'react';
import ReactGA from 'react-ga';
import { Controller, useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
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

  const { register, control, handleSubmit, formState } = useForm({ reValidateMode: 'onSubmit' });

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
      name="job-application"
      action="/bedankt"
      onSubmit={handleSubmit(onSubmit)}
      method="POST"
      ref={formRef}
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="contact" />

      <div className="hidden">
        <label>
          Don’t fill this out if you are human: <input name="bot-field" />
        </label>
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

      <p>
        <label htmlFor="phone">Je geboortedatum:</label>
        <Controller
          control={control}
          name="birthday"
          rules={{ required: true }}
          render={({ field }) => (
            <DatePicker
              placeholderText="Selecteer je geboortedatum"
              onChange={(date) => field.onChange(date)}
              selected={field.value}
              showYearDropdown
              yearDropdownItemNumber={80}
              scrollableYearDropdown
              startDate={new Date('1950-01-01')}
              maxDate={new Date('2007-01-01')}
            />
          )}
        />
        {formState.errors.birthday && <span className={styles.error}>Vul je geboortedatum in</span>}
      </p>

      <h2>In welke winkels zou je willen werken?</h2>
      <p>
        <label>
          <input type={'checkbox'} name={'shop'} value={'ah'} />
          Albert Heijn
        </label>
        <label>
          <input type={'checkbox'} name={'shop'} value={'etos'} />
          Etos
        </label>
        <label>
          <input type={'checkbox'} name={'shop'} value={'primera'} />
          Primera
        </label>
        <label>
          <input type={'checkbox'} name={'shop'} value={'gall'} />
          Gall & Gall
        </label>
      </p>

      <p>
        <button onClick={() => TrackClickEvent('contact-form')}>Verstuur je sollicitatie!</button>
      </p>
    </form>
  );
}

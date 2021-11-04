import React from 'react';
import ReactGA from 'react-ga';
import { useForm } from 'react-hook-form';
import styles from './form.module.scss';

export const TrackClickEvent = (action: string) => {
  ReactGA.event({
    category: 'Click',
    action: action,
  });
};

export default function CustomForm(props: { className: string }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // eslint-disable-next-line no-console
  const onSubmit = (data: any) => console.log(data);

  function useScrollToError(errors: { [x: string]: any }) {
    // Find the 'highest' visible error:
    let firstVisualErrorPosition = 0;
    let firstVisualError = null;
    for (const error of Object.values(errors)) {
      if (error?.ref) {
        let y = error.ref.getBoundingClientRect().top;
        console.log(y);
        if (y < firstVisualErrorPosition || firstVisualErrorPosition == 0) {
          firstVisualErrorPosition = y;
          firstVisualError = error.ref;
        }
      }
    }
    firstVisualError?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  useScrollToError(errors);

  return (
    <form
      className={props.className + ' ' + styles.form}
      name="job-application"
      action="/success"
      onSubmit={handleSubmit(onSubmit)}
      method="POST"
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
        />
        {errors.firstname && <span className={styles.error}>Vul je voornaam in</span>}
      </p>

      <p>
        <label htmlFor="lastname">Je achternaam:</label>
        <input
          {...register('lastname', { required: true })}
          type="text"
          name="lastname"
          id="lastname"
        />
        {errors.lastname && <span className={styles.error}>Vul je achternaam in</span>}
      </p>

      <p>
        <label htmlFor="phone">Je telefoonnummer:</label>
        <input {...register('phone', { required: true })} type="text" name="phone" id="phone" />
        {errors.phone && <span className={styles.error}>Vul je telefoonnummer in</span>}
      </p>

      <p>
        <label htmlFor="birthdate">Je geboortedatum</label>
        <input
          defaultValue="2005-01-01"
          min="1950-01-1"
          max="2007-01-01"
          {...register('birthdate', { required: true })}
          type="date"
          name="birthdate"
          id="birthdate"
        />
        {errors.lastname && <span className={styles.error}>Vul je geboortedatum in</span>}
      </p>

      <h2>In welke winkels zou je willen werken?</h2>
      <p>
        <label>
          <input type={'checkbox'} name={'shop'} defaultChecked={true} value={'ah'} />
          Albert Heijn
        </label>
        <label>
          <input type={'checkbox'} name={'shop'} defaultChecked={true} value={'etos'} />
          Etos
        </label>
        <label>
          <input type={'checkbox'} name={'shop'} defaultChecked={true} value={'primera'} />
          Primera
        </label>
        <label>
          <input type={'checkbox'} name={'shop'} defaultChecked={true} value={'gall'} />
          Gall & Gall
        </label>
      </p>

      <p>
        <button onClick={() => TrackClickEvent('contact-form')}>Verstuur je sollicitatie!</button>
      </p>
    </form>
  );
}

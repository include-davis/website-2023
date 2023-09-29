/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement, useState } from 'react';
import Link from 'next/link';
import styles from '../../../styles/services/form.module.scss';

export default function ContactForm({
  formRef,
}: {
  formRef: any;
}): ReactElement {
  // Handles form submission
  const [pending, setPending] = useState<boolean>(false);
  const [resStatus, setResStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const onSubmitHandler = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    setPending(true);

    // prevent default form submission routine
    event.preventDefault();

    // getting a json-like object with the form entries
    const target = event.target as HTMLFormElement;
    const data = new FormData(target);
    const values = Object.fromEntries(data.entries());

    // fetch request sending the values over to our backend
    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(values),
    });
    const resData = await res.json();

    setResStatus(resData.ok ? 'ok' : 'failed');
    setPending(false);
    setError(resData.error || null);
  };

  return (
    <>
      <form
        ref={formRef}
        className={styles.form_container}
        onSubmit={onSubmitHandler}
      >
        <div className={styles.block1}>
          <p>
            Thank you for your interest in working with us. Please fill out the
            form below and tell us more about your project. We'll get back to
            you within one or two business days.
          </p>
          <div className={styles.form_inputs}>
            <div className={styles.name_input}>
              <input
                className={styles.input}
                required
                type="text"
                id="fname"
                name="fname"
                minLength={1}
                placeholder="First Name*"
              />
              <input
                className={styles.input}
                required
                type="text"
                id="lname"
                name="lname"
                minLength={1}
                placeholder="Last Name*"
              />
            </div>
            <input
              className={styles.input}
              type="text"
              id="company"
              name="company"
              placeholder="Your Company"
            />
            <input
              className={styles.input}
              type="url"
              id="websiteLink"
              name="websiteLink"
              placeholder="Existing Website Link"
            />
            <input
              className={styles.input}
              required
              type="email"
              id="email"
              name="email"
              placeholder="Email Address*"
            />
            <input
              className={styles.input}
              required
              type="tel"
              id="phno"
              name="phno"
              placeholder="Phone Number*"
            />
          </div>
        </div>

        <div className={styles.block2}>
          <h3>What do you need help with?</h3>
          <p className="p-small">
            Select all that apply<span>*</span>
          </p>
          <div className={styles.options}>
            <div className={styles.help_options1}>
              <input
                type="checkbox"
                id="WebDev"
                name="WebDev"
                value="Website Development"
              />
              <label htmlFor="WebDev">Website Development</label>
            </div>

            <div className={styles.help_options2}>
              <input
                type="checkbox"
                id="WebDesign"
                name="WebDesign"
                value="Website Design"
              />
              <label htmlFor="WebDesign">Website Design</label>
            </div>

            <div className={styles.help_options3}>
              <input
                type="checkbox"
                id="EComm"
                name="EComm"
                value="E-Commerce Website"
              />
              <label htmlFor="EComm">E-Commerce Website</label>
            </div>

            <div className={styles.help_options4}>
              <input
                type="checkbox"
                id="AppDesign"
                name="AppDesign"
                value="Mobile App Design"
              />
              <label htmlFor="AppDesign">Mobile App Design</label>
            </div>

            <div className={styles.help_options5}>
              <input
                type="checkbox"
                id="Branding"
                name="Branding"
                value="Branding"
              />
              <label htmlFor="Branding">Branding</label>
            </div>

            <div className={styles.help_options6}>
              <input type="checkbox" id="Other" name="Other" value="Other" />
              <label htmlFor="Other">Other</label>
            </div>
          </div>
        </div>

        <div className={styles.block3}>
          <h3>Tell us more about your project</h3>
          <textarea
            className={styles.textarea}
            id="projectDeets"
            name="projectDeets"
            placeholder="Specific of your project, timeline, goals, etc."
          />

          <input
            className={styles.submit_button}
            type="submit"
            value="Submit Form"
          />
        </div>
      </form>
      {(pending || resStatus) && (
        <div className={styles.confirmation_modal_backdrop}>
          <div className={styles.confirmation_modal_container}>
            {pending && (
              <div className={styles.loading_container}>
                <h3>Hold on while we receive your request.</h3>
                <div className={styles.loader}></div>
              </div>
            )}
            {resStatus === 'ok' && (
              <div className={styles.success_container}>
                <h2>We have received your request!</h2>
                <p>We'll get back to you shortly.</p>
                <button type="button">
                  <Link href="/">Got it</Link>
                </button>
              </div>
            )}
            {resStatus === 'failed' && (
              <div className={styles.failed_container}>
                <h2 style={{ fontSize: '1rem', textAlign: 'center' }}>
                  {`Sorry, something went wrong :( ${error}`}
                </h2>
                <p
                  style={{ color: 'var(--text-primary)', marginBottom: '48px' }}
                >
                  Maybe try again.
                </p>
                <div
                  onClick={(): void => window.location.reload()}
                  style={{ width: '70%', textAlign: 'center' }}
                >
                  <button type="button">Try Again</button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

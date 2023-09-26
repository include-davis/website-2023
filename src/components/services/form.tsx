import { ReactElement } from "react";
import styles from "../../styles/services/form.module.scss";

export default function ContactForm(onSubmitHandler: any): ReactElement {
  return (
    <form className={styles.form_container} onSubmit={onSubmitHandler}>
      <div className={styles.block1}>
        <p>
          Thank you for your interest in working with us. Please fill out the
          form below and tell us more about your project. We'll get back to you
          within one or two business days.
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
          id="projectDeets"
          name="projectDeets"
          placeholder="Specific of your project, timeline, goals, etc."
        />
      </div>

      <input
        className={styles.submit_button}
        type="submit"
        value="Submit Form"
      />
    </form>
  );
}

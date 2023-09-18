import { ReactElement } from 'react';
import styles from '../styles/services/services.module.scss';

import PhaseCard from '../components/services/phaseCard';
import FAQ from '../components/services/faq';

import Data from '../json/services/faqs.json';

const faqs = Data["services-page"]

function Services(): ReactElement {
    return (
      <div className={styles.page}>
        <div className={styles.main_content}>
            <div className={styles.start_box}>
                <p>OUR SERVICES</p>
                <h1>Start a project</h1>
                <button><p>Start a project</p></button>
            </div>
            <div className={styles.process_box}>
                <img src={"/assets/services/process.png"} alt="process"/>
                <h2>Process</h2>
                <div className={styles.timeline}>
                    <PhaseCard/>
                </div>
            </div>
            <div className={styles.form_box}>
                <p>Thank you for your interest in working with us. Please fill out the form below and tell us more about your project. We'll get back to you within one or two business days.</p>
                <h4>form space</h4>
            </div>
        </div>
        <div className={styles.faq_box}>
            <h2>Frequently Asked Questions</h2>
            <div className={styles.content}>
                <FAQ faqList={faqs} />
            </div>
        </div>
      </div>
    );
}


export default Services;
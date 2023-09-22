import { ReactElement } from 'react';
import styles from '../styles/services/services.module.scss';

import PhaseCard from '../components/services/phaseCard';
import FAQ from '../components/services/faq';
import ContactForm from '../components/services/form';

import Data from '../json/services/faqs.json';

const faqs_col1 = Data["col1"]
const faqs_col2 = Data["col2"]

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
                <ContactForm />
            </div>
        </div>
        <div className={styles.faq_box}>
            <h2>Frequently Asked Questions</h2>
            <div className={styles.content}>
                <FAQ faqList={faqs_col1} />
                <FAQ faqList={faqs_col2} />
            </div>
        </div>
      </div>
    );
}


export default Services;

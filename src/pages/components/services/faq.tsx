import { ReactElement } from 'react';
import styles from '../../../styles/services/faq.module.scss';

interface FAQProp {
  faqList: { q: string, a: string }[];
}

export default function FAQ({ faqList }: FAQProp): ReactElement {
  return (
    <div className={styles.faqbox}>
      {faqList?.map((faq, index) => (
        <div key={index} className={styles.faq}>
          <p className="p-small">{faq.q}</p>
          <div className="p-details">{faq.a}</div>
        </div>
      ))}
    </div>
  );
}
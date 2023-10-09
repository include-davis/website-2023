import Image from 'next/image';
import styles from '../../../styles/about/avatar/avatar.module.scss';

interface AvatarProps {
  name: string;
  title: string | null;
  image: string;
}

export default function Avatar(props: AvatarProps): React.JSX.Element {
  const { image, name, title } = props;

  return (
    <article className={styles.avatar}>
      <Image
        src={`/about/headshots/${image}`}
        width={235}
        height={208}
        style={{
          objectFit: 'cover',
          aspectRatio: '16/9',
        }}
        alt="Avatar"
      />
      <section className={styles.avatar_info}>
        <div className="p-small">{name}</div>
        <div className="p-details">{title}</div>
      </section>
    </article>
  );
}

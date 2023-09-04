import Image from "next/image";
import styles from "../../../styles/about/avatar/avatar.module.scss";

type AvatarProps = {
  name: string;
  title: string | null;
  image: string;
};

export default function Avatar(props: AvatarProps): React.JSX.Element {
  return (
    <article className={styles.avatar}>
      <Image
        src={`/${props.image}`}
        width={235}
        height={208}
        style={{
          objectFit: "contain",
          aspectRatio: "16/9",
        }}
        alt="Avatar"
      />
      <section className={styles.avatar_info}>
        <div className="p-small">{props.name}</div>
        <div className="p-details">{props.title}</div>
      </section>
    </article>
  );
}

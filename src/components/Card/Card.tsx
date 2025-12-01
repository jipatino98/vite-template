import { Avatar } from '@mantine/core';
import { Player } from '@/types/Players';
import styles from './Card.module.css';

interface CardProps {
  icon?: string;
  player: Player;
  rank?: number;
}

const Card: React.FC<CardProps> = ({ icon, player, rank }) => {
  return (
    <article className={styles.card}>
      <div className={styles.cardHeader}>
        <Avatar
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
          size={70}
          radius={120}
          mx="auto"
        />
        <div className={styles.cardHeaderContent}>
          <h3>{player.name}</h3>
          <span>{player.stars}</span>
        </div>
      </div>
      <p>{player.local_score}</p>
    </article>
  );
};

export default Card;

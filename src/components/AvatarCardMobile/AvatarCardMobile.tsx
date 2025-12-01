import React from 'react';
import { Avatar } from '@mantine/core';
import { Player } from '@/types/Players';
import styles from './AvatarCardMobile.module.css';

interface AvatarCardMobileProps {
  players: Player[];
}

const AvatarCardMobile: React.FC<AvatarCardMobileProps> = ({ players }) => {
  return (
    <section className={styles.avatarCard}>
      <div className={styles.avatarsContainer}>
        <div className={styles.avatarContainer}>
          <Avatar
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
            size={160}
            radius={120}
            mx="auto"
            className={styles.avatarRoot}
          />

          <div className={styles.avatarInfo}>
            <span>{players[0].name}</span>
            <span>{players[0].local_score}</span>
          </div>
        </div>

        <div className={`${styles.avatarContainer} ${styles.avatarContainerLeft}`}>
          <Avatar
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png"
            size={120}
            radius={120}
            mx="auto"
          />

          <div className={styles.avatarInfo}>
            <span>{players[1].name}</span>
            <span>{players[1].local_score}</span>
          </div>
        </div>

        <div className={`${styles.avatarContainer} ${styles.avatarContainerRight}`}>
          <Avatar
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-6.png"
            size={105}
            radius={120}
            mx="auto"
          />
          <div className={styles.avatarInfo}>
            <span>{players[2].name}</span>
            <span>{players[2].local_score}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvatarCardMobile;

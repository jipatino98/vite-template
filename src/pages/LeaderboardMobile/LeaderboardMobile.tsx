import styles from './LeaderboardMobile.module.css';

interface LeaderboardMobileProps {
  title: string;
  children: React.ReactNode;
}

const LeaderboardMobile: React.FC<LeaderboardMobileProps> = ({ title, children }) => {
  return (
    <section className={styles.leaderBoardMobile}>
      <h1>{title}</h1>

      {children}
    </section>
  );
};

export default LeaderboardMobile;

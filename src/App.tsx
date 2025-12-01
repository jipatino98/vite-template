import '@mantine/core/styles.css';

import React from 'react';
import { MantineProvider } from '@mantine/core';
import playerData from './api/data.json';
import AvatarCardMobile from './components/AvatarCardMobile/AvatarCardMobile';
import Card from './components/Card/Card';
import LeadGrid from './components/Grid/Grid';
import Layout from './components/Layout/Layout';
import Tabs from './components/Tabs/Tabs';
import LeaderboardMobile from './pages/LeaderboardMobile/LeaderboardMobile';
import { theme } from './theme';

import './App.css';

import { Player } from './types/Players';

export default function App() {
  const members = Object.entries(playerData.members).map(([key, value]) => {
    return { player: value, id: key };
  });

  const [selectedMode, setSelectedMode] = React.useState('Local');

  const getRanking = (players: Player[]) => {
    if (selectedMode === 'stars') {
      return players.sort((a, b) => b.stars - a.stars);
    }

    return players.sort((a, b) => b.local_score - a.local_score);
  };

  const getTopThree = (players: Player[]) => {
    return players.slice(0, 3);
  };

  const getRemainingPlayers = (players: Player[]) => {
    return players.slice(3);
  };

  const rankedPlayers = getRanking(members.map((m) => m.player));
  const topThree = getTopThree(rankedPlayers);
  const remainingPlayers = getRemainingPlayers(rankedPlayers);

  return (
    <MantineProvider theme={theme}>
      <Layout>
        <LeadGrid />
        <Tabs
          data={['Local', 'Stars', 'Stats']}
          selectedMode={selectedMode}
          setSelectedMode={setSelectedMode}
        />
        <LeaderboardMobile title="AOC Leaderboard">
          <AvatarCardMobile players={topThree} />

          <section className="leaderboard">
            {remainingPlayers.map((player) => (
              <Card key={player.id} player={player} />
            ))}
          </section>
        </LeaderboardMobile>
      </Layout>
    </MantineProvider>
  );
}

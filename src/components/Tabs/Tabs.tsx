import React from 'react';
import { SegmentedControl } from '@mantine/core';
import classes from './tabs.module.css';

interface TabsProps {
  data: string[];
  selectedMode: string;
  setSelectedMode: (mode: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ data, selectedMode, setSelectedMode }) => {
  return (
    <SegmentedControl
      value={selectedMode}
      onChange={setSelectedMode}
      radius="md"
      size="md"
      data={data}
      classNames={classes}
    />
  );
};
export default Tabs;

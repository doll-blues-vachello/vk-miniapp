import React from 'react';

import TeamHeader from '../components/TeamHeader';

import kheynov from '../assets/photos/kheynov.jpg';
import linadil from '../assets/photos/linadil.jpg';
import secretDzen from '../assets/photos/secretDzen.jpg';
import leadpogrommer from '../assets/photos/leadpogrammer.jpg';

import { Panel, PanelHeader, Group, Text } from '@vkontakte/vkui';
import PersonCard from '../components/PersonalCard';

const Home = ({ id }) => (
  <Panel id={id}>
    <PanelHeader>{'</> Yeah, Bash!'}</PanelHeader>
    <TeamHeader />
    <Group>
      <PersonCard title={'mobile Developer'} src={kheynov} name={'Kheynov'} />
      <PersonCard title={'C++ Developer'} src={linadil} name={'Linadil'} />
      <PersonCard
        title={'Front-End Developer'}
        src={secretDzen}
        name={'SecretDzen'}
      />
      <PersonCard
        title={'Back-End Developer'}
        src={leadpogrommer}
        name={'Leadpogrommer'}
      />
    </Group>
    <Group>
      <Text className="text-yb-black text-center">
        Click on the personal Card to learn more about our team
      </Text>
    </Group>
  </Panel>
);

export default Home;

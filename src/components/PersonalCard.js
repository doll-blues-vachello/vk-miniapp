import React from 'react';

import { Header, CardGrid, Card, Text } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

const PersonCard = (props) => {
    function goToGitHub() {
        window.open(`https://github.com/${props.name}`);
    }

  return (
    <>
      <Header mode='secondary' className='w-full flex justify-center'>{props.title}</Header>
      <CardGrid className='w-full flex justify-center'>
        <Card onClick={goToGitHub} mode="shadow" className='cursor-pointer transform duration-300 hover:scale-105'>
          <img src={props.src} className='w-full rounded-t-md' />
          <Text className='text-center text-yb-yellow bg-yb-black py-1 px-2'>{props.name}</Text>
        </Card>
      </CardGrid>
    </>
  );
};

export default PersonCard;

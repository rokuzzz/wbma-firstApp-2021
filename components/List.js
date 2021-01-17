import React from 'react';
import {FlatList} from 'react-native';
import {useLoadMedia} from './hooks/ApiHooks';
import Listitem from './Listitem';

const List = () => {
  const mediaArray = useLoadMedia();

  return (
    <FlatList
      data={mediaArray}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => <Listitem singleMedia={item} />}
    />
  );
};

export default List;

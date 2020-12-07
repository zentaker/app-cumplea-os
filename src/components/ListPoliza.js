import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AddPoliza from './AddPoliza';
import ActionBar from './ActionBar';

export default function ListPoliza() {
  const [showList, setShowList] = useState(true);
  return (
    <View style={styles.container}>
      {showList ? (
        <>
          <Text> Poliza </Text>
          <Text> Poliza </Text>
          <Text> Poliza </Text>
          <Text> Poliza </Text>
        </>
      ) : (
        <AddPoliza />
      )}

      <ActionBar setShowList={setShowList} showList={showList} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%',
  },
});

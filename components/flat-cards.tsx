import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCard() {
  return (
    <View>
      <Text style={styles.headingText}>{'Flat card'}</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={styles.cardText}>Red</Text>
        </View>

        <View style={[styles.card, styles.cardTwo]}>
          <Text style={styles.cardText}>Red</Text>
        </View>

        <View style={[styles.card, styles.cardThree]}>
          <Text style={styles.cardText}>Red</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    margin: 8,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  card: {
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#fff',
  },
  cardOne: {
    backgroundColor: '#F5004F',
  },
  cardTwo: {
    backgroundColor: '#3AB0FF',
  },
  cardThree: {
    backgroundColor: '#6BCB77',
  },
});

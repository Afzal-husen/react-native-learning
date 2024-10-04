import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>{'Elevated Cards'}</Text>
      <ScrollView style={styles.container} horizontal>
        <View style={[styles.cardElevated, styles.cardOne]}>
          <Text style={styles.cardText}>Red</Text>
        </View>

        <View style={[styles.cardElevated, styles.cardTwo]}>
          <Text style={styles.cardText}>blue</Text>
        </View>

        <View style={[styles.cardElevated, styles.cardThree]}>
          <Text style={styles.cardText}>green</Text>
        </View>

        <View style={[styles.cardElevated, styles.cardFour]}>
          <Text style={styles.cardText}>violet</Text>
        </View>

        <View style={[styles.cardElevated, styles.cardFive]}>
          <Text style={styles.cardText}>Orange</Text>
        </View>
      </ScrollView>
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
    padding: 8,
  },
  cardElevated: {
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      height: 10,
      width: 10,
    },
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
  cardFour: {
    backgroundColor: '#775ADA',
  },
  cardFive: {
    backgroundColor: '#F35C6E',
  },
});

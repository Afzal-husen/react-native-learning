import React from 'react';

import {SafeAreaView, ScrollView} from 'react-native';
import FlatCard from './components/flat-cards';
import ElevatedCards from './components/elevated-cards';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard />
        <ElevatedCards />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

import { Image, StyleSheet, Platform, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ThemedView
     style={styles.alignCenter}
     lightColor='#A1CEDC'
     darkColor='#1D3D47'
      >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Cenas da vida</ThemedText>
        <HelloWave />
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  alignCenter: {
    flex: 1, 
    alignContent: 'center', 
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

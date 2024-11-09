import { StyleSheet, Text, View, Dimensions } from 'react-native';

//Screens are good
import AddCard from './screens/AddCard';

const scrnH = Dimensions.get('window').height;

export default function App() {
  return (
    <View style={styles.container}>
      <AddCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e0e0e0',
    height: scrnH,
  },
});

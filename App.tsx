import { StatusBar } from 'react-native';
import Home from './src/screens/Home';

export default function App() {
  return (
    <>
      <Home />
      <StatusBar
        backgroundColor='transparent'
        barStyle='light-content'
        translucent
      />
    </>
  );
}

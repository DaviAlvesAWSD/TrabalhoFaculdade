import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../pages/welcome';
import SingIn from '../pages/Signin';
import Galeria from '../pages/galeria';

const Stack = createNativeStackNavigator();

export default function Routes(){
  return(
    <Stack.Navigator>
      <Stack.Screen 
      name="Welcome" 
      component={Welcome} 
      options={{headerShown: false}}
    />
    <Stack.Screen 
      name="SingIn" 
      component={SingIn}
      options={{headerShown: false}}
    />
    <Stack.Screen 
      name="Galeria" 
      component={Galeria}
      options={{headerShown: false}}
    />
    </Stack.Navigator>

  );
}
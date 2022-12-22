import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Profiles } from "@lens-protocol/react-native-lens-ui-kit";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Profiles" component={ProfileComponent} />
        {/*<Stack.Screen name="Details" component={Details} />*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const ProfileComponent = ({ navigation }) => {
  return <Profiles />;
};

export default App;

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Profiles } from "@lens-protocol/react-native-lens-ui-kit";
import ProfileView from "./ProfileView";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Profiles" component={ProfileComponent} />

        <Stack.Screen name="Profile" component={ProfileView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const ProfileComponent = ({ navigation }) => {
  return (
    <Profiles
      onProfilePress={(profile) => navigation.navigate("Profile", { profile })}
    />
  );
};

export default App;

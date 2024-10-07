import React, { createContext, useContext, useState } from 'react';
import { View, Text, Button } from 'react-native';

// Create the context
const UserContext = createContext();

const App = () => {
  const [user, setUser] = useState({ name: 'John Doe', age: 30 });

  // Function to update user age
  const increaseAge = () => {
    setUser((prevUser) => ({
      ...prevUser,
      age: prevUser.age + 1,
    }));
  };

  return (
    <UserContext.Provider value={{ user, increaseAge }}>
      <UserProfile />
    </UserContext.Provider>
  );
};

const UserProfile = () => {
  const { user, increaseAge } = useContext(UserContext);

  return (
    <View>
      <Text>Name: {user.name}</Text>
      <Text>Age: {user.age}</Text>
      <Button title="Increase Age" onPress={increaseAge} />
    </View>
  );
};

export default App;

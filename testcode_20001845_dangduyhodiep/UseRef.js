import React, { useRef, useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

// Named export for TimerComponent
export const TimerComponent = () => {
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      console.log('Timer running');
    }, 1000);

    // Cleanup timer on unmount
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  return (
    <View>
      <Text>Timer is running in the background. Check your console!</Text>
    </View>
  );
};

// Default export for App
export default function App() {
  const intervalRef = useRef();
  const [count, setCount] = useState(0);

  useEffect(() => {
    intervalRef.current = setInterval(() => setCount((count) => count + 1), 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <View>
      <Text style={{ fontSize: 120 }}>{count}</Text>
      <Button
        title="Stop"
        onPress={() => {
          clearInterval(intervalRef.current);
        }}
      />
      {/* Render the TimerComponent here */}
      <TimerComponent />
    </View>
  );
}

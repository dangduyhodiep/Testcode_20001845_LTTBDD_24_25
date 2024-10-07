import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { DeviceEventEmitter } from 'react-native';

const EventListeningComponent = () => {
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    const subscription = DeviceEventEmitter.addListener('eventName', (data) => {
      setEventData(data);
    });

    // Cleanup subscription on unmount
    return () => {
      subscription.remove();
    };
  }, []); // Empty array means this effect runs once on mount

  return (
    <View>
      <Text>{eventData ? JSON.stringify(eventData) : 'No data yet'}</Text>
    </View>
  );
};

export default EventListeningComponent;

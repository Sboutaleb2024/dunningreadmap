import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, {Marker, Polyline} from 'react-native-maps';
export default function App() {

  const [origin, setOrigin] = React.useState({
    latitude: 41.954422, 
    longitude: -87.802596,
  });

   const [destination1, setDestination1] = React.useState({
    latitude: 41.953370, 
    longitude: -87.804362,
  });

    const [destination2, setDestination2] = React.useState({
    latitude: 41.953334, 
    longitude: -87.803394,
  });

   const [destination3, setDestination3] = React.useState({
    latitude: 41.953233, 
    longitude: -87.801457,
  });

    const [destination4, setDestination4] = React.useState({
    latitude: 41.953830,  
    longitude: -87.802858,
  });

   const [destination5, setDestination5] = React.useState({
    latitude: 41.954025, 
    longitude: -87.801880,
  });

    const [destination6, setDestination6] = React.useState({
    latitude: 41.953619,
    longitude:-87.801301,
  });

   const [destination7, setDestination7] = React.useState({
    latitude: 41.953044, 
    longitude: -87.800971,
  });

    const [destination8, setDestination8] = React.useState({
    latitude: 41.952968, 
    longitude: -87.799834,
  });

  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map}
        initialRegion={{
          latitude: origin.latitude,
          longitude: origin.longitude,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04,
        }}
      >
              
        <Marker
         draggable
         coordinate = {origin}
         onDragEnd={(direction)=> setOrigin(direction.nativeEvent.coordinate)}
        />
        <Marker 
         draggable
         coordinate = {destination1}
         onDragEnd={(direction)=> setDestination1(direction.nativeEvent.coordinate)}
        />
        <Marker 
         draggable
         coordinate = {destination2}
         onDragEnd={(direction)=> setDestination2(direction.nativeEvent.coordinate)}
        />
         <Marker 
         draggable
         coordinate = {destination3}
         onDragEnd={(direction)=> setDestination3(direction.nativeEvent.coordinate)}
        />
        <Marker 
         draggable
         coordinate = {destination4}
         onDragEnd={(direction)=> setDestination4(direction.nativeEvent.coordinate)}
        />
         <Marker 
         draggable
         coordinate = {destination5}
         onDragEnd={(direction)=> setDestination5(direction.nativeEvent.coordinate)}
        />
        <Marker 
         draggable
         coordinate = {destination6}
         onDragEnd={(direction)=> setDestination6(direction.nativeEvent.coordinate)}
        />
         <Marker 
         draggable
         coordinate = {destination7}
         onDragEnd={(direction)=> setDestination7(direction.nativeEvent.coordinate)}
        />
        <Marker 
         draggable
         coordinate = {destination8}
         onDragEnd={(direction)=> setDestination8(direction.nativeEvent.coordinate)}
        />
        <Polyline
         coordinates={[origin,destination1]}
         strokeColor="blue"
         strokewidth={10}
        />
        <Polyline
         coordinates={[destination1, destination2]}
         strokeColor="blue"
         strokewidth={10}
        />
        <Polyline
         coordinates={[destination2, destination3]}
         strokeColor="blue"
         strokewidth={10}
        />
        <Polyline
         coordinates={[destination3, destination4]}
         strokeColor="blue"
         strokewidth={10}
        />
        <Polyline
         coordinates={[destination4, destination5]}
         strokeColor="blue"
         strokewidth={10}
        />
        <Polyline
         coordinates={[destination5, destination6]}
         strokeColor="blue"
         strokewidth={10}
        />
        <Polyline
         coordinates={[destination6, destination7]}
         strokeColor="blue"
         strokewidth={10}
        />
        <Polyline
         coordinates={[destination7, destination8]}
         strokeColor="brown"
         strokewidth={10}
        />

       
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  }
});


import { Camera } from 'expo-camera';
import { useEffect } from 'react'
import { Text, View } from 'react-native';
import { cameraWithTensors } from '@tensorflow/tfjs-react-native';
import * as tf from '@tensorflow/tfjs'
const TensorCamera = cameraWithTensors(Camera);

export default function App() {
  useEffect(() => {
    tf.ready().then(() => {
      console.log('TensorFlow carregado com sucesso.');

    });
  }, []);


  return (
    <View className='bg-purple-600 h-full flex justify-center items-center'>

      <Text className='font-extrabold text-xl'>ola camera</Text>

    </View>


  );
}

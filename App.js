import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import LoginScreen from './screens/LoginScreen';
import MainScreen from './screens/MainScreen';
import GameSelectionScreen from './screens/GameSelectionScreen';
import DifficultyScreen from './screens/DifficultyScreen';
import WordGuessingGame from './screens/games/WordGuessingGame';
import FillBlankGame from './screens/games/FillBlankGame';
import MultipleChoiceGame from './screens/games/MultipleChoiceGame';
import ResultsScreen from './screens/ResultsScreen';
import LearningScreen from './screens/LearningScreen';
import VocabularyLearning from './screens/learning/VocabularyLearning';
import GrammarLearning from './screens/learning/GrammarLearning';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#4A90E2',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Login" 
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Main" 
          component={MainScreen}
          options={{ title: 'Englify', headerLeft: null }}
        />
        <Stack.Screen 
          name="GameSelection" 
          component={GameSelectionScreen}
          options={{ title: 'Chọn Trò Chơi' }}
        />
        <Stack.Screen 
          name="Difficulty" 
          component={DifficultyScreen}
          options={{ title: 'Chọn Độ Khó' }}
        />
        <Stack.Screen 
          name="WordGuessing" 
          component={WordGuessingGame}
          options={{ title: 'Đoán Từ' }}
        />
        <Stack.Screen 
          name="FillBlank" 
          component={FillBlankGame}
          options={{ title: 'Điền Chỗ Trống' }}
        />
        <Stack.Screen 
          name="MultipleChoice" 
          component={MultipleChoiceGame}
          options={{ title: 'Trắc Nghiệm' }}
        />
        <Stack.Screen 
          name="Results" 
          component={ResultsScreen}
          options={{ title: 'Kết Quả', headerLeft: null }}
        />
        <Stack.Screen 
          name="Learning" 
          component={LearningScreen}
          options={{ title: 'Học Tập' }}
        />
        <Stack.Screen 
          name="VocabularyLearning" 
          component={VocabularyLearning}
          options={{ title: 'Học Từ Vựng' }}
        />
        <Stack.Screen 
          name="GrammarLearning" 
          component={GrammarLearning}
          options={{ title: 'Học Ngữ Pháp' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


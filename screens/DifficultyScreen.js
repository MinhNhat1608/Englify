import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const difficulties = [
  {
    id: 'beginner',
    name: 'Mới Tiếp Cận',
    emoji: '🌱',
    description: 'Dễ - Phù hợp cho người mới bắt đầu',
    color: ['#A8E6CF', '#88D8A3', '#6BCB9F'],
  },
  {
    id: 'intermediate',
    name: 'Khá',
    emoji: '⭐',
    description: 'Trung bình - Thử thách vừa phải',
    color: ['#FFD93D', '#FFB84D', '#FF9F66'],
  },
  {
    id: 'advanced',
    name: 'Tốt',
    emoji: '🏆',
    description: 'Khó - Dành cho người giỏi',
    color: ['#FF6B9D', '#FF8E9B', '#FFB3BA'],
  },
];

export default function DifficultyScreen({ navigation, route }) {
  const { gameType, learningType } = route.params || {};

  const handleDifficultySelect = (difficulty) => {
    navigation.navigate(gameType, { difficulty });
  };

  return (
    <LinearGradient
      colors={['#E5F5FF', '#FFF4E5', '#FFE5E5']}
      style={styles.container}
    >
      <View style={styles.headerContainer}>
        <Text style={styles.emoji}>🎯</Text>
        <Text style={styles.title}>Chọn Độ Khó</Text>
        <Text style={styles.subtitle}>Bạn muốn thử thách nào? 💪</Text>
      </View>
      <View style={styles.difficultiesContainer}>
        {difficulties.map((difficulty) => (
          <TouchableOpacity
            key={difficulty.id}
            style={styles.difficultyCard}
            onPress={() => handleDifficultySelect(difficulty.id)}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={difficulty.color}
              style={styles.difficultyGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Text style={styles.difficultyEmoji}>{difficulty.emoji}</Text>
              <Text style={styles.difficultyName}>{difficulty.name}</Text>
              <Text style={styles.difficultyDescription}>
                {difficulty.description}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  emoji: {
    fontSize: 60,
    marginBottom: 10,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#FF6B9D',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
  },
  difficultiesContainer: {
    gap: 25,
  },
  difficultyCard: {
    borderRadius: 30,
    overflow: 'hidden',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  difficultyGradient: {
    padding: 35,
    alignItems: 'center',
    borderRadius: 30,
  },
  difficultyEmoji: {
    fontSize: 60,
    marginBottom: 15,
  },
  difficultyName: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  difficultyDescription: {
    color: '#fff',
    fontSize: 18,
    opacity: 0.95,
    textAlign: 'center',
    lineHeight: 24,
  },
});


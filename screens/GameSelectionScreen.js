import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const games = [
  {
    id: 1,
    name: 'Đoán Từ',
    emoji: '💡',
    icon: 'bulb',
    color: ['#FF6B9D', '#FF8E9B', '#FFB3BA'],
    screen: 'WordGuessing',
  },
  {
    id: 2,
    name: 'Điền Chỗ Trống',
    emoji: '✏️',
    icon: 'create',
    color: ['#A8E6CF', '#88D8A3', '#6BCB9F'],
    screen: 'FillBlank',
  },
  {
    id: 3,
    name: 'Trắc Nghiệm',
    emoji: '✅',
    icon: 'checkmark-circle',
    color: ['#FFD93D', '#FFB84D', '#FF9F66'],
    screen: 'MultipleChoice',
  },
];

export default function GameSelectionScreen({ navigation }) {
  return (
    <LinearGradient
      colors={['#FFE5E5', '#FFF4E5', '#E5F5FF']}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.headerContainer}>
          <Text style={styles.emoji}>🎮</Text>
          <Text style={styles.title}>Chọn Trò Chơi</Text>
          <Text style={styles.subtitle}>Bạn muốn chơi game nào? 🌟</Text>
        </View>
        <View style={styles.gamesContainer}>
          {games.map((game) => (
            <TouchableOpacity
              key={game.id}
              style={styles.gameCard}
              onPress={() => navigation.navigate('Difficulty', { gameType: game.screen })}
              activeOpacity={0.8}
            >
              <LinearGradient
                colors={game.color}
                style={styles.gameCardGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <Text style={styles.gameEmoji}>{game.emoji}</Text>
                <Ionicons name={game.icon} size={60} color="#fff" style={styles.gameIcon} />
                <Text style={styles.gameName}>{game.name}</Text>
                <View style={styles.playBadge}>
                  <Text style={styles.playBadgeText}>Chơi ngay →</Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
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
    color: '#FF6B9D',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
  },
  gamesContainer: {
    gap: 20,
  },
  gameCard: {
    borderRadius: 25,
    overflow: 'hidden',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    marginBottom: 10,
  },
  gameCardGradient: {
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 180,
    borderRadius: 25,
  },
  gameEmoji: {
    fontSize: 50,
    marginBottom: 10,
  },
  gameIcon: {
    marginBottom: 15,
    opacity: 0.9,
  },
  gameName: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  playBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    marginTop: 5,
  },
  playBadgeText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});


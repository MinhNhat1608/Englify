import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function ResultsScreen({ navigation, route }) {
  const { score, total, gameType } = route.params;
  const percentage = Math.round((score / total) * 100);
  const isExcellent = percentage >= 80;
  const isGood = percentage >= 60;

  const getMessage = () => {
    if (isExcellent) return '🎉 Xuất Sắc! Tuyệt Vời!';
    if (isGood) return '⭐ Tốt Lắm! Giỏi Quá!';
    return '💪 Cố Gắng Thêm Nhé!';
  };

  const getEmoji = () => {
    if (isExcellent) return '🏆';
    if (isGood) return '⭐';
    return '💪';
  };

  const getColor = () => {
    if (isExcellent) return ['#FFD93D', '#FFB84D', '#FF9F66'];
    if (isGood) return ['#A8E6CF', '#88D8A3', '#6BCB9F'];
    return ['#FF6B9D', '#FF8E9B', '#FFB3BA'];
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={getColor()} style={styles.gradient}>
        <View style={styles.content}>
          <Text style={styles.emoji}>{getEmoji()}</Text>
          <Text style={styles.title}>{getMessage()}</Text>
          <Text style={styles.subtitle}>Kết quả của bạn 🌟</Text>

          <View style={styles.scoreContainer}>
            <Text style={styles.scoreEmoji}>⭐</Text>
            <Text style={styles.score}>{score}</Text>
            <Text style={styles.total}>/ {total}</Text>
          </View>

          <View style={styles.percentageContainer}>
            <Text style={styles.percentageEmoji}>📊</Text>
            <Text style={styles.percentage}>{percentage}%</Text>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.infoEmoji}>🎮</Text>
            <Text style={styles.infoLabel}>Trò chơi:</Text>
            <Text style={styles.infoValue}>{gameType}</Text>
          </View>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Main')}
              activeOpacity={0.8}
            >
              <LinearGradient
                colors={['#fff', '#f0f0f0']}
                style={styles.buttonGradient}
              >
                <Text style={styles.buttonText}>🏠 Về Màn Hình Chính</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buttonSecondary]}
              onPress={() => navigation.navigate('GameSelection')}
              activeOpacity={0.8}
            >
              <Text style={[styles.buttonText, styles.buttonTextSecondary]}>
                🔄 Chơi Lại
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  content: {
    alignItems: 'center',
    width: '100%',
  },
  emoji: {
    fontSize: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontSize: 20,
    color: '#fff',
    opacity: 0.95,
    marginBottom: 30,
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
    gap: 10,
  },
  scoreEmoji: {
    fontSize: 40,
  },
  score: {
    fontSize: 72,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  total: {
    fontSize: 36,
    color: '#fff',
    opacity: 0.9,
  },
  percentageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 50,
    paddingHorizontal: 35,
    paddingVertical: 18,
    marginBottom: 30,
    gap: 12,
  },
  percentageEmoji: {
    fontSize: 28,
  },
  percentage: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
  },
  infoContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    borderRadius: 20,
    padding: 20,
    marginBottom: 40,
    width: '100%',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.4)',
  },
  infoEmoji: {
    fontSize: 32,
    marginBottom: 8,
  },
  infoLabel: {
    fontSize: 18,
    color: '#fff',
    opacity: 0.9,
    marginBottom: 5,
  },
  infoValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  buttonsContainer: {
    width: '100%',
    gap: 15,
  },
  button: {
    borderRadius: 25,
    overflow: 'hidden',
    width: '100%',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  buttonGradient: {
    padding: 20,
    alignItems: 'center',
  },
  buttonSecondary: {
    backgroundColor: 'transparent',
    borderWidth: 3,
    borderColor: '#fff',
    borderRadius: 25,
  },
  buttonText: {
    color: '#FF6B9D',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonTextSecondary: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});


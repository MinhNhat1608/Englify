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

export default function MainScreen({ navigation }) {
  const leaderboard = [
    { rank: 1, name: 'Nguyễn Văn A', score: 2500 },
    { rank: 2, name: 'Trần Thị B', score: 2300 },
    { rank: 3, name: 'Lê Văn C', score: 2100 },
    { rank: 4, name: 'Phạm Thị D', score: 1900 },
    { rank: 5, name: 'Hoàng Văn E', score: 1700 },
  ];

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#FF6B9D', '#FF8E9B', '#FFB3BA']}
        style={styles.header}
      >
        <Text style={styles.emoji}>👋</Text>
        <Text style={styles.headerTitle}>Chào Mừng! 🎉</Text>
        <Text style={styles.headerSubtitle}>Hãy bắt đầu học tiếng Anh vui vẻ nhé! 🌟</Text>
      </LinearGradient>

      <ScrollView style={styles.content}>
        <TouchableOpacity
          style={styles.playButton}
          onPress={() => navigation.navigate('GameSelection')}
          activeOpacity={0.8}
        >
          <LinearGradient
            colors={['#FFD93D', '#FFB84D', '#FF9F66']}
            style={styles.playButtonGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Text style={styles.playEmoji}>🎮</Text>
            <Ionicons name="play-circle" size={50} color="#fff" />
            <Text style={styles.playButtonText}>Bắt Đầu Chơi Ngay! 🚀</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.learnButton}
          onPress={() => navigation.navigate('Learning')}
          activeOpacity={0.8}
        >
          <LinearGradient
            colors={['#A8E6CF', '#88D8A3', '#6BCB9F']}
            style={styles.learnButtonGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Text style={styles.learnEmoji}>📚</Text>
            <Ionicons name="book" size={50} color="#fff" />
            <Text style={styles.learnButtonText}>Học Từ Vựng & Ngữ Pháp 📖</Text>
          </LinearGradient>
        </TouchableOpacity>

        <View style={styles.leaderboardSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionEmoji}>🏆</Text>
            <Text style={styles.sectionTitle}>Bảng Xếp Hạng</Text>
          </View>
          <View style={styles.leaderboardContainer}>
            {leaderboard.map((item) => (
              <View key={item.rank} style={styles.leaderboardItem}>
                <View style={[styles.rankContainer, item.rank === 1 && styles.rankFirst]}>
                  <Text style={styles.rankEmoji}>
                    {item.rank === 1 ? '🥇' : item.rank === 2 ? '🥈' : item.rank === 3 ? '🥉' : '⭐'}
                  </Text>
                  <Text style={styles.rank}>{item.rank}</Text>
                </View>
                <View style={styles.playerInfo}>
                  <Text style={styles.playerName}>{item.name}</Text>
                </View>
                <View style={styles.scoreContainer}>
                  <Text style={styles.scoreEmoji}>⭐</Text>
                  <Text style={styles.playerScore}>{item.score}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 30,
    paddingTop: 50,
    alignItems: 'center',
  },
  emoji: {
    fontSize: 60,
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  headerSubtitle: {
    fontSize: 18,
    color: '#fff',
    opacity: 0.95,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  playButton: {
    marginBottom: 30,
    borderRadius: 30,
    overflow: 'hidden',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  playButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
    gap: 12,
  },
  playEmoji: {
    fontSize: 40,
  },
  playButtonText: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  learnButton: {
    marginBottom: 30,
    borderRadius: 30,
    overflow: 'hidden',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  learnButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
    gap: 12,
  },
  learnEmoji: {
    fontSize: 40,
  },
  learnButtonText: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  leaderboardSection: {
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 25,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderWidth: 3,
    borderColor: '#FFD93D',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    gap: 10,
  },
  sectionEmoji: {
    fontSize: 32,
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FF6B9D',
  },
  leaderboardContainer: {
    gap: 10,
  },
  leaderboardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#FFF9E6',
    borderRadius: 20,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#FFE5B4',
  },
  rankContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#A8E6CF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    borderWidth: 3,
    borderColor: '#88D8A3',
  },
  rankFirst: {
    backgroundColor: '#FFD93D',
    borderColor: '#FFB84D',
  },
  rankEmoji: {
    fontSize: 20,
    marginBottom: 2,
  },
  rank: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 14,
  },
  playerInfo: {
    flex: 1,
  },
  playerName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  scoreEmoji: {
    fontSize: 18,
  },
  playerScore: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF6B9D',
  },
});


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

const learningTypes = [
  {
    id: 'vocabulary',
    name: 'Học Từ Vựng',
    emoji: '📚',
    icon: 'book',
    color: ['#A8E6CF', '#88D8A3', '#6BCB9F'],
    screen: 'VocabularyLearning',
  },
  {
    id: 'grammar',
    name: 'Học Ngữ Pháp',
    emoji: '📖',
    icon: 'school',
    color: ['#FFD93D', '#FFB84D', '#FF9F66'],
    screen: 'GrammarLearning',
  },
];

export default function LearningScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#667eea', '#764ba2', '#f093fb']}
        style={styles.headerGradient}
      >
        <View style={styles.headerContent}>
          <View style={styles.iconContainer}>
            <Ionicons name="library" size={40} color="#fff" />
          </View>
          <Text style={styles.title}>Học Tập</Text>
          <Text style={styles.subtitle}>Nâng cao vốn từ vựng và ngữ pháp</Text>
        </View>
      </LinearGradient>

      <ScrollView 
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.learningContainer}>
          {learningTypes.map((type, index) => (
            <TouchableOpacity
              key={type.id}
              style={styles.learningCard}
              onPress={() => navigation.navigate('Difficulty', { gameType: type.screen, learningType: true })}
              activeOpacity={0.9}
            >
              <View style={styles.cardShadow}>
                <LinearGradient
                  colors={type.color}
                  style={styles.learningCardGradient}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <View style={styles.cardHeader}>
                    <View style={styles.iconWrapper}>
                      <Ionicons name={type.icon} size={32} color="#fff" />
                    </View>
                    <View style={styles.badge}>
                      <Text style={styles.badgeText}>NEW</Text>
                    </View>
                  </View>
                  
                  <View style={styles.cardBody}>
                    <Text style={styles.learningName}>{type.name}</Text>
                    <Text style={styles.learningDescription}>
                      {type.id === 'vocabulary' 
                        ? 'Học từ vựng qua flashcard tương tác' 
                        : 'Nắm vững các quy tắc ngữ pháp cơ bản'}
                    </Text>
                  </View>

                  <View style={styles.cardFooter}>
                    <Text style={styles.learnButtonText}>Bắt đầu học</Text>
                    <Ionicons name="arrow-forward-circle" size={24} color="#fff" />
                  </View>
                </LinearGradient>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.infoSection}>
          <View style={styles.infoCard}>
            <Ionicons name="trophy" size={24} color="#667eea" />
            <Text style={styles.infoTitle}>Học hiệu quả</Text>
            <Text style={styles.infoText}>Phương pháp học tương tác giúp ghi nhớ lâu hơn</Text>
          </View>
          <View style={styles.infoCard}>
            <Ionicons name="time" size={24} color="#667eea" />
            <Text style={styles.infoTitle}>Linh hoạt</Text>
            <Text style={styles.infoText}>Học mọi lúc mọi nơi, theo tốc độ của bạn</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  headerGradient: {
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerContent: {
    alignItems: 'center',
  },
  iconContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.9,
    textAlign: 'center',
    fontWeight: '400',
  },
  content: {
    padding: 20,
    paddingTop: 30,
  },
  learningContainer: {
    gap: 20,
    marginBottom: 30,
  },
  learningCard: {
    borderRadius: 24,
    overflow: 'hidden',
  },
  cardShadow: {
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
  },
  learningCardGradient: {
    padding: 24,
    borderRadius: 24,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconWrapper: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  badge: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  cardBody: {
    marginBottom: 20,
  },
  learningName: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8,
    letterSpacing: 0.3,
  },
  learningDescription: {
    color: '#fff',
    fontSize: 15,
    opacity: 0.9,
    lineHeight: 22,
    fontWeight: '400',
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.2)',
  },
  learnButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
  infoSection: {
    flexDirection: 'row',
    gap: 15,
    marginTop: 10,
  },
  infoCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginTop: 8,
    marginBottom: 4,
  },
  infoText: {
    fontSize: 13,
    color: '#666',
    lineHeight: 18,
  },
});


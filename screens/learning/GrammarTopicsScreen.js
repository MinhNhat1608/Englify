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
import { grammarTopics } from '../../data/learningData';

export default function GrammarTopicsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#667eea', '#764ba2']}
        style={styles.headerGradient}
      >
        <View style={styles.headerContent}>
          <View style={styles.iconContainer}>
            <Ionicons name="school" size={32} color="#fff" />
          </View>
          <Text style={styles.title}>Chọn Chủ Đề</Text>
          <Text style={styles.subtitle}>Học ngữ pháp theo từng chủ đề</Text>
        </View>
      </LinearGradient>

      <ScrollView 
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.topicsContainer}>
          {grammarTopics.map((topic, index) => (
            <TouchableOpacity
              key={topic.id}
              style={styles.topicCard}
              onPress={() => navigation.navigate('Difficulty', { 
                gameType: 'GrammarLearning', 
                learningType: true,
                topicId: topic.id 
              })}
              activeOpacity={0.9}
            >
              <View style={styles.cardShadow}>
                <LinearGradient
                  colors={topic.color}
                  style={styles.topicCardGradient}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <View style={styles.topicHeader}>
                    <View style={styles.topicIconContainer}>
                      <Ionicons name={topic.icon} size={28} color="#fff" />
                    </View>
                    <View style={styles.topicInfo}>
                      <Text style={styles.topicName}>{topic.name}</Text>
                      <Text style={styles.topicDescription}>{topic.description}</Text>
                    </View>
                  </View>
                  <View style={styles.topicFooter}>
                    <Text style={styles.topicCount}>{topic.count} bài học</Text>
                    <Ionicons name="arrow-forward" size={20} color="#fff" />
                  </View>
                </LinearGradient>
              </View>
            </TouchableOpacity>
          ))}
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
    paddingBottom: 24,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerContent: {
    alignItems: 'center',
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 6,
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 15,
    color: '#fff',
    opacity: 0.9,
    textAlign: 'center',
    fontWeight: '400',
  },
  content: {
    padding: 20,
    paddingTop: 24,
  },
  topicsContainer: {
    gap: 16,
  },
  topicCard: {
    borderRadius: 20,
    overflow: 'hidden',
  },
  cardShadow: {
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
  },
  topicCardGradient: {
    padding: 20,
    borderRadius: 20,
  },
  topicHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 16,
    marginBottom: 16,
  },
  topicIconContainer: {
    width: 52,
    height: 52,
    borderRadius: 14,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topicInfo: {
    flex: 1,
  },
  topicName: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 6,
    letterSpacing: 0.3,
  },
  topicDescription: {
    color: '#fff',
    fontSize: 14,
    opacity: 0.9,
    lineHeight: 20,
    fontWeight: '400',
  },
  topicFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.2)',
  },
  topicCount: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    opacity: 0.95,
  },
});


import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { grammarData } from '../../data/learningData';

export default function GrammarLearning({ navigation, route }) {
  const { difficulty } = route.params;
  const [currentIndex, setCurrentIndex] = useState(0);

  const lessons = grammarData[difficulty] || grammarData.beginner;
  const currentLesson = lessons[currentIndex];

  const handleNext = () => {
    if (currentIndex < lessons.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#667eea', '#764ba2']}
        style={styles.header}
      >
        <View style={styles.headerContent}>
          <View style={styles.progressInfo}>
            <Ionicons name="school" size={20} color="#fff" />
            <Text style={styles.progressText}>
              Bài {currentIndex + 1} / {lessons.length}
            </Text>
          </View>
          <View style={styles.progressBarContainer}>
            <View style={styles.progressBar}>
              <View
                style={[
                  styles.progressFill,
                  { width: `${((currentIndex + 1) / lessons.length) * 100}%` },
                ]}
              />
            </View>
          </View>
        </View>
      </LinearGradient>

      <ScrollView 
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.lessonCard}>
          <LinearGradient
            colors={['#667eea', '#764ba2']}
            style={styles.lessonCardGradient}
          >
            <View style={styles.lessonHeader}>
              <View style={styles.lessonIconContainer}>
                <Ionicons name="book" size={24} color="#667eea" />
              </View>
              <View style={styles.lessonTitleContainer}>
                <Text style={styles.lessonTitle}>{currentLesson.title}</Text>
                <Text style={styles.lessonDescription}>{currentLesson.description}</Text>
              </View>
            </View>
          </LinearGradient>
        </View>

        <View style={styles.contentCard}>
          <View style={styles.sectionHeader}>
            <Ionicons name="document-text" size={20} color="#667eea" />
            <Text style={styles.contentLabel}>Nội dung bài học</Text>
          </View>
          <Text style={styles.contentText}>{currentLesson.content}</Text>
        </View>

        <View style={styles.examplesCard}>
          <View style={styles.sectionHeader}>
            <Ionicons name="bulb" size={20} color="#f5576c" />
            <Text style={styles.examplesLabel}>Ví dụ minh họa</Text>
          </View>
          {currentLesson.examples.map((example, index) => (
            <View key={index} style={styles.exampleItem}>
              <View style={styles.exampleNumber}>
                <Text style={styles.exampleNumberText}>{index + 1}</Text>
              </View>
              <View style={styles.exampleContent}>
                <Text style={styles.exampleEn}>"{example.en}"</Text>
                <Text style={styles.exampleVi}>{example.vi}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.navigationContainer}>
          <TouchableOpacity
            style={[styles.navButton, currentIndex === 0 && styles.navButtonDisabled]}
            onPress={handlePrevious}
            disabled={currentIndex === 0}
            activeOpacity={0.7}
          >
            <View style={styles.navButtonContent}>
              <Ionicons name="chevron-back" size={20} color={currentIndex === 0 ? '#999' : '#667eea'} />
              <Text style={[styles.navButtonText, currentIndex === 0 && styles.navButtonTextDisabled]}>
                Trước
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.navButton, currentIndex === lessons.length - 1 && styles.navButtonDisabled]}
            onPress={handleNext}
            disabled={currentIndex === lessons.length - 1}
            activeOpacity={0.7}
          >
            <View style={styles.navButtonContent}>
              <Text style={[styles.navButtonText, currentIndex === lessons.length - 1 && styles.navButtonTextDisabled]}>
                Sau
              </Text>
              <Ionicons name="chevron-forward" size={20} color={currentIndex === lessons.length - 1 ? '#999' : '#667eea'} />
            </View>
          </TouchableOpacity>
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
  header: {
    paddingTop: 60,
    paddingBottom: 24,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerContent: {
    gap: 12,
  },
  progressInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  progressText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    letterSpacing: 0.5,
  },
  progressBarContainer: {
    marginTop: 4,
  },
  progressBar: {
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 3,
  },
  content: {
    flex: 1,
    padding: 20,
    paddingTop: 24,
  },
  lessonCard: {
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 20,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
  },
  lessonCardGradient: {
    padding: 24,
  },
  lessonHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 16,
  },
  lessonIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lessonTitleContainer: {
    flex: 1,
  },
  lessonTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 8,
    letterSpacing: 0.3,
    lineHeight: 32,
  },
  lessonDescription: {
    fontSize: 15,
    color: '#fff',
    opacity: 0.9,
    lineHeight: 22,
    fontWeight: '400',
  },
  contentCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 16,
  },
  contentLabel: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    letterSpacing: 0.3,
  },
  contentText: {
    fontSize: 16,
    color: '#444',
    lineHeight: 26,
    fontWeight: '400',
  },
  examplesCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  examplesLabel: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    letterSpacing: 0.3,
  },
  exampleItem: {
    flexDirection: 'row',
    backgroundColor: '#f8f9fa',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    gap: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#f5576c',
  },
  exampleNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#f5576c',
    justifyContent: 'center',
    alignItems: 'center',
  },
  exampleNumberText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#fff',
  },
  exampleContent: {
    flex: 1,
    gap: 6,
  },
  exampleEn: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
    fontStyle: 'italic',
    lineHeight: 24,
  },
  exampleVi: {
    fontSize: 15,
    color: '#666',
    lineHeight: 22,
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    marginTop: 8,
  },
  navButton: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  navButtonDisabled: {
    opacity: 0.5,
    backgroundColor: '#f0f0f0',
  },
  navButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  navButtonText: {
    color: '#667eea',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
  navButtonTextDisabled: {
    color: '#999',
  },
});


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
import { vocabularyData } from '../../data/learningData';

export default function VocabularyLearning({ navigation, route }) {
  const { difficulty } = route.params;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);

  const words = vocabularyData[difficulty] || vocabularyData.beginner;
  const currentWord = words[currentIndex];

  const flipCard = () => {
    setShowTranslation(!showTranslation);
  };

  const handleNext = () => {
    if (currentIndex < words.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowTranslation(false);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setShowTranslation(false);
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
            <Ionicons name="book" size={20} color="#fff" />
            <Text style={styles.progressText}>
              {currentIndex + 1} / {words.length}
            </Text>
          </View>
          <View style={styles.progressBarContainer}>
            <View style={styles.progressBar}>
              <View
                style={[
                  styles.progressFill,
                  { width: `${((currentIndex + 1) / words.length) * 100}%` },
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
        <TouchableOpacity
          style={styles.cardContainer}
          onPress={flipCard}
          activeOpacity={0.95}
        >
          {!showTranslation ? (
            <View style={styles.cardShadow}>
              <LinearGradient
                colors={['#667eea', '#764ba2']}
                style={styles.cardGradient}
              >
                <View style={styles.cardTop}>
                  <View style={styles.categoryBadge}>
                    <Ionicons name="pricetag" size={14} color="#667eea" />
                    <Text style={styles.category}>{currentWord.category}</Text>
                  </View>
                </View>
                
                <View style={styles.cardCenter}>
                  <Text style={styles.word}>{currentWord.word}</Text>
                  <View style={styles.pronunciationContainer}>
                    <Ionicons name="volume-high" size={18} color="rgba(255,255,255,0.8)" />
                    <Text style={styles.pronunciation}>{currentWord.pronunciation}</Text>
                  </View>
                </View>

                <View style={styles.cardBottom}>
                  <View style={styles.flipHint}>
                    <Ionicons name="swap-horizontal" size={20} color="rgba(255,255,255,0.9)" />
                    <Text style={styles.flipHintText}>Chạm để xem nghĩa</Text>
                  </View>
                </View>
              </LinearGradient>
            </View>
          ) : (
            <View style={styles.cardShadow}>
              <LinearGradient
                colors={['#f093fb', '#f5576c']}
                style={styles.cardGradient}
              >
                <View style={styles.cardTop}>
                  <View style={styles.translationBadge}>
                    <Ionicons name="language" size={16} color="#f5576c" />
                    <Text style={styles.translationLabel}>Nghĩa</Text>
                  </View>
                </View>

                <View style={styles.cardCenter}>
                  <Text style={styles.translation}>{currentWord.translation}</Text>
                  
                  <View style={styles.exampleContainer}>
                    <View style={styles.exampleHeader}>
                      <Ionicons name="bulb" size={18} color="rgba(255,255,255,0.9)" />
                      <Text style={styles.exampleLabel}>Ví dụ</Text>
                    </View>
                    <View style={styles.exampleContent}>
                      <Text style={styles.exampleEn}>"{currentWord.example}"</Text>
                      <Text style={styles.exampleVi}>{currentWord.exampleTranslation}</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.cardBottom}>
                  <View style={styles.flipHint}>
                    <Ionicons name="swap-horizontal" size={20} color="rgba(255,255,255,0.9)" />
                    <Text style={styles.flipHintText}>Chạm để quay lại</Text>
                  </View>
                </View>
              </LinearGradient>
            </View>
          )}
        </TouchableOpacity>

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
            style={[styles.navButton, currentIndex === words.length - 1 && styles.navButtonDisabled]}
            onPress={handleNext}
            disabled={currentIndex === words.length - 1}
            activeOpacity={0.7}
          >
            <View style={styles.navButtonContent}>
              <Text style={[styles.navButtonText, currentIndex === words.length - 1 && styles.navButtonTextDisabled]}>
                Sau
              </Text>
              <Ionicons name="chevron-forward" size={20} color={currentIndex === words.length - 1 ? '#999' : '#667eea'} />
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
    alignItems: 'center',
    paddingTop: 30,
  },
  cardContainer: {
    width: '100%',
    minHeight: 450,
    marginBottom: 24,
  },
  cardShadow: {
    borderRadius: 24,
    overflow: 'hidden',
    elevation: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
  },
  cardGradient: {
    minHeight: 450,
    borderRadius: 24,
    padding: 28,
    justifyContent: 'space-between',
  },
  cardTop: {
    alignItems: 'flex-start',
  },
  categoryBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 6,
  },
  category: {
    fontSize: 13,
    color: '#fff',
    fontWeight: '600',
    letterSpacing: 0.3,
  },
  translationBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 6,
  },
  translationLabel: {
    fontSize: 13,
    color: '#fff',
    fontWeight: '600',
    letterSpacing: 0.3,
  },
  cardCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  word: {
    fontSize: 56,
    fontWeight: '700',
    color: '#fff',
    letterSpacing: 1,
    textAlign: 'center',
  },
  pronunciationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
  },
  pronunciation: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '500',
    letterSpacing: 0.5,
  },
  translation: {
    fontSize: 48,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
    letterSpacing: 0.5,
    marginBottom: 8,
  },
  exampleContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 16,
    padding: 20,
    width: '100%',
    marginTop: 16,
  },
  exampleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  exampleLabel: {
    fontSize: 15,
    color: '#fff',
    fontWeight: '600',
    letterSpacing: 0.3,
  },
  exampleContent: {
    gap: 8,
  },
  exampleEn: {
    fontSize: 17,
    color: '#fff',
    fontStyle: 'italic',
    lineHeight: 24,
    fontWeight: '500',
  },
  exampleVi: {
    fontSize: 15,
    color: '#fff',
    opacity: 0.95,
    lineHeight: 22,
  },
  cardBottom: {
    alignItems: 'center',
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.2)',
  },
  flipHint: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  flipHintText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0.3,
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    gap: 12,
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


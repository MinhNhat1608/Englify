import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { wordGuessingData } from '../../data/gameData';

export default function WordGuessingGame({ navigation, route }) {
  const { difficulty } = route.params;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameStarted, setGameStarted] = useState(false);

  const questions = wordGuessingData[difficulty] || wordGuessingData.beginner;
  const currentQuestion = questions[currentIndex];

  useEffect(() => {
    if (gameStarted && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      handleNext();
    }
  }, [timeLeft, gameStarted]);

  const handleStart = () => {
    setGameStarted(true);
  };

  const handleSubmit = () => {
    if (userAnswer.trim().toLowerCase() === currentQuestion.word.toLowerCase()) {
      setScore(score + 1);
      Alert.alert('🎉 Đúng rồi! Tuyệt vời!', `Bạn đã đoán đúng từ "${currentQuestion.word}"`);
    } else {
      Alert.alert(
        '😊 Chưa đúng!', 
        `Đáp án đúng là: "${currentQuestion.word}"\n\n💡 Giải thích:\n${currentQuestion.explanation}\n\nCố gắng lần sau nhé! 💪`
      );
    }
    handleNext();
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setUserAnswer('');
      setTimeLeft(30);
    } else {
      navigation.navigate('Results', {
        score,
        total: questions.length,
        gameType: 'Đoán Từ',
      });
    }
  };

  if (!gameStarted) {
    return (
      <View style={styles.container}>
        <LinearGradient colors={['#FF6B9D', '#FF8E9B', '#FFB3BA']} style={styles.startScreen}>
          <Text style={styles.startEmoji}>💡</Text>
          <Text style={styles.startTitle}>Sẵn Sàng Chưa? 🎮</Text>
          <Text style={styles.startSubtitle}>
            Bạn sẽ có 30 giây cho mỗi câu hỏi ⏱️
          </Text>
          <Text style={styles.startHint}>Hãy đoán từ tiếng Anh dựa trên gợi ý nhé! 🌟</Text>
          <TouchableOpacity style={styles.startButton} onPress={handleStart} activeOpacity={0.8}>
            <LinearGradient
              colors={['#FFD93D', '#FFB84D']}
              style={styles.startButtonGradient}
            >
              <Text style={styles.startButtonText}>Bắt Đầu Ngay! 🚀</Text>
            </LinearGradient>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#FF6B9D', '#FF8E9B']} style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.scoreContainer}>
            <Text style={styles.scoreEmoji}>⭐</Text>
            <Text style={styles.score}>Điểm: {score}/{questions.length}</Text>
          </View>
          <View style={styles.timerContainer}>
            <Text style={styles.timerEmoji}>⏱️</Text>
            <Text style={styles.timer}>{timeLeft}s</Text>
          </View>
        </View>
      </LinearGradient>

      <View style={styles.content}>
        <View style={styles.questionCard}>
          <View style={styles.questionHeader}>
            <Text style={styles.questionEmoji}>❓</Text>
            <Text style={styles.questionNumber}>
              Câu {currentIndex + 1}/{questions.length}
            </Text>
          </View>
          <Text style={styles.hint}>{currentQuestion.hint}</Text>
          <View style={styles.translationContainer}>
            <Text style={styles.translationEmoji}>💭</Text>
            <Text style={styles.translation}>
              Nghĩa: {currentQuestion.translation}
            </Text>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>✏️ Nhập từ tiếng Anh:</Text>
          <TextInput
            style={styles.input}
            placeholder="Gõ từ của bạn ở đây..."
            placeholderTextColor="#999"
            value={userAnswer}
            onChangeText={setUserAnswer}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>

        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmit}
          disabled={!userAnswer.trim()}
          activeOpacity={0.8}
        >
          <LinearGradient
            colors={['#FFD93D', '#FFB84D', '#FF9F66']}
            style={styles.submitButtonGradient}
          >
            <Text style={styles.submitButtonText}>Xác Nhận ✨</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9E6',
  },
  startScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  startEmoji: {
    fontSize: 80,
    marginBottom: 20,
  },
  startTitle: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  startSubtitle: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 15,
    textAlign: 'center',
    opacity: 0.95,
  },
  startHint: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 40,
    textAlign: 'center',
    opacity: 0.9,
    paddingHorizontal: 20,
  },
  startButton: {
    borderRadius: 30,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  startButtonGradient: {
    paddingHorizontal: 50,
    paddingVertical: 18,
  },
  startButtonText: {
    color: '#FF6B9D',
    fontSize: 22,
    fontWeight: 'bold',
  },
  header: {
    padding: 20,
    paddingTop: 50,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  scoreEmoji: {
    fontSize: 24,
  },
  score: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  timerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  timerEmoji: {
    fontSize: 20,
  },
  timer: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  questionCard: {
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 25,
    marginBottom: 25,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    borderWidth: 3,
    borderColor: '#FFD93D',
  },
  questionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: 10,
  },
  questionEmoji: {
    fontSize: 24,
  },
  questionNumber: {
    fontSize: 18,
    color: '#FF6B9D',
    fontWeight: 'bold',
  },
  hint: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
    lineHeight: 32,
  },
  translationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E5F5FF',
    padding: 12,
    borderRadius: 15,
    gap: 8,
  },
  translationEmoji: {
    fontSize: 20,
  },
  translation: {
    fontSize: 18,
    color: '#4A90E2',
    fontWeight: '600',
  },
  inputContainer: {
    marginBottom: 25,
  },
  inputLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 18,
    fontSize: 20,
    borderWidth: 3,
    borderColor: '#FF6B9D',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  submitButton: {
    borderRadius: 25,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  submitButtonGradient: {
    padding: 20,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
});


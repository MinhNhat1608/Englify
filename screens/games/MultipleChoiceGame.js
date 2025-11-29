import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { multipleChoiceData } from '../../data/gameData';

export default function MultipleChoiceGame({ navigation, route }) {
  const { difficulty } = route.params;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameStarted, setGameStarted] = useState(false);

  const questions = multipleChoiceData[difficulty] || multipleChoiceData.beginner;
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
    if (selectedOption === null) {
      Alert.alert('😊 Chưa chọn đáp án', 'Vui lòng chọn một đáp án nhé!');
      return;
    }

    if (selectedOption === currentQuestion.correct) {
      setScore(score + 1);
      Alert.alert('🎉 Đúng rồi! Tuyệt vời!', 'Bạn đã chọn đúng!');
    } else {
      Alert.alert(
        '😊 Chưa đúng!',
        `Đáp án đúng là: "${currentQuestion.options[currentQuestion.correct]}"\n\n💡 Giải thích:\n${currentQuestion.explanation}\n\nCố gắng lần sau nhé! 💪`
      );
    }
    handleNext();
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
      setTimeLeft(30);
    } else {
      navigation.navigate('Results', {
        score,
        total: questions.length,
        gameType: 'Trắc Nghiệm',
      });
    }
  };

  if (!gameStarted) {
    return (
      <View style={styles.container}>
        <LinearGradient colors={['#FFD93D', '#FFB84D', '#FF9F66']} style={styles.startScreen}>
          <Text style={styles.startEmoji}>✅</Text>
          <Text style={styles.startTitle}>Sẵn Sàng Chưa? 🎮</Text>
          <Text style={styles.startSubtitle}>
            Bạn sẽ có 30 giây cho mỗi câu hỏi ⏱️
          </Text>
          <Text style={styles.startHint}>Hãy chọn đáp án đúng nhất nhé! 🌟</Text>
          <TouchableOpacity style={styles.startButton} onPress={handleStart} activeOpacity={0.8}>
            <LinearGradient
              colors={['#FF6B9D', '#FF8E9B']}
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
      <LinearGradient colors={['#FFD93D', '#FFB84D']} style={styles.header}>
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
          <Text style={styles.question}>{currentQuestion.question}</Text>
        </View>

        <View style={styles.optionsContainer}>
          <Text style={styles.optionsLabel}>🔤 Chọn đáp án đúng:</Text>
          {currentQuestion.options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.optionButton,
                selectedOption === index && styles.optionButtonSelected,
              ]}
              onPress={() => setSelectedOption(index)}
              activeOpacity={0.7}
            >
              <Text
                style={[
                  styles.optionText,
                  selectedOption === index && styles.optionTextSelected,
                ]}
              >
                {String.fromCharCode(65 + index)}. {option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmit}
          disabled={selectedOption === null}
          activeOpacity={0.8}
        >
          <LinearGradient
            colors={['#FF6B9D', '#FF8E9B', '#FFB3BA']}
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
    color: '#fff',
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
    color: '#FFD93D',
    fontWeight: 'bold',
  },
  question: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
    lineHeight: 32,
  },
  optionsContainer: {
    marginBottom: 25,
    gap: 15,
  },
  optionsLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  optionButton: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    borderWidth: 3,
    borderColor: '#E0E0E0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  optionButtonSelected: {
    borderColor: '#FFD93D',
    backgroundColor: '#FFF9E6',
    borderWidth: 4,
  },
  optionText: {
    fontSize: 20,
    color: '#333',
    fontWeight: '500',
  },
  optionTextSelected: {
    color: '#FFD93D',
    fontWeight: 'bold',
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


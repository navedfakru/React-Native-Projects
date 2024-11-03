import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Pressable
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import ModalDisplay from "../components/ModalDisplay";

const quizQuestions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    answer: "Paris",
    id: 1,
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars",
    id: 2,
  },
  {
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Pacific Ocean",
      "Arctic Ocean",
    ],
    answer: "Pacific Ocean",
    id: 3,
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: [
      "Charles Dickens",
      "William Shakespeare",
      "Jane Austen",
      "Mark Twain",
    ],
    answer: "William Shakespeare",
    id: 4,
  },
  {
    question: "What is the smallest prime number?",
    options: ["1", "2", "3", "5"],
    answer: "2",
    id: 5,
  },
  {
    question: "How many continents are there on Earth?",
    options: ["5", "6", "7", "8"],
    answer: "7",
    id: 6,
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["O2", "H2", "H2O", "CO2"],
    answer: "H2O",
    id: 7,
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Japan", "Thailand", "Vietnam"],
    answer: "Japan",
    id: 8,
  },
  {
    question: "What is the square root of 64?",
    options: ["6", "7", "8", "9"],
    answer: "8",
    id: 9,
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Claude Monet",
    ],
    answer: "Leonardo da Vinci",
    id: 10,
  },
];

const QuizApp = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [visibleModal, setVisibleModal] = useState(false)
  const [feedback, setFeedback] = useState({});

  const handleAnswer = (selectedOption, questionId) => {
    const correctAnswer = quizQuestions.find((q) => q.id === questionId).answer;
    const isCorrect = selectedOption === correctAnswer;

    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedOption,
    }));

    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [questionId]: isCorrect ? "Correct!" : "Wrong answer!",
    }));
  };

  return (
    <ScrollView style={styles.mainConainer}>
      <View style={styles.questioconatiner}>
        {quizQuestions.map((item, index) => (
          <View key={item.id} style={styles.questionView}>
            <Text style={styles.question}>{item.question}</Text>
            {item.options.map((option, optionIndex) => (
              <TouchableOpacity
                key={optionIndex}
                onPress={() => handleAnswer(option, item.id)}
                style={[
                  styles.options,
                  selectedAnswers[item.id] === option && {
                    backgroundColor:
                      selectedAnswers[item.id] === item.answer
                        ? "lightgreen"
                        : "lightcoral",
                  },
                ]}
              >
                <Text style={styles.optionsText}>{option}</Text>
                {selectedAnswers[item.id] === option &&
                  (selectedAnswers[item.id] === item.answer ? (
                    <MaterialCommunityIcons
                      name="check-decagram"
                      size={25}
                      color="oldlace"
                    />
                  ) : (
                    <Entypo name="circle-with-cross" size={25} color="red" />
                  ))}
              </TouchableOpacity>
            ))}
            {feedback[item.id] && (
              <Text
                style={[
                  styles.feedbackText,
                  {
                    color:
                      feedback[item.id] === "Correct!"
                        ? "steelblue"
                        : "lightcoral",
                  },
                ]}
              >
                {feedback[item.id]}
              </Text>
            )}
          </View>
        ))}
      </View>
      <ModalDisplay code={code} />
    </ScrollView>
  );
};

export default QuizApp;

const styles = StyleSheet.create({
  mainConainer: {
    backgroundColor: "slategray",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  questioconatiner: {
    marginVertical: 20,
  },
  questionView: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
  },
  question: {
    fontFamily: "InterBlack",
    color: "white",
    paddingVertical: 10,
    fontSize: 18,
  },
  options: {
    marginBottom: 5,
    backgroundColor: "whitesmoke",
    color: "black",
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  optionsText: {
    fontFamily: "InterBold",
    fontSize: 16,
  },
  feedbackText: {
    fontFamily: "InterSemi",
    fontSize: 16,
  },
});

const code = `
# **Quiz App**
\`\`\`javascript
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";

const quizQuestions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    answer: "Paris",
    id: 1,
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars",
    id: 2,
  },
  {
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Pacific Ocean",
      "Arctic Ocean",
    ],
    answer: "Pacific Ocean",
    id: 3,
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: [
      "Charles Dickens",
      "William Shakespeare",
      "Jane Austen",
      "Mark Twain",
    ],
    answer: "William Shakespeare",
    id: 4,
  },
  {
    question: "What is the smallest prime number?",
    options: ["1", "2", "3", "5"],
    answer: "2",
    id: 5,
  },
  {
    question: "How many continents are there on Earth?",
    options: ["5", "6", "7", "8"],
    answer: "7",
    id: 6,
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["O2", "H2", "H2O", "CO2"],
    answer: "H2O",
    id: 7,
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Japan", "Thailand", "Vietnam"],
    answer: "Japan",
    id: 8,
  },
  {
    question: "What is the square root of 64?",
    options: ["6", "7", "8", "9"],
    answer: "8",
    id: 9,
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Claude Monet",
    ],
    answer: "Leonardo da Vinci",
    id: 10,
  },
];

const QuizApp = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [feedback, setFeedback] = useState({});

  const handleAnswer = (selectedOption, questionId) => {
    const correctAnswer = quizQuestions.find((q) => q.id === questionId).answer;
    const isCorrect = selectedOption === correctAnswer;

    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedOption,
    }));

    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [questionId]: isCorrect ? "Correct!" : "Wrong answer!",
    }));
  };

  return (
    <ScrollView style={styles.mainConainer}>
      <View style={styles.questioconatiner}>
        {quizQuestions.map((item, index) => (
          <View key={item.id} style={styles.questionView}>
            <Text style={styles.question}>{item.question}</Text>
            {item.options.map((option, optionIndex) => (
              <TouchableOpacity
                key={optionIndex}
                onPress={() => handleAnswer(option, item.id)}
                style={[
                  styles.options,
                  selectedAnswers[item.id] === option && {
                    backgroundColor:
                      selectedAnswers[item.id] === item.answer
                        ? "lightgreen"
                        : "lightcoral",
                  },
                ]}
              >
                <Text style={styles.optionsText}>{option}</Text>
                {selectedAnswers[item.id] === option &&
                  (selectedAnswers[item.id] === item.answer ? (
                    <MaterialCommunityIcons
                      name="check-decagram"
                      size={25}
                      color="oldlace"
                    />
                  ) : (
                    <Entypo name="circle-with-cross" size={25} color="red" />
                  ))}
              </TouchableOpacity>
            ))}
            {feedback[item.id] && (
              <Text
                style={[
                  styles.feedbackText,
                  {
                    color:
                      feedback[item.id] === "Correct!"
                        ? "steelblue"
                        : "lightcoral",
                  },
                ]}
              >
                {feedback[item.id]}
              </Text>
            )}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default QuizApp;

const styles = StyleSheet.create({
  mainConainer: {
    backgroundColor: "slategray",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  questioconatiner: {
    marginVertical: 20,
  },
  questionView: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
  },
  question: {
    fontFamily: "InterBlack",
    color: "white",
    paddingVertical: 10,
    fontSize: 18,
  },
  options: {
    marginBottom: 5,
    backgroundColor: "whitesmoke",
    color: "black",
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  optionsText: {
    fontFamily: "InterBold",
    fontSize: 16,
  },
  feedbackText: {
    fontFamily: "InterSemi",
    fontSize: 16,
  },
});
\`\`\`
`;

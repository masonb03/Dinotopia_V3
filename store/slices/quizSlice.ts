import { createSlice } from "@reduxjs/toolkit";

interface QuizState {
  score: number;
  currentQuestion: number;
  answers: string[];
}

const initialState: QuizState = {
  score: 0,
  currentQuestion: 0,
  answers: [],
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    answerQuestion: (state, action) => {
      state.answers.push(action.payload);
    },
    nextQuestion: (state) => {
      state.currentQuestion += 1;
    },
    resetQuiz: (state) => {
      state.score = 0;
      state.currentQuestion = 0;
      state.answers = [];
    },
  },
});

export const { answerQuestion, nextQuestion, resetQuiz } = quizSlice.actions;
export default quizSlice.reducer;
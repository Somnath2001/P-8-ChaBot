package com.chatbot.service;

import java.util.List;

import com.chatbot.model.Answer;
import com.chatbot.model.ChatMessage;
import com.chatbot.model.Question;
import com.chatbot.model.User;
import com.chatbot.model.UserFeedback;

import java.util.List;

public interface ChatService {
    // Get all questions
    List<Question> getAllQuestions();

    // Get all answers
    List<Answer> getAllAnswers();

    // Get all user feedback
    List<UserFeedback> getAllUserFeedback();

    // Get all users
    List<User> getAllUsers();

    // Check user satisfaction and initiate one-to-one chat if not satisfied
    void handleUserSatisfaction(long userId, boolean satisfied);

    // Initiate one-to-one chat with a selected person
    void initiateOneToOneChat(long userId, long selectedPersonId);

	List<Answer> getAnswersByQuestionId(long questionId);
}

package com.chatbot.service;

import java.util.List;

import com.chatbot.model.Answer;
import com.chatbot.model.ChatMessage;
import com.chatbot.model.Question;
import com.chatbot.model.UserFeedback;

public interface ChatService {
    List<Question> getAllQuestions();
    List<Answer> getAnswersByQuestion(Question question);
    void saveUserFeedback(UserFeedback feedback);
    void saveChatMessage(ChatMessage message);
    // Add other methods as needed
}
package com.excelr.service;

import java.util.List;

import com.excelr.model.Answer;
import com.excelr.model.ChatMessage;
import com.excelr.model.Question;
import com.excelr.model.UserFeedback;

public interface ChatService {
    List<Question> getAllQuestions();
    List<Answer> getAnswersByQuestion(Question question);
    void saveUserFeedback(UserFeedback feedback);
    void saveChatMessage(ChatMessage message);
    // Add other methods as needed
}
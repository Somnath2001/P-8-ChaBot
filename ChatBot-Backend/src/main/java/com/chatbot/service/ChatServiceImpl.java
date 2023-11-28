package com.chatbot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.chatbot.model.Answer;
import com.chatbot.model.ChatMessage;
import com.chatbot.model.Question;
import com.chatbot.model.UserFeedback;
import com.chatbot.repository.AnswerRepository;
import com.chatbot.repository.ChatMessageRepository;
import com.chatbot.repository.QuestionRepository;
import com.chatbot.repository.UserFeedbackRepository;
@Service
public class ChatServiceImpl implements ChatService {

    @Autowired
    private QuestionRepository questionRepository;

    @Autowired
    private AnswerRepository answerRepository;

    @Autowired
    private UserFeedbackRepository userFeedbackRepository;

    @Autowired
    private ChatMessageRepository chatMessageRepository;

    @Override
    public List<Question> getAllQuestions() {
        return questionRepository.findAll();
    }

    @Override
    public List<Answer> getAnswersByQuestion(Question question) {
        return answerRepository.findByQuestion(question);
    }

    @Override
    public void saveUserFeedback(UserFeedback feedback) {
        userFeedbackRepository.save(feedback);
    }

    @Override
    public void saveChatMessage(ChatMessage message) {
        chatMessageRepository.save(message);
    }
}
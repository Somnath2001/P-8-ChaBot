package com.excelr.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.excelr.model.Answer;
import com.excelr.model.ChatMessage;
import com.excelr.model.Question;
import com.excelr.model.UserFeedback;
import com.excelr.repository.AnswerRepository;
import com.excelr.repository.ChatMessageRepository;
import com.excelr.repository.QuestionRepository;
import com.excelr.repository.UserFeedbackRepository;
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
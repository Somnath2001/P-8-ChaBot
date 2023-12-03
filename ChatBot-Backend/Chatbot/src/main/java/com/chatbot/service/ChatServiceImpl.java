package com.chatbot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.chatbot.model.Answer;
import com.chatbot.model.Question;
import com.chatbot.model.User;
import com.chatbot.model.UserFeedback;
import com.chatbot.repository.AnswerRepository;
import com.chatbot.repository.QuestionRepository;
import com.chatbot.repository.UserFeedbackRepository;
import com.chatbot.repository.UserRepository;

import java.util.List;

@Service
public class ChatServiceImpl implements ChatService {

    @Autowired
    private QuestionRepository questionRepository;

    @Autowired
    private AnswerRepository answerRepository;

    @Autowired
    private UserFeedbackRepository userFeedbackRepository;

    @Autowired
    private UserRepository userRepository;


    @Override
    public List<Question> getAllQuestions() {
        return questionRepository.findAll();
    }

    @Override
    public List<Answer> getAllAnswers() {
        return answerRepository.findAll();
    }

    @Override
    public List<UserFeedback> getAllUserFeedback() {
        return userFeedbackRepository.findAll();
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public void handleUserSatisfaction(long userId, boolean satisfied) {
        // Implement the logic to handle user satisfaction and initiate one-to-one chat if not satisfied
        // You can use other repositories or services as needed
    }

    @Override
    public void initiateOneToOneChat(long userId, long selectedPersonId) {
        // Implement the logic to initiate one-to-one chat with the selected person
        // You can use other repositories or services as needed
    }

	@Override
	public List<Answer> getAnswersByQuestionId(long questionId) {
		return answerRepository.findByQuestionId(questionId);
	}
   
}

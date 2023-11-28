package com.chatbot.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.chatbot.model.Answer;
import com.chatbot.model.Question;
import com.chatbot.model.User;
import com.chatbot.model.UserFeedback;
import com.chatbot.repository.QuestionRepository;
import com.chatbot.repository.UserRepository;
import com.chatbot.service.ChatService;

@Controller
@RequestMapping("/chat")
public class ChatController {

    @Autowired
    private ChatService chatService;

    @Autowired
    private QuestionRepository questionRepository;

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/questions")
    public String showQuestions(Model model) {
        List<Question> questions = chatService.getAllQuestions();
        model.addAttribute("questions", questions);
        return "chat";
    }

    @GetMapping("/answers/{questionId}")
    public String showAnswers(@PathVariable Long questionId, Model model) {
        Question question = questionRepository.findById(questionId).orElse(null);
        if (question != null) {
            List<Answer> answers = chatService.getAnswersByQuestion(question);
            model.addAttribute("answers", answers);
        }
        return "answers";
    }

    @PostMapping("/feedback")
    public String submitFeedback(@RequestParam Long userId, @RequestParam String feedback) {
        User user = userRepository.findById(userId).orElse(null);
        if (user != null) {
            UserFeedback userFeedback = new UserFeedback();
            userFeedback.setUser(user);
            userFeedback.setFeedback(feedback);
            chatService.saveUserFeedback(userFeedback);
        }
        return "redirect:/chat/questions";
    }
}

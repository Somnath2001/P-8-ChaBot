package com.excelr.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.excelr.model.Answer;
import com.excelr.model.Question;

public interface AnswerRepository extends JpaRepository<Answer, Long> {

	List<Answer> findByQuestion(Question question);
}

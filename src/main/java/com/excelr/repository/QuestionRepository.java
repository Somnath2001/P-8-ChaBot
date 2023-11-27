package com.excelr.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.excelr.model.Question;

public interface QuestionRepository extends JpaRepository<Question, Long> {

}

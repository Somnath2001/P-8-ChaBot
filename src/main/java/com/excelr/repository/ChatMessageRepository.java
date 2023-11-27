package com.excelr.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.excelr.model.ChatMessage;

public interface ChatMessageRepository extends JpaRepository<ChatMessage, Long>{

}

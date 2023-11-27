package com.excelr.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.excelr.model.Role;
import com.excelr.model.UserRole;

public interface RoleRepository extends JpaRepository<Role, Long>{
	Optional<Role> findByName(UserRole name);
}

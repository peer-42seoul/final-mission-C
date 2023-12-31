package com.peer.missionpeerflow.repository;

import com.peer.missionpeerflow.entity.Question;
import com.peer.missionpeerflow.util.Category;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionRepository extends JpaRepository<Question, Long> {

    Page<Question> findByCategory(Category category, Pageable pageable);
    Page<Question> findAll(Specification<Question> spec, Pageable pageable);
}

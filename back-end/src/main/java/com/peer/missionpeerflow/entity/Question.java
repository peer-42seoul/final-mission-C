package com.peer.missionpeerflow.entity;

import com.peer.missionpeerflow.util.Category;
import com.peer.missionpeerflow.util.CategoryAttributeConverter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Convert;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
@Getter
@NoArgsConstructor
@Table(name = "question")
@Entity
public class Question extends BaseEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long questionId;

	@Column(nullable = false)
	private String title;

	@Column(nullable = false)
	@Convert(converter = CategoryAttributeConverter.class)
	private Category category;

	@Column(nullable = false)
	private Long recommend = 0L;

	@Column(nullable = false)
	private Long view = 0L;

	@OneToMany(mappedBy = "question", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Answer> answerList = new ArrayList<>();

	@OneToMany(mappedBy = "question", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<QuestionComment> questionCommentList = new ArrayList<>();

	@Builder
	public Question(String title, Category category, String nickname, String password, String content,List<Answer> answerList, List<QuestionComment> questionCommentList, Long view) {
		this.title = title;
		this.category = category;
		this.nickname = nickname;
		this.password = password;
		this.content = content;
		this.answerList = answerList;
		this.questionCommentList = questionCommentList;
		this.view = view;
	}

	public void update(String title, String nickname, Category category, String content) {
		this.title = title;
		this.nickname = nickname;
		this.category = category;
		this.content = content;
		this.updatedAt = LocalDateTime.now();
	}

	public void updateRecommend(Long recommend) {
		this.recommend = recommend;
	}

	public void updateView(Long view) {
		this.view = view;
	}
}

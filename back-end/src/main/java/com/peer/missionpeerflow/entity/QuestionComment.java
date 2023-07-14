package com.peer.missionpeerflow.entity;

import com.sun.istack.NotNull;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Table(name = "question_comment")
@Entity
public class QuestionComment extends BaseEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long questionCommentId;

	@NotNull
	@ManyToOne
	@JoinColumn(name = "question_id")
	private Question question;

	@Builder
	public QuestionComment (String content, String nickname, String password, Question question)
	{
		this.content = content;
		this.nickname = nickname;
		this.password = password;
		this.question = question;
	}

	public void updateQuestionComment (String nickname, String content)
	{
		this.nickname = nickname;
		this.content = content;
	}
}

package com.peer.missionpeerflow.entity;

import com.sun.istack.NotNull;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Table(name = "answer_comment")
@Entity
public class AnswerComment extends BaseEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long answerCommentId;

	@NotNull
	@ManyToOne
	@JoinColumn(name = "answer_id")
	private Answer answer;

	@Builder
	public AnswerComment (String content, String nickname, String password, Answer answer)
	{
		this.content = content;
		this.nickname = nickname;
		this.password = password;
		this.answer = answer;
	}

	public void updateAnswerComment (String content, String nickname)
	{
		this.content = content;
		this.nickname = nickname;
	}
}

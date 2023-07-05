export default class questionItemElement {
  questionId: number;
  title: string;
  answerCount: number;
  category: string;
  recommend: number;
  view: number;
  nickname: string;
  createdAt: string;
  content: string;

  constructor(obj: {
    questionId: number;
    title: string;
    answerCount: number;
    category: string;
    recommend: number;
    view: number;
    nickname: string;
    createdAt: string;
    content: string;
  }) {
    this.questionId = obj.questionId;
    this.title = obj.title;
    this.answerCount = obj.answerCount;
    this.category = obj.category.toLowerCase();
    this.recommend = obj.recommend;
    this.view = obj.view;
    this.nickname = obj.nickname;
    this.createdAt = obj.createdAt;
    this.content = obj.content;
  }
}

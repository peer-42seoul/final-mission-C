import { QuestionFormValidationProps } from "@/types/questionFormProps";

export default function validateQuestionForm(
  props: QuestionFormValidationProps
) {
  const errors: QuestionFormValidationProps = {
    questionTitle: false,
    category: false,
    questionBody: false,
    nickname: false,
    password: false,
  };

  if (!props.questionTitle) {
    errors.questionTitle = true;
  }
  if (!props.category) {
    errors.category = true;
  }
  if (!props.questionBody) {
    errors.questionBody = true;
  }
  if (!props.nickname) {
    errors.nickname = true;
  }
  if (!props.password) {
    errors.password = true;
  }

  return errors;
}

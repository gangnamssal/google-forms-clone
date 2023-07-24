import { IFormListSliceList, Question, modifyFormList } from '@/store/formListSlice';

export default function handleReplaceQuestion(
  e: React.ChangeEvent<HTMLInputElement>,
  question: Question[],
  formList: IFormListSliceList[],
  formListIndex: number,
  index: number,
) {
  const inputValue = e.target.value;
  const newQuestion = question.map((QUESTION, order) => {
    return index === order ? { value: inputValue } : QUESTION;
  });
  const newFormList = formList.map((form, index) => {
    return index === formListIndex ? { ...form, question: newQuestion } : form;
  });
  return modifyFormList(newFormList);
}

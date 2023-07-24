import { IFormListSliceList, Question, modifyFormList } from '@/store/formListSlice';

export default function handleDeleteQuestion(
  question: Question[],
  formList: IFormListSliceList[],
  formListIndex: number,
  index: number,
) {
  const newQuestion = question.filter((_, order) => {
    return index !== order;
  });

  const newFormList = formList.map((form, order) => {
    return order === formListIndex ? { ...form, question: newQuestion } : form;
  });
  return modifyFormList(newFormList);
}

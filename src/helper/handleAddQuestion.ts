import { IFormListSliceList, Question, modifyFormList } from '@/store/formListSlice';

export default function handleAddQuestion(question: Question[], formList: IFormListSliceList[], formListIndex: number) {
  const newQuestion = [...question, { value: `옵션${question.length + 1}` }];
  const newFormList = formList.map((form, index) => {
    return index === formListIndex ? { ...form, question: newQuestion } : form;
  });
  return modifyFormList(newFormList);
}

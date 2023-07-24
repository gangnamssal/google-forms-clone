import { useSelector } from 'react-redux';

import type { RootState } from '@store/store';
import FormContent from '@components/FormContentList/FormContent';

export default function FormContentList() {
  const formList = useSelector((state: RootState) => state.formList);

  return (
    <>
      {formList.map((formData, index) => {
        return <FormContent key={`${formData.id}${index}}`} formListIndex={index} />;
      })}
    </>
  );
}

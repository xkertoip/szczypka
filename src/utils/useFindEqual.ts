import { useCallback, useEffect, useState } from 'react';

type Props = {
  array: any[];
  compare: number;
};
export default function useFindEqualUniqueNumber({ array, compare }: Props) {
  const [equalObject, setEqualObject] = useState(array[0]);

  const findEqual = useCallback(() => {
    const isEqual = array.find(({ uniqueNumber }) => uniqueNumber === compare);
    isEqual && setEqualObject(isEqual);
  }, [array, compare]);

  useEffect(() => {
    findEqual();
  }, [findEqual]);
  return equalObject;
}

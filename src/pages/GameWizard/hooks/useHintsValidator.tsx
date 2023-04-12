import { LocationItem } from '../consts';

export const useHintsValidator = () => {
  const isHintsValid = (selectedItems: LocationItem[]): boolean => {
    const itemsWithoutHints: string[] = [];
    selectedItems.forEach((item: LocationItem) => {
      !item.hint && itemsWithoutHints.push(`${item.name}`);
    });
    return !itemsWithoutHints.length;
  };
  return { isHintsValid };
};

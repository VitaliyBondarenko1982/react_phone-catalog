const normalizeProductValue = (value: string, sliceCount = 2): string => {
  return `${value.slice(0, -sliceCount)} ${value.slice(-sliceCount)}`;
};

export default normalizeProductValue;

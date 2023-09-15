const checkMatchQuery = (value: string, query: string) => {
  return value.toLowerCase().includes(query.toLowerCase());
};

export default checkMatchQuery;

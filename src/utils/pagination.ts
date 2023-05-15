export const getTotalPages = (countData: number, maxData: number, countDataOnPage: number) => {
  return countData > maxData
    ? Math.ceil(maxData / countDataOnPage)
    : Math.ceil(countData / countDataOnPage);
};

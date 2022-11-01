const sliceArray = <T>(items: T[], offset = 0, limit = 10) => {
  if (offset) {
    items = items.slice(offset);
  }

  // -1 means all items, so -1 skips limiting
  if (limit && limit != -1 && limit < items.length) {
    items = items.slice(0, limit);
  }

  return items;
};

export { sliceArray };

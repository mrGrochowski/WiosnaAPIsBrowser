﻿const { VITE_URL_PUBLIC_APIS_LIST, VITE_PAGINATION_POSITIONS_PER_PAGE } = import.meta.env;
import { reactive } from 'vue';

export const Storage = reactive({
  rawList: '',
  paginatedList: '',
  paginationPagesIndexes: '',
  CategoryOptionsList: '',
  ListByCategory: '',
});

export const sync = async () => {
  const res = await fetch(`${VITE_URL_PUBLIC_APIS_LIST}`);
  const fetchJson = await res.json();
  Storage.rawList = fetchJson;
  return fetchJson;
};

export const paginate = (POS_PER_PAGE) => {
  const pos_per_page = POS_PER_PAGE || VITE_PAGINATION_POSITIONS_PER_PAGE;

  const paginatedList = Storage?.rawList?.entries.reduce((prevLoop, element, index, arr) => {
    const chunkIndex = Math.floor(index / pos_per_page);

    if (!prevLoop[chunkIndex]) {
      prevLoop[chunkIndex] = []; // start a new chunk
    }

    prevLoop[chunkIndex].push(element);

    return prevLoop;
  }, {});
  Storage.paginatedList = paginatedList;
  Storage.paginationPagesIndexes = Object.keys(paginatedList);

  return;
};

export const getCategoryOptionsList = () => {
  const distinct = [...new Set([...Storage?.rawList?.entries.map((element) => element.Category)])];
  const distinctWithAll = ["all",...distinct]

  Storage.CategoryOptionsList = distinctWithAll;
  return distinctWithAll;
};

export const getFilteredListByCategory = (Category) => {
  const ListByCategory = Category == "all" ? Storage?.rawList.entries : Storage?.rawList?.entries.filter((element) => element.Category == Category) ;

  Storage.ListByCategory = ListByCategory;

  return ListByCategory;
};

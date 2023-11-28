import api from "../../api";

const HANDLE_SHIRTS = "/shirts";

export const fetchGetAllShirts = async () => {
  return await api.get(HANDLE_SHIRTS);
};
export const fetchGetShirt = async (id) => {
  return await api.get(HANDLE_SHIRTS + "/" + id);
};

//values:  src, srcHover, name, price, oldPrice
export const fetchPutShirt = async (id, values) => {
  return await api.put(HANDLE_SHIRTS + "/" + id, {
    values,
  });
};

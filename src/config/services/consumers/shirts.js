import api from "../../api";

const HANDLE_SHIRTS = "/shirts";

export const fetchGetAllShirts = async () => {
  const { shirts } = await api.get(HANDLE_SHIRTS);
  return shirts;
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

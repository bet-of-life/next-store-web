import api from "../../api";

const HANDLE_USERS = "/users";

export const fetchGetAllUsers = async () => {
    return await api.get(HANDLE_USERS);

};
export const fetchGetUsers = async (id:number) => {
  return await api.get(HANDLE_USERS + "/" + id);

};
export const fetchPostUsers = async (values:object) => {
  return await api.post(HANDLE_USERS, values);
};


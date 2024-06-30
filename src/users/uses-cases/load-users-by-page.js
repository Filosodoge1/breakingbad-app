import { localHostUserToModel } from "../mappers/localhost-user.mappers";

/**
 * 
 * @param {Number} page
 * @return 
 */
export const loadUsersByPage = async( page = 1 ) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`;
    const rest = await fetch(url);
    const {data} = await rest.json();

    const users = data.map( userLike => localHostUserToModel(userLike) );

    console.log(users);
    // console.log(localHostUserToModel(data));
    // console.log('restt ',rest);
    //console.log('undo', data);
    return users;
}
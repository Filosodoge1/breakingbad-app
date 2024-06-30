import { loadUsersByPage } from "../uses-cases/load-users-by-page";

const state = {
    currentPage: 0,
    users: [], 
}

const loadNextPage = async () => {
    // throw new Error('no implementado');
    await loadUsersByPage(state.currentPage + 1);
}

const loadPreviousPage = async() => {
    throw new Error('no implementado');
}

const onUserChanged = () => {
    throw new Error('no implementado');
}

const reloadPage = async() => {

}

export default {
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,

    getUser: () => [...state.users],
    getCurrentPage: () => state.currentPage,
}
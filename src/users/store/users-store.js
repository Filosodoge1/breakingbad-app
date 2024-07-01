import { loadUsersByPage } from "../uses-cases/load-users-by-page";

const state = {
    currentPage: 0,
    users: [], 
}

const loadNextPage = async () => {
    // throw new Error('no implementado');
    const users = await loadUsersByPage(state.currentPage + 1);
    if ( users === 0 ) {
        return;
    }

    state.currentPage += 1;
    state.users = users;
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

    getUsers: () => [...state.users],
    getCurrentPage: () => state.currentPage,
}


export const fetchUser = (userId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/users/${userId}`
    });
};

export const updateUser = (user) => {

    return $.ajax({
        method: 'PATCH',
        url: `/api/users/${'user.user[id]'}`,
        data: user,
        contentType: false,
        processData: false,
    });
};

export const fetchBoards = (userId) => {
    return $.ajax({
        method: 'GET',
        url: '/api/boards'
    })
}
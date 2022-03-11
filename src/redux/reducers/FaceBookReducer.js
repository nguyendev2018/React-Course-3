const stateDefault = {
    comments: [
        {
            id: 1, name: "Nguyen", content: "nguyen xinh", avatar: `https://i.pravatar.cc/150?u=Nguyen`
        },
        {
            id: 2, name: "Khoa", content: "Khoa xinh", avatar: `https://i.pravatar.cc/150?u=Khoa`
        },
        {
            id: 3, name: "Vy", content: "Vy xinh", avatar: `https://i.pravatar.cc/150?u=Vy`
        }
    ]
}
const FaceBookReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case "addComment": {
            state.comments = [...state.comments, action.newUserComment];
            return { ...state }
        }
    }
    return { ...state }
}
export default FaceBookReducer
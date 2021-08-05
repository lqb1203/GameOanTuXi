let initialState = {
  userList: [
    {
      id: 1,
      fullname: "Le Quoc Bao",
      username: "qble",
      email: "lqb1203@gmail.com",
      phoneNumber: "123456789",
      type: "VIP",
    },
    {
      id: 2,
      fullname: "Nguyen Van Phuong",
      username: "vpnguyen",
      email: "vpnguyen@gmail.com",
      phoneNumber: "123456789",
      type: "USER",
    },
  ],
  keyword: "",
  userEdit: null,
};

const userReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "DELETE": {
      let userList = [...state.userList];
      //Tìm vị trí
      const index = userList.findIndex((user) => user.id === action.payload.id);
      if (index !== -1) {
        userList.splice(index, 1);
      }
      state.userList = userList;
      return { ...state };
    }
    case "GET_KEYWORD": {
      state.keyword = action.payload;
      return { ...state };
    }

    case "EDIT": {
      state.userEdit = action.payload;
      return { ...state };
    }

    case "SUBMIT": {
      let userList = [...state.userList];

      if (action.payload.id) {
        const index = userList.findIndex(
          (user) => user.id === action.payload.id
        );
        if (index !== -1) {
          userList[index] = action.payload;
        }
      } else {
        const userClone = { ...action.payload, id: new Date().getTime() };
        userList = [...state.userList, userClone];
      }
      state.userList = userList;
      return { ...state };
    }
    default:
      //Trả về state mới
      return { ...state };
  }
};

export default userReducer;

import galleryImg from "../assets/gallery.png";
import avatarImg from "../assets/avatar.png";

import authUserImg from "../assets/auth-avatar.png";

export const reviews = [
  {
    id: 1,
    author: {
      id: 1,
      fullname: "Elena Test",
      avatar: avatarImg,
    },
    comments: [1, 2, 3],
    liked: [1, 2, 3],
    created_at: "5 месяцев назад",
    title: "Барселон - о городе",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In odio dolorum quae a est assumenda eligendi minima expedita recusandae dolore fugiat magnam dignissimos, facilis, odit repellat repellendus pariatur culpa ipsum. recusandae dolore fugiat magnam dignissimos, facilis, odit repellat repellendus pariatur culpa ipsum.",
    images: [
      {
        id: 1,
        url: galleryImg,
      },
      {
        id: 2,
        url: galleryImg,
      },
      {
        id: 3,
        url: galleryImg,
      },
      {
        id: 4,
        url: galleryImg,
      },
      {
        id: 5,
        url: galleryImg,
      },
      {
        id: 6,
        url: galleryImg,
      },
    ],
  },
  {
    id: 2,
    author: {
      id: 1,
      fullname: "Elena Test",
      avatar: avatarImg,
    },
    comments: [1, 2, 3],
    liked: [1, 2, 3],
    created_at: "5 месяцев назад",
    title: "Барселон - о городе",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In odio dolorum quae a est assumenda eligendi minima expedita recusandae dolore fugiat magnam dignissimos, facilis, odit repellat repellendus pariatur culpa ipsum. recusandae dolore fugiat magnam dignissimos, facilis, odit repellat repellendus pariatur culpa ipsum.",
    images: [
      {
        id: 1,
        url: galleryImg,
      },
      {
        id: 2,
        url: galleryImg,
      },
      {
        id: 3,
        url: galleryImg,
      },
      {
        id: 4,
        url: galleryImg,
      },
      {
        id: 5,
        url: galleryImg,
      },
      {
        id: 6,
        url: galleryImg,
      },
    ],
  },
  {
    id: 3,
    author: {
      id: 1,
      fullname: "Elena Test",
      avatar: avatarImg,
    },
    comments: [1, 2, 3],
    liked: [1, 2, 3],
    created_at: "5 месяцев назад",
    title: "Барселон - о городе",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In odio dolorum quae a est assumenda eligendi minima expedita recusandae dolore fugiat magnam dignissimos, facilis, odit repellat repellendus pariatur culpa ipsum. recusandae dolore fugiat magnam dignissimos, facilis, odit repellat repellendus pariatur culpa ipsum.",
    images: [
      {
        id: 1,
        url: galleryImg,
      },
      {
        id: 2,
        url: galleryImg,
      },
      {
        id: 3,
        url: galleryImg,
      },
      {
        id: 4,
        url: galleryImg,
      },
      {
        id: 5,
        url: galleryImg,
      },
      {
        id: 6,
        url: galleryImg,
      },
    ],
  },
  {
    id: 4,
    author: {
      id: 1,
      fullname: "Elena Test",
      avatar: avatarImg,
    },
    comments: [1, 2, 3],
    liked: [1, 2, 3],
    created_at: "5 месяцев назад",
    title: "Барселон - о городе",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In odio dolorum quae a est assumenda eligendi minima expedita recusandae dolore fugiat magnam dignissimos, facilis, odit repellat repellendus pariatur culpa ipsum. recusandae dolore fugiat magnam dignissimos, facilis, odit repellat repellendus pariatur culpa ipsum.",
    images: [
      {
        id: 1,
        url: galleryImg,
      },
      {
        id: 2,
        url: galleryImg,
      },
      {
        id: 3,
        url: galleryImg,
      },
      {
        id: 4,
        url: galleryImg,
      },
      {
        id: 5,
        url: galleryImg,
      },
      {
        id: 6,
        url: galleryImg,
      },
    ],
  },
  {
    id: 5,
    author: {
      id: 1,
      fullname: "Elena Test",
      avatar: avatarImg,
    },
    comments: [1, 2, 3],
    liked: [1, 2, 3],
    created_at: "5 месяцев назад",
    title: "Барселон - о городе",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In odio dolorum quae a est assumenda eligendi minima expedita recusandae dolore fugiat magnam dignissimos, facilis, odit repellat repellendus pariatur culpa ipsum. recusandae dolore fugiat magnam dignissimos, facilis, odit repellat repellendus pariatur culpa ipsum.",
    images: [
      {
        id: 1,
        url: galleryImg,
      },
      {
        id: 2,
        url: galleryImg,
      },
      {
        id: 3,
        url: galleryImg,
      },
      {
        id: 4,
        url: galleryImg,
      },
      {
        id: 5,
        url: galleryImg,
      },
      {
        id: 6,
        url: galleryImg,
      },
    ],
  },
];

export const authUser = {
  id: "22525115115",
  fullname: "Elena ttttt",
  avatar: authUserImg,
};

export const baseChatData = [
  {
    chat_id: 1,
    users: [
      { ...authUser, role: "admin" },
      {
        id: "2111",
        fullname: "elennnn fff",
        avatar: avatarImg,
        job: "Гид по Баварии, фотограф",
        rating: 4,
      },
    ],
    data: [
      {
        id: 1,
        author: {
          id: "2111",
          fullname: "elennnn fff",
          avatar: avatarImg,
        },
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae laborum ex qui placeat numquam culpa, dolores atque cupiditate rem quas, ipsum nam molestias quisquam provident. Id mollitia consectetur voluptates asperiores?",
        created_at: "Вчера в 17:45",
      },
      {
        id: 2,
        author: {
          ...authUser,
        },
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae laborum ex qui placeat numquam culpa, dolores atque cupiditate rem quas, ipsum nam molestias quisquam provident. Id mollitia consectetur voluptates asperiores?",
        created_at: "Вчера в 17:45",
      },
    ],
  },
  {
    chat_id: 2,
    users: [
      { ...authUser },
      {
        id: "2111",
        fullname: "elennnn fff",
        avatar: avatarImg,
        role: "admin",
      },
    ],
    data: [
      {
        id: 1,
        author: {
          id: "2111",
          fullname: "elennnn fff",
          avatar: avatarImg,
        },
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae laborum ex qui placeat numquam culpa, dolores atque cupiditate rem quas, ipsum nam molestias quisquam provident. Id mollitia consectetur voluptates asperiores?",
        created_at: "Вчера в 17:45",
      },
      {
        id: 2,
        author: {
          ...authUser,
        },
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae laborum ex qui placeat numquam culpa, dolores atque cupiditate rem quas, ipsum nam molestias quisquam provident. Id mollitia consectetur voluptates asperiores?",
        created_at: "Вчера в 17:45",
      },
    ],
  },
];

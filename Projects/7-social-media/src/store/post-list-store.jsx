import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => { },
  deletePost: () => { }
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter((post) => post.id !== action.payload.postId);
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
}

const PostListProvider = ({ children }) => {

  const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reation: reactions,
        userId: userId,
        tags: tags,
      }
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId
      }
    });
  }

  return <PostList.Provider value={
    {
      postList,
      addPost,
      deletePost
    }
  }>{children}</PostList.Provider>;
}
const DEFAULT_POST_LIST = [
  {
    id: 1,
    title: "Going to work",
    body: "Hi, frandzzz, I am going to join ALPHABET from now on",
    reation: 2,
    userId: "user-3",
    tags: ["work", "alphabet", "google"],
  },
  {
    id: 2,
    title: "Going to home",
    body: "Hi, frandzzz, I am going to sleep now",
    reation: 5,
    userId: "user-6",
    tags: ["sleep", "bedtime", "home"],
  }
];

export default PostListProvider;
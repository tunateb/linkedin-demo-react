import React, { Component } from "react";
import "./PostsPage.scss";
import UserPostCard from "../../components/UserPostsCard/UserPostsCard";
import UserPostsCard from "../../components/UserPostsCard/UserPostsCard";

class PostsPage extends Component {
  state = {
    postList: [],
  };

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = async () => {
    const baseUrl = "https://jsonplaceholder.typicode.com/posts?userId=1";
    const response = await fetch(`${baseUrl}`);
    const data = await response.json();

    this.setState({ postList: data });
  };

  render() {
    return (
      <div className="container">
        <div className="user-posts">
          <h1>USER POSTS</h1>
          {this.state.postList.map((post) => (
            <UserPostsCard
              userid={post.userId}
              postid={post.id}
              title={post.title}
              post={post.body}
              key={post.id}
            ></UserPostsCard>
          ))}
        </div>
      </div>
    );
  }
}

export default PostsPage;

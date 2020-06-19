import React, { Component } from "react";
import "./PostsPage.scss";
import UserPostsCard from "../../components/UserPostsCard/UserPostsCard";

class PostsPage extends Component {
  state = {
    postList: [],
  };

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = async () => {
    const baseUrl = "https://jsonplaceholder.typicode.com";
    const pathname = this.props.history.location.pathname;
    const response = await fetch(`${baseUrl}${pathname}`);
    const data = await response.json();

    this.setState({ postList: data }, () => console.log(this.state.postList));
  };

  render() {
    return (
      <div className="container">
        <div className="user-posts">
          {this.state.postList.map(post => (
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

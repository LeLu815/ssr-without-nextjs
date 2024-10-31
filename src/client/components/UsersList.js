import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map((user) => {
      return <li key={user.id}>{user.name}</li>;
    });
  }

  render() {
    return (
      <div>
        유저 리스트:
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

// 리덕스 안의 상태를 컴포넌트의 props로 넘겨주는 함수
function mapStateToProps(state) {
  return { users: state.users };
}

function loadData(store) {
  return store.dispatch(fetchUsers());
}

export { loadData };
// 컴포넌트를 리덕스와 연동하려면 react-redux에서 제공하는 connect 함수를 사용헤야 한다.
export default connect(mapStateToProps, { fetchUsers })(UsersList);

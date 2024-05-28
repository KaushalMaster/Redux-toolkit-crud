import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { removeUser } from "../store/slices/UserSlice";

const DisplayUsers = () => {
  const usersData = useSelector((state) => state.Users);
  const dispatch = useDispatch();
  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };
  return (
    <Wrapper>
      {usersData.map((user, id) => {
        return (
          <li key={id}>
            <h3>{user}</h3>
            <button onClick={() => deleteUser(id)}> Delete</button>;
          </li>
        );
      })}
    </Wrapper>
  );
};
const Wrapper = styled.section`
  li {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #eee;

    &:first-child {
      border-top: 1px solid #eee;
    }
  }
`;

export default DisplayUsers;

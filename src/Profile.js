import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const profileQuery = gql`
  {
    github {
      user1: user(username: "karlhorky") {
        login
        avatar_url
        company
        id
        repos {
          id
          name
        }
      }
      user2: user(username: "julialearnscoding") {
        login
        avatar_url
        company
        id
        repos {
          id
          name
        }
      }
    }
  }
`;

function Profile() {
  const { loading, error, data } = useQuery(profileQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <div style={{ font: "bold", color: "#ff0000" }}>
        {data.github.user1.login}{" "}
      </div>
      <div>
        <img src={data.github.user1.avatar_url} />
      </div>
      <ol>
        {data.github.user1.repos.map(repo => (
          <li>{repo.name}</li>
        ))}
      </ol>
      <div style={{ font: "bold", color: "#ff0000" }}>
        {data.github.user2.login}{" "}
      </div>
      <div>
        <img src={data.github.user2.avatar_url} />
      </div>
      <ol>
        {data.github.user2.repos.map(repo => (
          <li>{repo.name}</li>
        ))}
      </ol>
    </>
  );
}

export default Profile;

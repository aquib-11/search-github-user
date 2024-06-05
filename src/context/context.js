import React, { useState, useEffect, createContext } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";

const rootUrl = "https://api.github.com";

const GithubContext = createContext();

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setrepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);

  const [request, setRequest] = useState(0);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState({ show: false, msg: "" });

  const searchUser = async (user) => {
    toggeError();
    setLoading(true)
    const response = await axios
      .get(`${rootUrl}/users/${user}`)
      .catch((err) => console.log(err));
    if (response) {
      setGithubUser(response.data);
      const {login , followers_url} = response.data
      //get repos
       const repos = await  axios.get(`${rootUrl}/users/${login}/repos?per_page=100`)
       setrepos(repos.data)
       //get followers
       const followers = await axios.get(`${followers_url}?per_page=100}`)
       setFollowers(followers.data)
    } else {
      toggeError(true, "there is no user with given userName");
    }
    checkRequest()
    setLoading(false)
  };
  const checkRequest = async () => {
    try {
      const { data } = await axios(`${rootUrl}/rate_limit`);
      let { remaining } = data.rate;
      setRequest(remaining);
      if (remaining === 0) {
        toggeError(true, "sorry, you have exeeded your hourly rate limit!");
      }
    } catch (error) {
      console.error("Error fetching rate limit:", error);
    }
  };
  function toggeError(show = false, msg = "") {
    setError({ show, msg });
  }
  useEffect(() => {
    checkRequest();
  }, []);
  return (
    <GithubContext.Provider
      value={{ githubUser, repos, followers, request, error, searchUser, loading }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export { GithubProvider, GithubContext };

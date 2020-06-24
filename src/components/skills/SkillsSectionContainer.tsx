import React from "react";

interface Repo {
  name: string;
  topics: string[];
}

interface State {
  loading: boolean;
  error: Error | null;
  repos: Repo[];
}

export default class SkillsSectionContainer extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      loading: true,
      error: null,
      repos: []
    };
  }

  componentDidMount(): void {
    fetch("https://api.github.com/users/dargacode/repos?per_page=100", {
      // eslint-disable-next-line spellcheck/spell-checker
      headers: { Accept: "application/vnd.github.mercy-preview+json" } // Enable topics beta from github api
    })
      .then(response => response.json())
      .then(
        result => {
          this.setState({
            loading: false,
            repos: result
          });
        },
        error => {
          this.setState({
            loading: false,
            error
          });
        }
      );
  }

  render(): JSX.Element {
    const { loading, error, repos } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    return (
      <ul>
        {repos.map(repo => (
          <li key={repo.name}>
            {repo.name}
            <ul>
              {repo.topics.map(topic => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    );
  }
}

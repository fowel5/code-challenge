type RepoSearchResult = {
  search: {
    edges: [
      {
        node: Repository;
      }
    ];
  };
};

type IssueSearchResult = {
  search: {
    pageInfo: PageInfo;
    edges: [
      {
        node: Issue;
      }
    ];
  };
};

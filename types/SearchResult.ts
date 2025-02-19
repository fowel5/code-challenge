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
    edges: [
      {
        node: Issue;
      }
    ];
  };
};

type PageInfoSearchResult = {
  search: {
    pageInfo: PageInfo;
  };
};

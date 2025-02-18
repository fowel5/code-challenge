type Comments = {
  bodyHTML: HTMLElement;
};

type Issue = {
  title: string;
  url: string;
  state: "CLOSED" | "OPEN";
  createdAt: Date;
  updatedAt: Date;
  comments: {
    edges: [
      {
        node: Comments;
      }
    ];
  };
};

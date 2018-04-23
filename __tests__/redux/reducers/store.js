const blankTestStore = {
  entities: {
    cards: {
      byId: {},
      ids: [],
    },
    roles: {
      byId: {},
      ids: [],
    },
    steps: {
      byId: {},
      ids: [],
    },
    users: {
      byId: {},
      ids: [],
    },
  },
  controls: {
    currentCard: null,
    nextCard: null,
  },
};

const card3 = {
  id: 3,
  title: 'card3',
  body: 'body3',
  roles: [3],
};

const cards2 = {
  byId: {
    1: {
      id: 1,
      title: 'card1',
      body: 'body1',
      roles: [1],
    },
    2: {
      id: 2,
      title: 'card2',
      body: 'body2',
      roles: [2],
    },
  },
  ids: [
    1,
    2,
  ],
};

const cards3 = {
  byId: {
    1: {
      id: 1,
      title: 'card1',
      body: 'body1',
      roles: [1],
    },
    2: {
      id: 2,
      title: 'card2',
      body: 'body2',
      roles: [2],
    },
    3: {
      id: 3,
      title: 'card3',
      body: 'body3',
      roles: [3],
    },
  },
  ids: [
    1,
    2,
    3,
  ],
};

const step3 = {
  id: 3,
  title: 'step3',
  body: 'body3',
  cards: [3],
};

const steps2 = {
  byId: {
    1: {
      id: 1,
      title: 'step1',
      body: 'body1',
      cards: [1],
    },
    2: {
      id: 2,
      title: 'step2',
      body: 'body2',
      cards: [2],
    },
  },
  ids: [
    1,
    2,
  ],
};

const steps3 = {
  byId: {
    1: {
      id: 1,
      title: 'step1',
      body: 'body1',
      cards: [1],
    },
    2: {
      id: 2,
      title: 'step2',
      body: 'body2',
      cards: [2],
    },
    3: {
      id: 3,
      title: 'step3',
      body: 'body3',
      cards: [3],
    },
  },
  ids: [
    1,
    2,
    3,
  ],
};

const user3 = {
  id: 3,
  name: 'user3',
  roles: [3],
};

const users2 = {
  byId: {
    1: {
      id: 1,
      name: 'user1',
      roles: [1],
    },
    2: {
      id: 2,
      name: 'user2',
      roles: [2],
    },
  },
  ids: [
    1,
    2,
  ],
};

const users3 = {
  byId: {
    1: {
      id: 1,
      name: 'user1',
      roles: [1],
    },
    2: {
      id: 2,
      name: 'user2',
      roles: [2],
    },
    3: {
      id: 3,
      name: 'user3',
      roles: [3],
    },
  },
  ids: [
    1,
    2,
    3,
  ],
};

const role3 = {
  id: 3,
  title: 'role3',
};

const roles2 = {
  byId: {
    1: {
      id: 1,
      title: 'role1',
    },
    2: {
      id: 2,
      title: 'role2',
    },
  },
  ids: [
    1,
    2,
  ],
};

const roles3 = {
  byId: {
    1: {
      id: 1,
      title: 'role1',
    },
    2: {
      id: 2,
      title: 'role2',
    },
    3: {
      id: 3,
      title: 'role3',
    },
  },
  ids: [
    1,
    2,
    3,
  ],
};

module.exports = {
  blankTestStore,
  card3,
  cards2,
  cards3,
  step3,
  steps2,
  steps3,
  role3,
  roles2,
  roles3,
  user3,
  users2,
  users3,
};

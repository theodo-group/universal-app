export const resolvers = {
  Query: {
    getUsers: async () => {
      try {
        const data = await fetch("https://api.github.com/users");
        const users = (await data.json()) as unknown as {
          id: string;
          login: string;
          avatar_url: string;
        }[];
        return users.map(({ id, login, avatar_url }) => ({
          id,
          login,
          avatar_url,
        }));
      } catch (error) {
        throw error;
      }
    },
    getUser: async (_: never, args: { name: string }) => {
      try {
        const data = await fetch(`https://api.github.com/users/${args.name}`);
        const user = await data.json();
        return {
          id: user.id,
          login: user.login,
          avatar_url: user.avatar_url,
        };
      } catch (error) {
        throw error;
      }
    },
  },
};

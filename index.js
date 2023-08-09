import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
//dummy Data
import dummyData from "./dummyData.js";

//typeDefs of schema
import { typeDefs } from "./schema.js";

const resolvers = {
  Query: {
    games() {
      return dummyData.games;
    },
    game(_, args) {
      return dummyData.games.find((game) => game.id === args.id);
    },
    authors() {
      return dummyData.authors;
    },
    author(_, args) {
      return dummyData.authors.find((author) => author.id === args.id);
    },
    reviews() {
      return dummyData.reviews;
    },
    review(_, args) {
      return dummyData.reviews.find((review) => review.id === args.id);
    },
  },
  Game: {
    reviews(parent) {
      return dummyData.reviews.filter((review) => review.game_id === parent.id);
    },
  },

  Author: {
    reviews(parent) {
      return dummyData.reviews.filter(
        (review) => review.author_id === parent.id
      );
    },
  },
  Review: {
    author(parent) {
      return dummyData.authors.find((author) => author.id === parent.author_id);
    },
    game(parent) {
      return dummyData.games.find((game) => game.id === parent.game_id);
    },
  },
  Mutation: {
    addGame(_, args) {
      let game = {
        ...args.game,
        id: Math.floor(Math.random() * 10000).toString(),
      };
      db.games.push(game);

      return game;
    },
    deleteGame(_, args) {
      db.games = db.games.filter((g) => g.id !== args.id);

      return db.games;
    },
    updateGame(_, args) {
      db.games = db.games.map((g) => {
        if (g.id === args.id) {
          return { ...g, ...args.edits };
        }

        return g;
      });

      return db.games.find((g) => g.id === args.id);
    },
  },
};
//Server configuration
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`Server is running at => ${url}`);

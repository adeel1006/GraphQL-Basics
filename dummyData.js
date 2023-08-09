let games = [
  {
    id: "1",
    title: "The Legend of Zelda: Breath of the Wild",
    platform: ["Nintendo Switch", "Xbox One"],
  },
  {
    id: "2",
    title: "Red Dead Redemption 2",
    platform: ["PlayStation 4", "Xbox One"],
  },
  {
    id: "3",
    title: "Cyberpunk 2077",
    platform: ["PlayStation 5", "Xbox Series X", "PC"],
  },
  {
    id: "4",
    title: "Assassin's Creed Valhalla",
    platform: ["PlayStation 5", "Xbox Series X", "PC"],
  },
  {
    id: "5",
    title: "Super Mario Odyssey",
    platform: ["Nintendo Switch", "Xbox One"],
  },
  {
    id: "6",
    title: "Halo Infinite",
    platform: ["Xbox Series X", "PC"],
  },
  {
    id: "7",
    title: "Spider-Man: Miles Morales",
    platform: ["PlayStation 5", "PlayStation 4"],
  },
];

let authors = [
  {
    id: "1",
    name: "John Doe",
    verified: true,
  },
  {
    id: "2",
    name: "Jane Smith",
    verified: false,
  },
  {
    id: "3",
    name: "Michael Johnson",
    verified: true,
  },
  {
    id: "4",
    name: "Emily Brown",
    verified: false,
  },
  {
    id: "5",
    name: "David Lee",
    verified: true,
  },
  {
    id: "6",
    name: "Sophia Hernandez",
    verified: false,
  },
  {
    id: "7",
    name: "Adeel",
    verified: true,
  },
];

let reviews = [
  {
    id: "1",
    rating: 9,
    content: "Breath of the Wild is an incredible open-world adventure.",
    author_id: "1",
    game_id: "1",
  },
  {
    id: "2",
    rating: 8,
    content: "Red Dead Redemption 2 offers a captivating Wild West experience.",
    author_id: "2",
    game_id: "2",
  },
  {
    id: "3",
    rating: 6,
    content:
      "Cyberpunk 2077 has great potential, but is plagued by technical issues.",
    author_id: "3",
    game_id: "3",
  },
  {
    id: "4",
    rating: 7,
    content: "Assassin's Creed Valhalla provides an engaging Viking journey.",
    author_id: "4",
    game_id: "4",
  },
  {
    id: "5",
    rating: 10,
    content:
      "Super Mario Odyssey is a delightful platformer with endless charm.",
    author_id: "1",
    game_id: "5",
  },
  {
    id: "6",
    rating: 8,
    content: "Halo Infinite delivers an exciting sci-fi shooter experience.",
    author_id: "3",
    game_id: "6",
  },
  {
    id: "7",
    rating: 9,
    content: "Spider-Man: Miles Morales offers thrilling superhero action.",
    author_id: "5",
    game_id: "7",
  },
];

export default { games, authors, reviews };

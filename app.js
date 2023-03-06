const express = require("express");
const cors = require("cors");

const app = express();

let songs = [
  {
    id: 1,
    song: "Kaytadan",
  },
  {
    id: 2,
    song: "Suraqtar",
  },
];

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ songs });
});

app.post("/", (req, res) => {
  const newSong = req.body.song;

  songs.push({ id: songs.length + 1, song: newSong });
  res.status(200).json({ song: songs });
});

app.put("/:songID/:songName", (req, res) => {
  const songID = parseInt(req.params.songID);
  const songName = req.params.songName;

  const newSongs = songs.map((song) => {
    if (song.id === songID) {
      return { ...song, song: songName };
    } else return song;
  });
  songs = newSongs;

  res.json(userID);
});

app.delete("/:userID", (req, res) => {
  const userID = "1";
  res.json(userID);
});

app.listen(5000);

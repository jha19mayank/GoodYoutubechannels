import React, { useState } from "react";
import "./styles.css";

const channelDb = {
  Comedy: [
    {
      name: "Anubhav Singh Bassi",
      rating: "4.5/5",
      LittleDescription: "His famous video is HOSTEL..."
    },
    {
      name: "Zakir Khan",
      rating: "5/5",
      LittleDescription: "His famous video is WHEN I MET A DELHI GIRL..."
    },
    {
      name: "Pratuysh Chaubey- my favourite",
      rating: "5/5",
      LittleDescription: "His all videos are so RELATBLE"
    },
    {
      name: "Gaurav Kapoor",
      rating: "4/5",
      LittleDescription: "His famous video is NO BALL..."
    },
    {
      name: "Aakash Gupta",
      rating: "5/5",
      LittleDescription: "Watch all of his videos"
    }
  ],
  Gaming: [
    {
      name: "Carryminati",
      rating: "4/5",
      LittleDescription: "Watch his older videos"
    },
    {
      name: "Shroud the legend",
      rating: "5/5",
      LittleDescription: "Just watch him"
    },
    {
      name: "Gamerfleet",
      rating: "5/5",
      LittleDescription: "His struggle is real"
    },
    {
      name: "Tenz",
      rating: "5/5",
      LittleDescription: "Watch valorant gameplay videos"
    }
  ],
  Vines: [
    { name: "BB ki vines", rating: "5/5", LittleDescription: "You know him" },
    {
      name: "Harsh Beniwal",
      rating: "5/5",
      LittleDescription: "His team is fabulous"
    },
    {
      name: "Aashish Chanchalni",
      rating: "5/5",
      LittleDescription: "watch his video tution classes and bacche"
    }
  ],
  Vlogs: [
    { name: "Flying beast", rating: "5/5", LittleDescription: "He is a beast" },
    {
      name: "Nomad Shubham",
      rating: "4/5",
      LittleDescription: "Raw vlogs of travelling across countries"
    },
    {
      name: "Tanmay Bhat the all rounder",
      rating: "5/5",
      LittleDescription: "C'mon guys"
    }
  ],
  Education: [
    {
      name: "Tanay Pratap-legend",
      rating: "5/5",
      LittleDescription: "Legend"
    },
    {
      name: "Hitesh Chaudhray",
      rating: "5/5",
      LittleDescription: "Very Cool! The way he explains is so mesmerizing"
    },
    {
      name: "Code with Harry",
      rating: "5/5",
      LittleDescription: "Love the way he teaches"
    },
    {
      name: "Thapa Technical",
      rating: "5/5",
      LittleDescription: "Make sure you guys check out his channel"
    }
  ]
};
var channelWeHave = Object.keys(channelDb);

export default function App() {
  const [selectedChannel, setSelectedChannel] = useState("Vines");

  function channelClickHandler(link) {
    setSelectedChannel(link);
  }

  return (
    <div className="App">
      <h1>
        <span style={{ color: "red" }}>Youtube</span> Recommendations
      </h1>
      <h4>Here I will be recommending must watch Youtube channels</h4>

      <div>
        {channelWeHave.map((link) => (
          <button
            onClick={() => channelClickHandler(link)}
            key={link}
            style={{
              color: "red",
              backgroundColor: "black",
              margin: "1rem 0.3rem",
              padding: "0.5rem  1rem",
              border: "1px dashed black",
              borderRadius: "6px",
              cursor: "pointer"
            }}
          >
            {" "}
            {link}
          </button>
        ))}
      </div>
      <hr style={{ border: "1px solid gold" }} />

      <div>
        {channelDb[selectedChannel].map((links, channel) => (
          <section
            key={channel}
            style={{
              color: "white",
              border: "1px solid black",
              padding: "1rem",
              margin: "0.5rem",
              borderRadius: "35px",
              backgroundColor: "black"
            }}
          >
            <div>
              <div>{links.name}</div>
              <div>{links.rating}</div>
              <div style={{ color: "green" }}>{links.LittleDescription}</div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

'use client';
import { useState } from "react";
import { PlayerAPI } from "../data/playerAPI";
import Link from "next/link";

export default function Roster() {
  const [allPlayers, _] = useState(PlayerAPI.all());

  return (
    <main>
      <div>
        <h1>You are now viewing the Roster page.</h1>
        {allPlayers.map((p) => (
          <li key={p.number}>
            <Link href={`/roster/${p.number}`}>{p.name}</Link>
          </li>
        ))}
      </div>
    </main>
  );
}
// See if you can figure this part out on your own by:

// Using useState to store the data from querying the players API
// Iterating over all the players on the page
// Add a link to navigate to that particular player
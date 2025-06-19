'use client';
import Link from "next/link";
import { useParams } from "next/navigation";
import { PlayerAPI } from "@/app/data/playerAPI";

export default function Player() {
  const { id } = useParams();
  const player = PlayerAPI.get(parseInt(id, 10));

  if (!player) {
    return (
      <>
        <div>NO WAY HOSE A, that player was not found!</div>
        <Link href='/roster'>Back it Up...</Link>
      </>
    );
  }

  return (
    <main>
      <div>
        <h1>
          {player.name} (# {player.number})
        </h1>
        <h2>Position: {player.position}</h2>
        <Link href='/roster'>Back it Up...</Link>
      </div>
    </main>
  );
}
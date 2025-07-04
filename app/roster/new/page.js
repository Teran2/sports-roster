'use client';
import { PlayerAPI } from "@/app/data/playerAPI";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AddPlayer() {
  const [name, setName] = useState(null);
  const [number, setNumber] = useState(null);
  const [position, setPosition] = useState(null);
  const router = useRouter();

  const handleSubmitPlayerClick = () => {
    PlayerAPI.addPlayer({
      name,
      number,
      position
    });
    router.push('/roster');
  }

  return (
    <div>
      <form>
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          onChange={(event) =>
            setName(parseInt(event.target.value))
          }
        />

        <br />

        <label>Number</label>
        <input
          type="text"
          className="form-control"
          onChange={(event) =>
            setNumber(parseInt(event.target.value, 10))
          }
        />

        <br />

        <label>Position</label>
        <input
          type="text"
          className="form-control"
          onChange={(event) =>
            setPosition(parseInt(event.target.value))
          }
        />

        <button type="button" onClick={handleSubmitPlayerClick}>
          Submit
        </button>
      </form>

      <Link href='/roster'>Roster</Link>
    </div>
  );
}
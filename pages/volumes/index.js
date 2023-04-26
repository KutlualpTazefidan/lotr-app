import Link from "next/link";
import { volumes } from "../../lib/data";
import { useRouter } from "next/router";

function Volumes() {
  const router = useRouter();
  function handleRandomBook() {
    const randomIndex = Math.floor(Math.random() * volumes.length);
    // console.log(randomIndex);
    const randomVolume = volumes[randomIndex];
    router.push(`/volumes/${randomVolume.slug}`);
  }
  return (
    <ul>
      <h1>J. R. R. Tolkien</h1>
      <p>wanted to name 6 books but was only allowed to have 3!</p>
      {volumes.map((volume, i) => (
        <li key={i}>
          <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
        </li>
      ))}
      <button onClick={handleRandomBook}>Choose a random book for me!</button>
    </ul>
  );
}

export default Volumes;

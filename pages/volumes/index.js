import Link from "next/link";
import { volumes } from "../../lib/data";

function Volumes() {
  return (
    <ul>
      {volumes.map((volume, i) => (
        <li key={i}>
          <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Volumes;

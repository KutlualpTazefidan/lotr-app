import { volumes } from "../../lib/data";
import Image from "next/image";
function theFellowshipOfTheRing() {
  const volume = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  console.log(volume);
  return (
    <div>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <Image
        src={`${volume.cover}`}
        width={140}
        height={230}
        alt={volume.title}
      />
    </div>
  );
}

export default theFellowshipOfTheRing;

import { volumes } from "../../lib/data";
import Image from "next/image";

function theReturnOfTheKing() {
  const volume = volumes.find(({ slug }) => slug === "the-return-of-the-king");
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

export default theReturnOfTheKing;

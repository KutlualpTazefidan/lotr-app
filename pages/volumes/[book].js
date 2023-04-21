import { volumes } from "../../lib/data";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

function Book() {
  const router = useRouter();
  const { book } = router.query;
  const volume = volumes.find(({ slug }) => slug === book);
  const volumeIndex = volumes.findIndex(({ slug }) => slug === book);
  const nextVolumeIndex = volumeIndex < 2 ? volumeIndex + 1 : 0;
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
      <br />
      <Link href={`/volumes/${volumes[nextVolumeIndex].slug}`}>
        Next volume:{volumes[nextVolumeIndex].title}!
      </Link>
      <br />
      <Link href={`/volumes`}>All volumes</Link>
    </div>
  );
}

export default Book;

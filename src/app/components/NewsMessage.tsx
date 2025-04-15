import Image from 'next/image';

export default function NewsMessage() {
  return (
    <div className="flex flex-col space-y-6">
      <div className="flex justify-center">
        <Image
          src="/plane_picture.png"
          alt="Plane"
          width={500}
          height={200}
          unoptimized={true}
        />
      </div>

      <h2 className="flex flex-col justify-center text-2xl">
        <p className="text-green-700 mb-2">D&apos;après l&apos;Arcep,</p>En 2023 le
        numérique représente 4 % des émissions mondiales de CO2.
        <p className="text-green-700 mb-2">
          Soit l&apos;équivalent voir plus que tous les vols d&apos;avion dans le monde
          réunis.
        </p>
        <p>Le streaming vidéo, à lui seul, dépasse 60% du traffic mondial.</p>
      </h2>
    </div>
  );
}

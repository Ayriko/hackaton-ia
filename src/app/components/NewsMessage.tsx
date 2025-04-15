import Image from 'next/image';

export default function NewsMessage() {
  const tips = [
    { icon: '🌱', label: 'Baisser la qualité vidéo' },
    { icon: '📬', label: 'Supprimer les mails inutiles' },
    { icon: '🔌', label: 'Éteindre la box la nuit' },
    { icon: '🌍', label: 'Utiliser Ecosia ou Lilo' },
  ];

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
      <h2 className="text-2xl">
        <div>
          <p className="text-green-900">D'après l'Arcep,</p>En 2023 le numérique
          représente 4 % des émissions mondiales de CO2.
        </div>
        <p className="text-green-900">
          Soit l'équivalent voir plus que tous les vols d'avion dans le monde
          réunis.
        </p>
      </h2>

      <div>Le streaming vidéo, à lui seul, dépasse 60% du traffic mondial</div>
    </div>
  );
}

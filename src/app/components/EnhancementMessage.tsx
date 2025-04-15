import Image from 'next/image';

export default function EnhancementMessage() {
  return (
    <div className="flex flex-col justify-center items-center text-3xl space-y-2">
      <p className="text-green-700">Le jeu du "Tu préfères" ?</p>
      <p>Ce n'était pas qu'un jeu. C'était une invitation.</p>
      <p>
        Une façon douce d'ouvrir les yeux sur l’impact de notre vie numérique.
      </p>
      <div className="flex justify-center mt-4 mb-6">
        <Image
          src="/final_picture.png"
          alt="Conclusion"
          width={500}
          height={200}
          unoptimized={true}
        />
      </div>
      <div className="text-green-700 text-center">
        <p className="text-black">
          Ton empreinte numérique t’accompagne partout, même quand tu scrolles.
        </p>
        Et si c’était le moment de la rendre plus légère ?
      </div>
    </div>
  );
}

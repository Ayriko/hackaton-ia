type Props = {
  stageNumber: number;
  setCurrentStage: (val: number) => void;
};

export default function ScrollArrow({ stageNumber, setCurrentStage }: Props) {
  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-arrow-down w-8 h-8 text-gray-700 animate-bounce cursor-pointer"
        onClick={() => setCurrentStage(stageNumber)}
      >
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <polyline points="19 12 12 19 5 12"></polyline>
      </svg>
    </div>
  );
}

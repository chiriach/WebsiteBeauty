interface WaveDividerProps {
  fromColor: string;
  toColor: string;
}

export default function WaveDivider({ fromColor, toColor }: WaveDividerProps) {
  return (
    <div className="relative h-32 overflow-hidden" style={{ backgroundColor: fromColor }}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
      >
        <path
          d="M0,40 Q300,80 600,40 T1200,40 L1200,120 L0,120 Z"
          fill={toColor}
        />
      </svg>
    </div>
  );
}

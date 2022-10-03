export default function Parking() {
  const parkingRows = [
    {
      id: 1,
      type: "vertical-right",
      areLotsTaken: [true, false, true, true, true, false],
      x: 0.0,
      y: 0.0,
    },
    {
      id: 2,
      type: "horizontal-bot",
      areLotsTaken: [true, false],
      x: 0.6,
      y: 0.5,
    },
    {
      id: 3,
      type: "horizontal-top",
      areLotsTaken: [false, true],
      x: 0.8,
      y: 0.7,
    },
  ] as {
    id: number;
    type:
      | "vertical-right"
      | "vertical-left"
      | "horizontal-bot"
      | "horizontal-top";
    areLotsTaken: boolean[];
    x: number;
    y: number;
  }[];

  const getSlotOpeningClass = (
    type:
      | "vertical-right"
      | "vertical-left"
      | "horizontal-bot"
      | "horizontal-top"
  ) => {
    const [, lat] = type.split("-");
    if (lat === "left") return "border-l-0";
    if (lat === "right") return "border-r-0";
    if (lat === "bot") return "border-b-0";
    if (lat === "top") return "border-t-0";

    throw new Error("bad type");
  };

  return (
    <main className="inset-0 -z-10 h-screen w-screen overflow-hidden bg-zinc-900">
      <svg className="opacity-99 pointer-events-none fixed isolate z-50 h-full w-full mix-blend-soft-light">
        <filter id="pedroduarteisalegend">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.63"
            numOctaves="4"
            stitchTiles="stitch"
          />
        </filter>
        <rect
          width="100%"
          height="100%"
          filter="url(#pedroduarteisalegend)"
        ></rect>
      </svg>
      <div className="h-full w-full text-white">
        <div className="flex h-32 justify-around pt-10 text-xl font-bold tracking-wider">
          <div>P1-P3</div>
          <div>P4-P6</div>
          <div>P7-P9</div>
        </div>
        <div className="relative m-16 h-full w-full">
          {/* parking zones */}
          {parkingRows.map((row) => (
            <div
              className={`grid ${
                row.type.includes("vertical")
                  ? "grid-flow-row"
                  : "grid-flow-col"
              } absolute`}
              style={{ left: `${row.x * 100}%`, top: `${row.y * 100}%` }}
              key={row.id}
            >
              {row.areLotsTaken.map((isOccupied, index) => (
                <div
                  className={`border-2 ${getSlotOpeningClass(row.type)}`}
                  key={index}
                >
                  🚗
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

import { useState } from "react";

const slides = [
  { id: 1, type: "title" },
  { id: 2, type: "kpi-q34-2025" },
  { id: 3, type: "invest-q34-2025" },
  { id: 4, type: "kpi-q1-2026" },
  { id: 5, type: "invest-q1-2026" },
];

// Color logic for percentage cells
function getCellColor(value: string): string {
  const num = parseFloat(value.replace("%", ""));
  if (num >= 150) return "bg-green-500 text-white";
  if (num >= 100) return "bg-[#b8e986] text-gray-800";
  if (num >= 80) return "bg-yellow-200 text-gray-800";
  return "bg-red-200 text-gray-800";
}

// Title Slide
function TitleSlide() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between overflow-hidden rounded-2xl"
      style={{ background: "linear-gradient(135deg, #c0392b 0%, #922b21 60%, #7b241c 100%)" }}>
      {/* Decorative lines */}
      <div className="absolute right-0 top-0 w-2/3 h-full pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 500 400" fill="none">
          <line x1="500" y1="0" x2="200" y2="400" stroke="white" strokeWidth="2" opacity="0.4" />
          <line x1="540" y1="0" x2="240" y2="400" stroke="white" strokeWidth="1.5" opacity="0.25" />
          <line x1="580" y1="0" x2="280" y2="400" stroke="white" strokeWidth="1" opacity="0.15" />
        </svg>
      </div>

      {/* Top content */}
      <div className="relative z-10 p-10 md:p-14 flex-1 flex flex-col justify-center">
        <div className="border-2 border-white/30 rounded-xl p-6 md:p-10 max-w-lg">
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
            Результаты <span className="underline decoration-2">ScoreCard</span> за<br />
            июль 2025–март 2026
          </h1>
        </div>
        <div className="mt-6 max-w-lg">
          <p className="text-white/80 text-lg md:text-xl">
            Ключевые направления и целевые показатели премии
          </p>
        </div>
      </div>

      {/* Bottom right author block */}
      <div className="relative z-10 self-end mb-10 mr-10 md:mb-14 md:mr-14">
        <div className="border border-white/40 rounded-xl p-4 text-right bg-white/5 backdrop-blur-sm">
          <p className="text-white font-medium text-sm md:text-base">Главный менеджер Лиана Давлетова</p>
          <p className="text-white/70 text-sm">Стаж 1 год</p>
        </div>
      </div>
    </div>
  );
}

// KPI Table Q3-Q4 2025
function KpiQ34Slide() {
  const headers = ["Показатель", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
  const rows = [
    ["Scorecard", "150.60%", "153.30%", "134.40%", "160.30%", "93%", "138%"],
    ["Карточные продукты", "132%", "147%", "138%", "133%", "82%", "118%"],
    ["Депозиты и накопительные счета", "146%", "140%", "169%", "174%", "112%", "212%"],
    ["Кредитное страхование", "146%", "147%", "164%", "195%", "208%", "208%"],
    ["Инвестиционные продукты", "194%", "142%", "42%", "166%", "137%", "137%"],
    ["Некредитное страхование", "191%", "467%", "199%", "344%", "18%", "86%"],
    ["Кредиты наличными", "149%", "174%", "221%", "200%", "123%", "440%"],
  ];

  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden rounded-2xl"
      style={{ background: "linear-gradient(135deg, #c0392b 0%, #922b21 60%, #7b241c 100%)" }}>
      <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none opacity-30">
        <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none">
          <line x1="400" y1="0" x2="100" y2="400" stroke="white" strokeWidth="2" />
          <line x1="440" y1="0" x2="140" y2="400" stroke="white" strokeWidth="1.5" />
        </svg>
      </div>
      <div className="relative z-10 p-6 md:p-10 flex flex-col h-full">
        <h2 className="text-2xl md:text-3xl font-bold text-white underline decoration-2 text-center mb-6">
          Динамика ScoreCard и KPI за 3-4ый квартал 2025 г
        </h2>
        <div className="overflow-x-auto flex-1">
          <table className="w-full border-collapse text-sm md:text-base">
            <thead>
              <tr>
                {headers.map((h, i) => (
                  <th
                    key={i}
                    className={`border border-gray-300 px-3 py-2 font-bold text-left ${i === 0 ? "bg-[#b8e986] text-gray-900 min-w-[140px]" : "bg-[#d4ed7a] text-gray-900 text-center"}`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className={`border border-gray-300 px-3 py-2 ${ci === 0
                        ? "bg-white text-gray-900 font-medium"
                        : `${getCellColor(cell)} text-center font-semibold`
                        }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Investment Products Q3-Q4 2025
function InvestQ34Slide() {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden rounded-2xl"
      style={{ background: "linear-gradient(135deg, #c0392b 0%, #922b21 60%, #7b241c 100%)" }}>
      <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none opacity-30">
        <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none">
          <line x1="400" y1="0" x2="100" y2="400" stroke="white" strokeWidth="2" />
          <line x1="440" y1="0" x2="140" y2="400" stroke="white" strokeWidth="1.5" />
        </svg>
      </div>
      <div className="relative z-10 p-6 md:p-10 flex flex-col h-full">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-6 leading-tight">
          Инвестиционные продукты<br />в разрезе за 3-4ый квартал 2025 г
        </h2>
        <div className="overflow-x-auto flex-1 flex items-start">
          <table className="w-full border-collapse text-xs md:text-sm">
            <thead>
              <tr>
                <th className="border border-gray-400 px-2 py-2 bg-[#b8e986] text-gray-900 font-bold" rowSpan={2}></th>
                <th className="border border-gray-400 px-2 py-2 bg-[#d4ed7a] text-gray-900 font-bold text-center" colSpan={2}>АИ</th>
                <th className="border border-gray-400 px-2 py-2 bg-[#d4ed7a] text-gray-900 font-bold text-center" colSpan={2}>АК</th>
                <th className="border border-gray-400 px-2 py-2 bg-[#d4ed7a] text-gray-900 font-bold text-center" colSpan={2}>НСЖ</th>
                <th className="border border-gray-400 px-2 py-2 bg-[#d4ed7a] text-gray-900 font-bold text-center" colSpan={2}>ОМС</th>
                <th className="border border-gray-400 px-2 py-2 bg-[#d4ed7a] text-gray-900 font-bold text-center" colSpan={2}>ПДС</th>
                <th className="border border-gray-400 px-2 py-2 bg-[#6abf4b] text-white font-bold text-center">Итог кол-ва</th>
                <th className="border border-gray-400 px-2 py-2 bg-[#6abf4b] text-white font-bold text-center">Итог Объём</th>
              </tr>
              <tr>
                {["Количество", "Объём", "Количество", "Объём", "Количество", "Объём", "Количество", "Объём", "Количество", "Объём"].map((h, i) => (
                  <th key={i} className="border border-gray-400 px-2 py-1 bg-[#e8f7c8] text-gray-800 font-semibold text-center text-xs whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 px-3 py-3 bg-white text-gray-900 font-medium whitespace-nowrap">Давлетова Лиана</td>
                <td className="border border-gray-400 px-2 py-3 bg-[#e8f7c8] text-center text-gray-800 font-semibold">13</td>
                <td className="border border-gray-400 px-2 py-3 bg-[#e8f7c8] text-center text-gray-800 font-semibold">5 134 392</td>
                <td className="border border-gray-400 px-2 py-3 bg-[#e8f7c8] text-center text-gray-800 font-semibold">13</td>
                <td className="border border-gray-400 px-2 py-3 bg-[#e8f7c8] text-center text-gray-800 font-semibold">4 642 000</td>
                <td className="border border-gray-400 px-2 py-3 bg-[#e8f7c8] text-center text-gray-800 font-semibold">5</td>
                <td className="border border-gray-400 px-2 py-3 bg-[#e8f7c8] text-center text-gray-800 font-semibold">3 900 000</td>
                <td className="border border-gray-400 px-2 py-3 bg-[#e8f7c8] text-center text-gray-800 font-semibold">2</td>
                <td className="border border-gray-400 px-2 py-3 bg-[#e8f7c8] text-center text-gray-800 font-semibold">172 000</td>
                <td className="border border-gray-400 px-2 py-3 bg-[#e8f7c8] text-center text-gray-800 font-semibold">28</td>
                <td className="border border-gray-400 px-2 py-3 bg-[#e8f7c8] text-center text-gray-800 font-semibold">4 505 074</td>
                <td className="border border-gray-400 px-2 py-3 bg-[#6abf4b] text-white text-center font-bold">62</td>
                <td className="border border-gray-400 px-2 py-3 bg-[#6abf4b] text-white text-center font-bold">18 353 492</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// KPI Table Q1 2026
function KpiQ1Slide() {
  const headers = ["Показатель", "Январь", "Февраль", "Март"];
  const rows = [
    ["Scorecard", "183.90%", "128.60%", "121.80%"],
    ["Карточные продукты", "198%", "109%", "106%"],
    ["Депозиты и накопительные счета", "139%", "212%", "169%"],
    ["Кредитное страхование", "226%", "47%", "155%"],
    ["Инвестиционные продукты", "235%", "143%", "91%"],
    ["Кредиты наличными", "170%", "241%", "124%"],
  ];

  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden rounded-2xl"
      style={{ background: "linear-gradient(135deg, #c0392b 0%, #922b21 60%, #7b241c 100%)" }}>
      <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none opacity-30">
        <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none">
          <line x1="400" y1="0" x2="100" y2="400" stroke="white" strokeWidth="2" />
          <line x1="440" y1="0" x2="140" y2="400" stroke="white" strokeWidth="1.5" />
        </svg>
      </div>
      <div className="relative z-10 p-6 md:p-10 flex flex-col h-full">
        <h2 className="text-2xl md:text-3xl font-bold text-white underline decoration-2 text-center mb-6">
          Динамика ScoreCard и KPI за 1-ый квартал 2026 г
        </h2>
        <div className="overflow-x-auto flex-1">
          <table className="w-full border-collapse text-sm md:text-base">
            <thead>
              <tr>
                {headers.map((h, i) => (
                  <th
                    key={i}
                    className={`border border-gray-300 px-4 py-2 font-bold ${i === 0 ? "bg-[#b8e986] text-gray-900 text-left min-w-[180px]" : "bg-[#d4ed7a] text-gray-900 text-center"}`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className={`border border-gray-300 px-4 py-3 ${ci === 0
                        ? "bg-white text-gray-900 font-medium"
                        : `${getCellColor(cell)} text-center font-semibold`
                        }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Investment Products Q1 2026
function InvestQ1Slide() {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden rounded-2xl"
      style={{ background: "linear-gradient(135deg, #c0392b 0%, #922b21 60%, #7b241c 100%)" }}>
      <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none opacity-30">
        <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none">
          <line x1="400" y1="0" x2="100" y2="400" stroke="white" strokeWidth="2" />
          <line x1="440" y1="0" x2="140" y2="400" stroke="white" strokeWidth="1.5" />
        </svg>
      </div>
      <div className="relative z-10 p-6 md:p-10 flex flex-col h-full">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-6 leading-tight">
          Инвестиционные продукты<br />в разрезе за 1-ый квартал 2026 г
        </h2>
        <div className="overflow-x-auto flex-1 flex items-start">
          <table className="w-full border-collapse text-xs md:text-sm">
            <thead>
              <tr>
                <th className="border border-gray-400 px-2 py-2 bg-[#b8e986] text-gray-900 font-bold" rowSpan={2}></th>
                <th className="border border-gray-400 px-2 py-2 bg-[#d4ed7a] text-gray-900 font-bold text-center" colSpan={2}>АИ</th>
                <th className="border border-gray-400 px-2 py-2 bg-[#d4ed7a] text-gray-900 font-bold text-center" colSpan={2}>АК</th>
                <th className="border border-gray-400 px-2 py-2 bg-[#d4ed7a] text-gray-900 font-bold text-center" colSpan={2}>НСЖ</th>
                <th className="border border-gray-400 px-2 py-2 bg-[#d4ed7a] text-gray-900 font-bold text-center" colSpan={2}>ОМС</th>
                <th className="border border-gray-400 px-2 py-2 bg-[#d4ed7a] text-gray-900 font-bold text-center" colSpan={2}>ПДС</th>
                <th className="border border-gray-400 px-2 py-2 bg-[#6abf4b] text-white font-bold text-center">Итог кол-ва</th>
                <th className="border border-gray-400 px-2 py-2 bg-[#6abf4b] text-white font-bold text-center">Итог Объём</th>
              </tr>
              <tr>
                {["Количество", "Объём", "Количество", "Объём", "Количество", "Объём", "Количество", "Объём", "Количество", "Объём"].map((h, i) => (
                  <th key={i} className="border border-gray-400 px-2 py-1 bg-[#e8f7c8] text-gray-800 font-semibold text-center text-xs whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 px-3 py-3 bg-white text-gray-900 font-medium whitespace-nowrap">Давлетова Лиана</td>
                <td className="border border-gray-400 px-2 py-3 bg-[#e8f7c8] text-center text-gray-800 font-semibold">6</td>
                <td className="border border-gray-400 px-2 py-3 bg-[#e8f7c8] text-center text-gray-800 font-semibold">1 533 744</td>
                <td className="border border-gray-400 px-2 py-3 bg-[#e8f7c8] text-center text-gray-800 font-semibold">1</td>
                <td className="border border-gray-400 px-2 py-3 bg-[#e8f7c8] text-center text-gray-800 font-semibold">702 572</td>
                <td className="border border-gray-400 px-2 py-3 bg-[#e8f7c8] text-center text-gray-800 font-semibold">1</td>
                <td className="border border-gray-400 px-2 py-3 bg-[#e8f7c8] text-center text-gray-800 font-semibold">600 000</td>
                <td className="border border-gray-400 px-2 py-3 bg-[#e8f7c8] text-center text-gray-800 font-semibold">13</td>
                <td className="border border-gray-400 px-2 py-3 bg-[#e8f7c8] text-center text-gray-800 font-semibold">5 166 161</td>
                <td className="border border-gray-400 px-2 py-3 bg-[#e8f7c8] text-center text-gray-800 font-semibold">3</td>
                <td className="border border-gray-400 px-2 py-3 bg-[#e8f7c8] text-center text-gray-800 font-semibold">500 000</td>
                <td className="border border-gray-400 px-2 py-3 bg-[#6abf4b] text-white text-center font-bold">24</td>
                <td className="border border-gray-400 px-2 py-3 bg-[#6abf4b] text-white text-center font-bold">8 502 477</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const slideComponents = [TitleSlide, KpiQ34Slide, InvestQ34Slide, KpiQ1Slide, InvestQ1Slide];
const slideTitles = [
  "Титульный слайд",
  "KPI 3-4 кв. 2025",
  "Инвест. продукты 3-4 кв. 2025",
  "KPI 1 кв. 2026",
  "Инвест. продукты 1 кв. 2026",
];

export default function Scorecard() {
  const [current, setCurrent] = useState(0);

  const SlideComponent = slideComponents[current];

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center p-4 md:p-8">
      {/* Header */}
      <div className="w-full max-w-5xl mb-4 flex items-center justify-between">
        <h1 className="text-white font-semibold text-sm md:text-base opacity-60 tracking-wide uppercase">
          ScoreCard Презентация
        </h1>
        <span className="text-white/40 text-sm">
          {current + 1} / {slides.length}
        </span>
      </div>

      {/* Slide area */}
      <div className="w-full max-w-5xl aspect-[16/9] shadow-2xl shadow-black/60">
        <SlideComponent />
      </div>

      {/* Navigation */}
      <div className="w-full max-w-5xl mt-6 flex flex-col md:flex-row items-center gap-4">
        {/* Prev / Next buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => setCurrent((c) => Math.max(0, c - 1))}
            disabled={current === 0}
            className="px-5 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-sm font-medium"
          >
            ← Назад
          </button>
          <button
            onClick={() => setCurrent((c) => Math.min(slides.length - 1, c + 1))}
            disabled={current === slides.length - 1}
            className="px-5 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-sm font-medium"
          >
            Вперёд →
          </button>
        </div>

        {/* Slide thumbnails */}
        <div className="flex gap-2 flex-wrap justify-center">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              title={slideTitles[i]}
              className={`w-10 h-6 md:w-12 md:h-7 rounded text-xs font-bold transition-all border-2 ${current === i
                ? "bg-red-600 border-red-400 text-white scale-110"
                : "bg-white/10 border-white/20 text-white/50 hover:bg-white/20 hover:text-white"
                }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Slide title */}
      <p className="mt-3 text-white/40 text-sm text-center">
        {slideTitles[current]}
      </p>

      {/* Color legend */}
      <div className="mt-6 flex flex-wrap gap-4 justify-center text-xs text-white/50">
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded bg-green-500 inline-block"></span> ≥ 150%
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded bg-[#b8e986] inline-block"></span> 100–149%
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded bg-yellow-200 inline-block"></span> 80–99%
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded bg-red-200 inline-block"></span> &lt; 80%
        </div>
      </div>
    </div>
  );
}

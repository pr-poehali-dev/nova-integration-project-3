import { GL } from "./gl";
import { Pill } from "./Pill";
import { Button } from "./ui/button";
import { useState } from "react";
import { Header } from "./Header";

export function Hero() {
  const [hovering, setHovering] = useState(false);

  return (
    <div className="flex flex-col h-svh justify-between relative z-10">
      <GL hovering={hovering} />
      <Header />

      <div className="pb-16 mt-auto text-center relative">
        <Pill className="mb-6">2024 · ИТОГИ ГОДА</Pill>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-sentient">
          Показатели <br />
          <i className="font-light">работы</i> команды
        </h1>
        <p className="font-mono text-sm sm:text-base text-foreground/60 text-balance mt-8 max-w-[440px] mx-auto">
          Ключевые метрики, достижения и динамика развития за отчётный период
        </p>

        <a className="contents max-sm:hidden" href="#metrics">
          <Button
            className="mt-14"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            [Смотреть показатели]
          </Button>
        </a>
        <a className="contents sm:hidden" href="#metrics">
          <Button
            size="sm"
            className="mt-14"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            [Смотреть показатели]
          </Button>
        </a>
      </div>
    </div>
  );
}
import { useMemo } from 'react'

// Deterministic wireframe ridge: layered contour lines forming a mountain.
function rand(seed: number) {
  const x = Math.sin(seed * 127.1) * 43758.5453
  return x - Math.floor(x)
}

export default function Mountain() {
  const { rows, cols } = useMemo(() => {
    const W = 640
    const peak = (x: number, c: number, h: number, w: number) => h * Math.exp(-Math.pow((x - c) / w, 2))
    const height = (x: number) =>
      peak(x, 285, 100, 62) + peak(x, 420, 58, 48) + peak(x, 215, 40, 55) + peak(x, 150, 24, 60) + peak(x, 520, 26, 60)
    const N = 9
    const rows: string[] = []
    for (let r = 0; r < N; r++) {
      const depth = r / (N - 1)
      const base = 118 + r * 6
      const pts: string[] = []
      for (let x = 0; x <= W; x += 8) {
        const noise = (rand(x * 0.37 + r * 9.1) - 0.5) * 7
        const y = base - height(x) * (1 - depth * 0.55) + noise * (1 - depth * 0.4)
        pts.push(`${x},${y.toFixed(1)}`)
      }
      rows.push(pts.join(' '))
    }
    const cols: string[] = []
    for (let x = 60; x <= 600; x += 16) {
      const top = 118 - height(x)
      if (height(x) < 6) continue
      cols.push(`M${x} ${top.toFixed(1)}L${x} ${(118 + 8 * 6).toFixed(1)}`)
    }
    return { rows, cols }
  }, [])

  return (
    <svg
      viewBox="0 0 640 180"
      className="pointer-events-none absolute left-1/2 top-0 w-[min(640px,100%)] -translate-x-1/2 opacity-60 [mask-image:linear-gradient(to_bottom,black_55%,transparent),linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] [mask-composite:intersect] [-webkit-mask-composite:source-in]"
      aria-hidden="true"
    >
      {cols.map((d, i) => (
        <path key={i} d={d} stroke="#fff" strokeOpacity="0.07" strokeWidth="0.5" />
      ))}
      {rows.map((p, i) => (
        <polyline
          key={i}
          points={p}
          fill="none"
          stroke="#fff"
          strokeOpacity={0.5 - i * 0.04}
          strokeWidth="0.6"
        />
      ))}
    </svg>
  )
}

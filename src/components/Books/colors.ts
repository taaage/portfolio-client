const spineColors = [
  '#d1a2f9','#64ffda','#da3633','#cdd6e8','#f78166','#79c0ff','#56d364',
  '#db61a2','#f0883e','#a371f7','#e3b341','#7ee787','#ff7b72',
  '#d2a8ff','#ffa657','#39d353','#6cb6ff','#d8d2e6','#3fb950','#bc8cff',
]

export function hashColor(str: string) {
  let h = 0
  for (let i = 0; i < str.length; i++) h = str.charCodeAt(i) + ((h << 5) - h)
  return spineColors[Math.abs(h) % spineColors.length]
}

export function ratingColor(r: number) {
  const t = Math.max(0, Math.min(1, (r - 1) / 4))
  const red = [248, 81, 73]
  const blue = [88, 166, 255]
  return `rgb(${red.map((c, i) => Math.round(c + (blue[i] - c) * t)).join(',')})`
}

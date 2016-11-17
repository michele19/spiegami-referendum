export function humanize(text) {
  let human = text.replace(/_/g, ' ')
  return human.charAt(0).toUpperCase() + human.slice(1);
}

export function getTitle(tema, argomento) {
  if (tema && argomento) {
    return humanize(tema) + " - " + humanize(argomento)
  }
}
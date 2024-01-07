export const dateFormatter = (i: string, monthOption = "short") => {
  const options = {
    year: "numeric",
    month: monthOption,
    day: "numeric",
  } as Intl.DateTimeFormatOptions

  return new Intl.DateTimeFormat("it-IT", options).format(new Date(i))
}

export default function dateFormatter(i, monthOption = "short") {
  const options = {
    year: "numeric",
    month: monthOption,
    day: "numeric",
  };

  return new Intl.DateTimeFormat("it-IT", options).format(new Date(i));
}

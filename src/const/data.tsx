import faker from "faker";
const now = new Date();
const day = now.getDate();

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "直近一週間の勤務時間",
    },
  },
};

const labels = [
  day - 1 + "日",
  day - 2 + "日",
  day - 3 + "日",
  day - 4 + "日",
  day - 5 + "日",
  day - 6 + "日",
  day - 7 + "日",
];

export const data = {
  labels,
  datasets: [
    {
      label: "勤務時間",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 24 })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

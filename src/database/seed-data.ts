import { EntryStatus } from "@/interfaces";

interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: EntryStatus;
  createdAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      description:
        "Pendiente: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit minima laudantium ipsa nostrum nemo iste sit, numquam aliquam architecto veritatis doloribus et fuga sapiente, dolorum dolore animi cumque quisquam sunt.",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      description:
        "En-Progreso: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, laboriosam dolores aliquid minima repudiandae neque perspiciatis autem iusto error odio fuga eveniet debitis itaque corporis sequi quidem saepe incidunt magnam?",
      status: "in-progress",
      createdAt: Date.now() - 1000000,
    },
    {
      description:
        "Terminada: Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eos voluptas ipsum non nobis iusto, quam veniam, quod, eveniet vitae numquam dicta consectetur! Omnis, soluta vero. Quod odit in fugiat!",
      status: "finished",
      createdAt: Date.now() - 100000,
    },
  ],
};

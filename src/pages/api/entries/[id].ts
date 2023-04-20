import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/database";
import { Entry, IEntry } from "@/models";

type Data =
  | {
      message: string;
    }
  | IEntry;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return getEntry(req, res);

    case "PUT":
      return updateEntry(req, res);

    case "DELETE":
      return deleteEntry(req, res);

    default:
      return res.status(400).json({ message: "Endpoint does not exist" });
  }
}

const getEntry = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  await db.connect();

  const entry = await Entry.findById(id);

  await db.disconnect();

  if (!entry) {
    return res
      .status(400)
      .json({ message: "There are no entries with that id " + id });
  }

  res.status(200).json(entry);
};

const updateEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query;

  await db.connect();

  const entryToUpdate = await Entry.findById(id);

  if (!entryToUpdate) {
    return res
      .status(400)
      .json({ message: "There are no entries with that id " + id });
  }

  const {
    description = entryToUpdate.description,
    status = entryToUpdate.status,
  } = req.body;

  try {
    const updatedEntry = await Entry.findByIdAndUpdate(
      id,
      {
        description,
        status,
      },
      { runValidators: true, new: true }
    );

    await db.disconnect();

    res.status(200).json(updatedEntry!);
  } catch (error: any) {
    await db.disconnect();

    res.status(400).json({ message: error.errors.status.message });
  }
};

const deleteEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query;

  await db.connect();

  const entryToDelete = await Entry.findById(id);

  if (!entryToDelete) {
    return res
      .status(400)
      .json({ message: "There are no entries with that id " + id });
  }

  try {
    await Entry.findByIdAndDelete(id);

    await db.disconnect();

    return res.status(200).json({
      message: `Entry with id: ${id} has been deleted`,
    });
  } catch (error: any) {
    await db.disconnect();

    res.status(400).json({ message: error.errors.status.message });
  }
};

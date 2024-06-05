import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "nonononono" });
      return;
    }
    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    try {
      client = await MongoClient.connect(
        "mongodb+srv://softnali92:7qAzQuHCvdEYmMC5@cluster0.1voxfyl.mongodb.net/my-site?retryWrites=true&w=majority&appName=Cluster0"
      );
    } catch (error) {
      res.status(500).json({ meassage: "Could not" });
      return;
    }

    const db = client.db();

    try {
      const result = db.collection("message").insertOne(newMessage);
      newMessage.id = (await result).insertedId;
    } catch (error) {
      client.close();
      res.sataus(500).json({ message: "failed !" });
      return;
    }
    client.close();

    res.status(201).json({ message: "Success !", message: newMessage });
  }
}

export default handler;

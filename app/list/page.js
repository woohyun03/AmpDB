import { connectDB } from "@/util/database.js"
import ListItem from "./ListItem"

export default async function List() {

    const client = await connectDB;
    const db = client.db("Amplify00")
    let dataset = await db.collection('Startups.amplify').find().toArray()

  return (
    <div className="list-bg">
      <ListItem result={dataset} />
    </div>
  )
}


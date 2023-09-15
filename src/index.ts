import { app, connectToDataBase, port } from "./app";

connectToDataBase();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

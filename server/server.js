const express = require("express")
const cors = require("cors")
const app = express();
app.use(cors());
app.use("/",require("./Routes/UserRoutes/Routes"))


app.listen(5000, () => {
    console.log("server başarı ile kaldırıldı http://localhost:5000")
})
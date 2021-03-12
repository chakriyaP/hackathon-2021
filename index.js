//ทำการ import express เข้ามาใช้งาน โดยสร้างตัวแปร express ขึ้นมาเพื่อรับค่า
const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080

app.get('/', (req, res) => res.send('Hello World'))

app.listen(PORT, () => {

    console.log(`Server is running on port : ${PORT}`)
})

module.exports = app
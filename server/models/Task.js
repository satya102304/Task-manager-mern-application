# MERN Task Manager - Complete Code Files

## Project Structure
```
mern-task-manager/
├── README.md
├── .gitignore
├── server/
│   ├── package.json
│   ├── .env
│   ├── server.js
│   ├── models/
│   │   ├── User.js
│   │   └── Task.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── tasks.js
│   └── middleware/
│       └── auth.js
└── client/
    ├── package.json
    ├── public/
    │   └── index.html
    └── src/
        ├── App.js
        ├── App.css
        ├── index.js
        ├── index.css
        └── pages/
            ├── Login.js
            ├── Register.js
            └── Dashboard.js
```















```javascript
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  completed: { type: Boolean, default: false },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
```
























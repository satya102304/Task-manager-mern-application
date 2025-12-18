
```javascript
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Task = require('../models/Task');

router.get('/', auth, async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json(tasks);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

router.post('/', auth, async (req, res) => {
  try {
    const newTask = new Task({
      title: req.body.title,
      description: req.body.description,
      user: req.user.id
    });
    const task = await newTask.save();
    res.json(task);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

router.put('/:id', auth, async (req, res) => {
  try {
    let task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ msg: 'Task not found' });
    if (task.user.toString() !== req.user.id) return res.status(401).json({ msg: 'Not authorized' });

    task = await Task.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.json(task);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

router.delete('/:id', auth, async (req, res) => {
  try {
    let task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ msg: 'Task not found' });
    if (task.user.toString() !== req.user.id) return res.status(401).json({ msg: 'Not authorized' });

    await Task.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Task removed' });
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
```



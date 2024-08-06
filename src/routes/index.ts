import { Router } from 'express';
import { loginUser, registerUser } from '../services/user.service';

const router = Router();

router.post('/register', async (req, res) => {
  const { email, password, name } = req.body;
  try {
    await registerUser(email, password, name);
    res.status(201).send({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Error registering user', error });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await loginUser(email, password);
    if (user.length > 0) {
      // Generate JWT token (omitted for brevity)
      res.status(200).send({ message: 'Login successful', user });
    } else {
      res.status(401).send({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).send({ message: 'Error logging in', error });
  }
});

export default router;

import express from "express";
import { 
  registerUser, 
  loginUser, 
  logoutUser, 
  getMe, 
  updateProfile, 
  changePassword 
} from "../controllers/user.js";
import protect  from "../middleware/authmiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/Me", protect, getMe);

// Naye Features Routes
router.put("/update-profile", protect, updateProfile);
router.put("/change-password", protect, changePassword);

export default router;

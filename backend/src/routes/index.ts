
import { Router } from "express";
import { login } from "../controllers/auth.controller";
import { createDisclosure, getDisclosures, approveDisclosure } from "../controllers/disclosure.controller";
import { auth } from "../middleware/auth.middleware";
import { allow } from "../middleware/role.middleware";

const router = Router();

router.post("/auth/login", login);
router.post("/disclosures", auth, createDisclosure);
router.get("/disclosures", auth, getDisclosures);
router.put("/disclosures/:id/approve", auth, allow(["ADMIN","OFFICER"]), approveDisclosure);

export default router;

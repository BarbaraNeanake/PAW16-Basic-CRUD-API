const express = require("express");
const branchController = require("../controllers/BranchControllers");
const router = express.Router();

// Branch routes
router.post("/create", branchController.createBranch);
router.get("/", branchController.getAllBranches);
router.get("/search", branchController.searchBranches);
router.get("/:id", branchController.getBranchById);
router.put("/:id", branchController.updateBranch);
router.delete("/:id", branchController.deleteBranch);

module.exports = router;

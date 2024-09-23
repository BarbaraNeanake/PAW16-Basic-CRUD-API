const Branch = require('../models/BranchModels');

// Get all branches
const getAllBranches = async (req, res) => {
  try {
    const branches = await Branch.find();
    res.status(200).json({ success: true, branches });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error });
  }
};

// Get branch by id
const getBranchById = async (req, res) => {
  try {
    const branch = await Branch.findById(req.params.id);
    if (!branch) {
      return res.status(404).json({ success: false, message: 'Branch not found' });
    }
    res.status(200).json({ success: true, branch });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error });
  }
};

// Create a new branch
const createBranch = async (req, res) => {
  try {
    const branch = await Branch.create(req.body);
    res.status(201).json({ success: true, branch });
  } catch (error) {
    res.status(400).json({ success: false, message: 'Bad Request', error });
  }
};

// Update a branch
const updateBranch = async (req, res) => {
  try {
    const branch = await Branch.findByIdAndUpdate(req.params.id
        , req.body, { new: true, runValidators: true });
    if (!branch) {
        return res.status(404).json({ success: false, message: 'Branch not found' });
        }
    res.status(200).json({ success: true, branch });
    }
    catch (error) {
        res.status(400).json({ success: false, message: 'Bad Request', error });
    }
}

// Delete a branch
const deleteBranch = async (req, res) => {
  try {
    const branch = await Branch.findByIdAndDelete(req.params.id);
    if (!branch) {
      return res.status(404).json({ success: false, message: 'Branch not found' });
    }
    res.status(200).json({ success: true, message: 'Branch deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error });
  }
};

// Search branches
const searchBranches = async (req, res) => {
  try {
    const { location, name, city } = req.query;

    // Build a dynamic filter object
    let filter = {};
    if (name) filter.name = { $regex: name, $options: "i" };
    if (city) filter["address.city"] = { $regex: city, $options: "i" };

    const branches = await Branch.find(filter).populate("manager");

    if (branches.length === 0) {
      return res.status(404).json({ message: "No branches found matching the criteria." });
    }

    res.status(200).json(branches);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllBranches,
  getBranchById,
  createBranch,
  updateBranch,
  deleteBranch,
  searchBranches,
};
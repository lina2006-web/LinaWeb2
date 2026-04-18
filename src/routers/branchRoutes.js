const express = require('express');
const { getAllBranches, getBranch, createBranch, updateBranch, deleteBranch } = require('../controllers/branchController');
const router = express.Router();

router.get('/', getAllBranches);
router.get('/:id', getBranch);
router.post('/', createBranch);
router.put('/:id', updateBranch);
router.delete('/:id', deleteBranch);

module.exports = router;
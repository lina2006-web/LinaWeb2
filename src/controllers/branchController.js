const branchService = require('../services/branchService');

async function getAllBranches(req, res) {
    try {
        const branches = await branchService.getAllBranches();
        res.json(branches);
    } catch (error) {
        res.status(500).json({
            message: error.message,
            stack: error.stack
        });
    }
}

async function getBranch(req, res) {
    try {
        const branch = await branchService.getBranch(req.params.id);
        res.json(branch);
    } catch (error) {
        res.status(500).json({
            message: error.message,
            stack: error.stack
        });
    }
}

async function createBranch(req, res) {
    try {
        if (!req.body.name) {
            return res.status(400).json({ message: 'Name is required' });
        }

        if (!req.body.location) {
            return res.status(400).json({ message: 'Location is required' });
        }

        const branch = await branchService.createBranch(req.body);
        res.status(201).json(branch);
    } catch (error) {
        res.status(500).json({
            message: error.message,
            stack: error.stack
        });
    }
}

async function updateBranch(req, res) {
    try {
        if (!req.body.name) {
            return res.status(400).json({ message: 'Name is required' });
        }

        if (!req.body.location) {
            return res.status(400).json({ message: 'Location is required' });
        }

        const branch = await branchService.updateBranch(req.params.id, req.body);
        res.json(branch);
    } catch (error) {
        res.status(500).json({
            message: error.message,
            stack: error.stack
        });
    }
}

async function deleteBranch(req, res) {
    try {
        await branchService.deleteBranch(req.params.id);
        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({
            message: error.message,
            stack: error.stack
        });
    }
}

module.exports = {
    getAllBranches,
    getBranch,
    createBranch,
    updateBranch,
    deleteBranch
};
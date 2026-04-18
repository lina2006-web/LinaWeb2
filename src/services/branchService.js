const Branch = require('../models/Branch');

async function getAllBranches() {
    return await Branch.findAll();
}

async function getBranch(id) {
    return await Branch.findByPk(id);
}

async function createBranch(branch) {
    return await Branch.create({
        name: branch.name,
        location: branch.location,
        phone: branch.phone
    });
}

async function updateBranch(id, branch) {
    await Branch.update(
        {
            name: branch.name,
            location: branch.location,
            phone: branch.phone
        },
        { where: { id } }
    );
    return await Branch.findByPk(id);
}

async function deleteBranch(id) {
    await Branch.destroy({ where: { id } });
    return true;
}

module.exports = {
    getAllBranches,
    getBranch,
    createBranch,
    updateBranch,
    deleteBranch
};
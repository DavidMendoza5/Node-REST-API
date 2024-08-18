class Repository {
    constructor (model) {
        this.model = model;
    }

    generateWhereClause (filters) {
        const whereClause = {};
        if (filters.id) {
            whereClause.id = filters.id;
        }
        if (filters.email) {
            whereClause.email = filters.email;
        }
        if (filters.name) {
            whereClause.name = filters.name;
        }

        return whereClause;
    }

    async deleteById (id) {
        return this.model.destroy({ where: { id } });
    }

    async getAll () {
        return this.model.findAll();
    }

    async get (filters) {
        const whereClause = this.generateWhereClause(filters);
        return this.model.findOne({ where: whereClause });
    }

    async update (id, data) {
        return this.model.update(data, { where: { id } });
    }

    async patch (id, data) {
        return this.model.update(data, { where: { id }, fields: Object.keys(data) });
    }
}

module.exports = Repository;

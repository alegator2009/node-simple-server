"use strict";

const AirtableModule = require('airtable');
const SyncerInterface = require("./SyncerInterface");
const ArrayHelper = require("../../helpers/ArrayHelper");

class Airtable extends SyncerInterface {
  /**
   * Airtable syncer constructor
   * @param {Object} config syncer config
   */
  constructor(config) {
    super(config);
    this._config = config;
    this._base = new AirtableModule({apiKey: this._config.apiKey}).base(this._config.baseId);
  }

  /**
   * Sync data to Airtable
   * @param {Array<Object>} data data
   * @returns {Promise<void>}
   */
  async sync(data) {
    const chunks = ArrayHelper.chunk(data, 10);
    new Promise((resolve, reject) => chunks.forEach(async chunk =>
      await this._base(this._config.baseName).create(this._formatData(chunk), (err, records) => {
        if (err) {
          console.error(err);
        }
        else {
          console.log(`${records.length} records synced to Airtable`);
        }
        resolve();
      })
    ));
  }

  /**
   * Format data before syncing
   * @param {Array<Object>} data
   * @returns {Array<Object>} formatted data
   * @private
   */
  _formatData (data) {
    return data.map(row => ({
      fields: {
        Product_id: row.id,
        Product_Name: row.name,
        Sold_count: row.count,
        Date: row.date.toISOString().slice(0, 10)
      }
    }));
  }
}

module.exports = Airtable;

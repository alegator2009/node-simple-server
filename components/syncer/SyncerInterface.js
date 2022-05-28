"use strict";

/**
 * SyncerInterface
 */
class SyncerInterface {
  /**
   * SyncerInterface constructor
   * @param {Object} config syncer config
   */
  constructor(config) {}

  /**
   * Sync data
   * @param {Array<Object>} data data to sync
   * @returns {Promise<void>}
   */
  async sync(data) {
    throw new Error("This method must be implemented!");
  }
}

module.exports = SyncerInterface;

// Import Mongoose
import mongoose from "mongoose";
// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

// Start Import Models

import ClasseModel from "../models/Alpha_db/ClasseModel";
import EnseignantModel from "../models/Alpha_db/EnseignantModel";
import EtudiantModel from "../models/Alpha_db/EtudiantModel";
import ExamenModel from "../models/Alpha_db/ExamenModel";
import MatiereModel from "../models/Alpha_db/MatiereModel";
import UserModel from "../models/Alpha_db/UserModel";

// End Import Models

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info("MongoDB connected at: " + properties.Alpha_db_dbUrl);

    // Start Init Models

		ClasseModel.init();
		EnseignantModel.init();
		EtudiantModel.init();
		ExamenModel.init();
		MatiereModel.init();
		UserModel.init();
 // End Init Models
  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");
    try {
      this.dbConnection_Alpha_db = await mongoose.connect(
        "mongodb://" + properties.Alpha_db_dbUrl,
        { useNewUrlParser: true }
      );
    } catch (err) {
      Logger.error(`Failed connection to the DB: ${err.message}`);
      Logger.error(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_Alpha_db;
  }
}

export default new Database();

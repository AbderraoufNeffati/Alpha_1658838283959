import EnseignantModelGenerated from "./generated/EnseignantModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = EnseignantModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await EnseignantModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...EnseignantModelGenerated,
  ...customModel
};

import EtudiantModelGenerated from "./generated/EtudiantModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = EtudiantModelGenerated.init();
  
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
      return await EtudiantModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...EtudiantModelGenerated,
  ...customModel
};

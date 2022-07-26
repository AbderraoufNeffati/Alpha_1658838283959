import MatiereModelGenerated from "./generated/MatiereModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = MatiereModelGenerated.init();
  
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
      return await MatiereModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...MatiereModelGenerated,
  ...customModel
};

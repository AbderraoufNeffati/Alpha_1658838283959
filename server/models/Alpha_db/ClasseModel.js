import ClasseModelGenerated from "./generated/ClasseModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = ClasseModelGenerated.init();
  
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
      return await ClasseModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...ClasseModelGenerated,
  ...customModel
};

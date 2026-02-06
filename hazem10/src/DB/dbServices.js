
export const findOne = async ({ model, filter }) => {
  return await model.findOne(filter);
};
export const create = async ({model , data})=>{
 return await model.create(data)
}
export const find = async ({model , filter={}})=>{
  return await model.find(filter)
}

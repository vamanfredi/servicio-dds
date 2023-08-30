const z = require('zod')

const entitySchema =
z.object({
  entities: z.array(
    z.object({
      // todo los atributos
    }))
})

const validateEntity = (input) => {
  return entitySchema.safeParse(input)
}

module.exports = {
  validateEntity
}

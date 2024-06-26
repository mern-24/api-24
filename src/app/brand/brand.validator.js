const { z } = require("zod");

const BrandRequestSchema = z.object({
    title: z.string().min(3),
    description: z.string().nullable(),
    status: z.string().regex(/active|inactive/)
})

module.exports = {
    BrandRequestSchema
}
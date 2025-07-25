import z from "zod";

export const nameSchema = z
  .string({
    error: (issue) =>
      issue.input == null ? "Name is required" : "Name must be a string",
  })
  .trim()
  .min(3, "Name must be at least 3 characters long")
  .max(20, "Name cannot exceed 20 characters")
  .regex(
    /^[a-zA-Z_]/,
    "Name must start with a letter (a-z, A-Z) or an underscore (_)"
  )
  .regex(
    /^[a-zA-Z._-]+$/,
    "Name can only include letters, dots (.), hyphens (-), and underscores (_)"
  )
  .refine((val) => !/[.-]$/.test(val), {
    message: "Name cannot end with a dot (.) or hyphen (-)",
  })
  .refine((val) => !/(\.\.|--)/.test(val), {
    message: "Name cannot contain consecutive dots (..) or hyphens (--)",
  })
  .refine((val) => !/(\.-|-\.)/.test(val), {
    message:
      "Name cannot have mixed consecutive special characters like '.-' or '-.'",
  });

export const emailSchema = z.preprocess<string, z.ZodEmail, string>(
  (val) => (typeof val === "string" ? val.trim() : val),
  z.email({
    error: (issue) =>
      issue.input == null ? "Email is required" : "Invalid email format",
  })
);

export const passwordSchema = z
  .string({
    error: (issue) =>
      issue.input == null
        ? "Password is required"
        : "Password must be a string",
  })
  .min(8, { message: "Password must be at least 8 characters" })
  .refine((val) => /[a-z]/.test(val), {
    message: "Password must include at least one lowercase letter",
  })
  .refine((val) => /[A-Z]/.test(val), {
    message: "Password must include at least one uppercase letter",
  })
  .refine((val) => /[0-9]/.test(val), {
    message: "Password must include at least one digit",
  })
  .refine((val) => /[^a-zA-Z0-9]/.test(val), {
    message: "Password must include at least one special character",
  });

export const streetAddressSchema = z
  .string({
    error: (issue) =>
      issue.input == null
        ? "Street address is required"
        : "Street address must be a string",
  })
  .trim()
  .min(5, "Street address must be at least 5 characters long")
  .max(100, "Street address cannot exceed 100 characters");

export const citySchema = z
  .string({
    error: (issue) =>
      issue.input == null ? "City is required" : "City must be a string",
  })
  .trim()
  .min(2, "City must be at least 2 characters long")
  .max(50, "City cannot exceed 50 characters")
  .regex(/^[a-zA-Z\s-]+$/, "City can only contain letters, spaces, and hyphens")
  .refine((val) => !/[\s-]$/.test(val), {
    message: "City cannot end with a space or hyphen",
  })
  .refine((val) => !/[\s-]{2,}/.test(val), {
    message: "City cannot contain consecutive spaces or hyphens",
  });

export const stateSchema = z
  .string({
    error: (issue) =>
      issue.input == null ? "State is required" : "State must be a string",
  })
  .trim()
  .min(2, "State must be at least 2 characters long")
  .max(50, "State cannot exceed 50 characters")
  .regex(
    /^[a-zA-Z\s-]+$/,
    "State can only contain letters, spaces, and hyphens"
  )
  .refine((val) => !/[\s-]$/.test(val), {
    message: "State cannot end with a space or hyphen",
  })
  .refine((val) => !/[\s-]{2,}/.test(val), {
    message: "State cannot contain consecutive spaces or hyphens",
  });

export const postalCodeSchema = z
  .string({
    error: (issue) =>
      issue.input == null
        ? "Postal code is required"
        : "Postal code must be a string",
  })
  .trim()
  .min(4, "Postal code must be at least 4 characters")
  .max(10, "Postal code cannot exceed 10 characters")
  .regex(
    /^[A-Za-z0-9\s-]+$/,
    "Postal code can only contain letters, numbers, spaces, or hyphens"
  );

export const phoneSchema = z
  .string({
    error: (issue) =>
      issue.input == null
        ? "Phone number is required"
        : "Phone number must be a string",
  })
  .trim()
  .min(10, "Phone number must be at least 10 digits")
  .max(20, "Phone number cannot exceed 20 characters")
  .regex(
    /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/,
    "Phone number contains invalid characters"
  )
  .refine((val) => val.replace(/\D/g, "").length >= 10, {
    message: "Phone number must have at least 10 digits",
  });

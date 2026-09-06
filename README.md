# Sales-Invoicing-System_REST-API

# Customer Record Sanitiser

A utility function that cleans, validates, and standardises raw customer
registration input before it is saved anywhere — the first layer of the
Sales & Invoice API project.

## What it does

Takes raw, messy user input (name, email, phone) exactly as a user might
type it into a form, and returns a clean, safe-to-store version — or a
clear error if the input is invalid.

- **Name** — trims stray whitespace and capitalises every word,
  regardless of how the user typed it.
- **Email** — trims and lowercases it, then validates that it contains
  `@` and ends in `.com`. Invalid input returns an error immediately.
- **Phone** — strips spaces, then masks every digit except the last 4,
  keeping the original length.

## Usage

```javascript
const { cleanCustomer } = require("./cleanCustomer");

cleanCustomer("  chidinma OKAFOR ", "Chidinma@GMAIL.com", "0801 234 5678");
// {
//   name: "Chidinma Okafor",
//   email: "chidinma@gmail.com",
//   maskedPhone: "*******5678"
// }

cleanCustomer("Bola Ade", "not-an-email", "08012345678");
// { error: "Invalid email address" }
```

## Function signature

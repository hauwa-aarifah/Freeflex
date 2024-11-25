# Install and load required packages
if (!requireNamespace("plumber", quietly = TRUE)) {
  install.packages("plumber")
}

library(plumber)

# Initialize the plumber router
api <- plumb("backend/routes.R")

# Start the API
api$run(host = "0.0.0.0", port = 8000)
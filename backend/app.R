# library(plumber)

# # Load routes from routes.R
# pr <- plumber::plumb("C:/Users/User/Documents/DESENG YEAR 4/DATA TO PRODUCT/dataproduct/backend/routes.R")

# # Start the API
# pr$run(host = "0.0.0.0", port = 8000)

library(plumber)

# Load routes
source("backend/routes.R")

# Initialize the plumber router
api <- plumb("backend/routes.R")

# Start the API
api$run(host = "0.0.0.0", port = 8000)

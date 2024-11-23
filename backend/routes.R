#* @apiTitle Freeflex API
#* @apiDescription Backend API for the Freeflex App

# Base route
#* @get /
function() {
  list(message = "Welcome to the Freeflex API!", status = "running")
}

# Health check route
#* @get /health
function() {
  list(status = "API is running", version = "1.0.0")
}

# Example route
#* @get /example
function() {
  list(message = "Hello from the API!")
}

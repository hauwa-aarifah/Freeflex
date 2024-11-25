# Load necessary library
library(plumber)

#* @filter cors
function(req, res) {
  # Handle preflight OPTIONS request
  if (req$REQUEST_METHOD == "OPTIONS") {
    res$setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
    res$setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE")
    res$setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization")
    res$status <- 200
    return(list())
  }
  
  # Handle actual request
  res$setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
  res$setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE")
  res$setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization")
  plumber::forward()
}

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

# Submit data route
#* @post /submit
#* @serializer json
function(req, res) {
  tryCatch({
    # Check if request body exists
    if (is.null(req$postBody) || req$postBody == "") {
      res$status <- 400
      return(list(
        message = "No data received",
        status = "error"
      ))
    }

    # Parse JSON data from the request body
    data <- jsonlite::fromJSON(req$postBody)

    # Log the received data
    print("Received data:")
    print(data)

    # Return success response
    res$status <- 200
    return(list(
      message = "Data received successfully",
      status = "success",
      receivedData = data
    ))
  }, error = function(e) {
    # Log error
    print(paste("Error:", e$message))
    
    # Return error response
    res$status <- 400
    return(list(
      message = "Error processing the request",
      status = "error",
      details = e$message
    ))
  })
}
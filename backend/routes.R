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

# Single @post /submit route
#* @post /submit
#* @param data:object
#* @serializer json
function(req) {
  # Parse the JSON data from the frontend
  data <- jsonlite::fromJSON(req$postBody)
  print("Received data:")
  print(data)

  # Simulate a backend process
  response <- list(
    message = "Data received successfully",
    status = "success",
    receivedData = data
  )

  return(response)
}

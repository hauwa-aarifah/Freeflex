fnAveragePriceRange <- function(filtered_data) {
  
  # Load necessary library
  library(dplyr)
  
  # Ensure columns for filtering exist
  required_columns <- c("Start_rate", "End_rate")
  if (!all(required_columns %in% colnames(jobs_data))) {
    stop("One or more required columns are missing in the input CSV files.")
  }
  
  # Calculate average price range
  average_min_price <- mean(filtered_data$Start_rate, na.rm = TRUE)
  average_max_price <- mean(filtered_data$End_rate, na.rm = TRUE)
  
  # Return the result
  return(list(
    Average_Min_Price = average_min_price,
    Average_Max_Price = average_max_price
  ))
}
fnAveragePrice <- function(jobs_data) {
  
  # Load necessary library
  library(dplyr)
  
  # Ensure columns for filtering exist
  required_columns <- c("Start_rate", "End_rate")
  if (!all(required_columns %in% colnames(jobs_data))) {
    stop("One or more required columns are missing in the input data.")
  }
  
  # Calculate the row-wise averages and then compute the overall average
  row_avg <- rowMeans(jobs_data[, c("Start_rate", "End_rate")], na.rm = TRUE)
  overall_avg <- mean(row_avg, na.rm = TRUE)
  
  # Return the result
  return(overall_avg)
}

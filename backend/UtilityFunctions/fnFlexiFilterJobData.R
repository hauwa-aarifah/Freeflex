fnFlexiFilterJobData <- function(jobs_data, filter_criteria = list()) {
  
  # Allows for flexible input criteria
  # A named list is passed in and that is looped over
  
  # Load necessary library
  library(dplyr)
  
  # Initialise the filtered data
  filtered_data <- jobs_data
  
  # Loop over each of the filter criteria
  for (col in names(filter_criteria)) {
    filtered_data <- filtered_data %>%
      filter(get(col) %in% filter_criteria[[col]])
  }
  
  # Return the result
  return(filtered_data)
}
fnCountryPercentage <- function(jobs_data) {
  
  # Load necessary library
  library(dplyr)

  # Set the country column
  country_column = "Client_Country"
  
  # Check if the country column exists
  if (!country_column %in% colnames(jobs_data)) {
    country_column = "country"
  }
  
  # Calculate relative counts
  relative_counts <- jobs_data %>%
    group_by(!!sym(country_column)) %>%
    summarise(Count = n()) %>%
    mutate(Relative_Count = Count / sum(Count)) %>%
    arrange(desc(Relative_Count))
  
  # Return the result
  return(relative_counts)
}

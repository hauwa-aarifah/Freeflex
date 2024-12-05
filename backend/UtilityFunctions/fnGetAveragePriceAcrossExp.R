fnGetAveragePriceAcrossExp <- function(jobs_data) {
  
  # Load necessary library
  library(dplyr)
  
  # Define the skill levels to loop over
  skill_levels <- c("Entry level", "Intermediate", "Expert")  # Use a character vector
  
  # Initialise the price ranges list
  price_ranges <- list()
  
  # Loop over each skill level
  for (skill_level in skill_levels) {
    # Force evaluation of the loop variable to avoid scoping issues
    skill_level <- as.character(skill_level)
    
    # Filter the data for the current skill level
    filtered_data <- fnFlexiFilterJobData(jobs_data = jobs_data, filter_criteria = list(EX_level_demand = skill_level))
    
    # If filtering returns empty data, skip further processing
    if (nrow(filtered_data) == 0) {
      warning(paste("No data found for skill level:", skill_level))
      next
    }
    
    # Get the average price range for the filtered data
    price_range <- fnAveragePrice(jobs_data = filtered_data)
    
    # Assign the price range to the named list
    price_ranges[[skill_level]] <- price_range
  }
  
  return(price_ranges)
}


fnGetHourlyPostingDistribution <- function(jobs_data) {
  
  # Ensure the necessary column exists
  if (!"hour" %in% colnames(jobs_data)) {
    stop("The 'hour' column is missing in the input dataset.")
  }
  
  # Calculate the distribution of postings by hour
  hourly_distribution <- table(jobs_data$hour)
  
  # Convert to a normalized distribution (proportion of total postings)
  normalized_distribution <- hourly_distribution / sum(hourly_distribution)
  
  # Return both raw counts and normalized proportions
  return(list(
    Raw_Counts = as.data.frame(hourly_distribution),
    Normalized_Distribution = as.data.frame(normalized_distribution)
  ))
}

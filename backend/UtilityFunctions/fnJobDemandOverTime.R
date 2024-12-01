fnJobDemandOverTime <- function(jobs_data, time_interval = "day") {
  
  library(lubridate)
  library(ggplot2)
  library(dplyr)
  
  # Ensure the necessary column exists
  if (!"published_date" %in% colnames(jobs_data)) {
    stop("The 'published_date' column is missing in the input dataset.")
  }
  
  # Convert the 'published_date' column to a POSIXct date-time format
  jobs_data <- jobs_data %>%
    mutate(published_date = ymd_hms(published_date)) # Handles the date-time parsing
  
  # Aggregate postings by the chosen time interval
  jobs_demand <- jobs_data %>%
    mutate(time_group = floor_date(published_date, unit = time_interval)) %>%
    group_by(time_group) %>%
    summarise(postings = n(), .groups = "drop")
  
  # Plot the demand over time
  ggplot(jobs_demand, aes(x = time_group, y = postings)) +
    geom_line(color = "blue", size = 1) +
    labs(
      title = paste("Job Demand Over Time (by", time_interval, ")"),
      x = "Time",
      y = "Number of Job Postings"
    ) +
    theme_minimal()
  
  return(jobs_demand)
}

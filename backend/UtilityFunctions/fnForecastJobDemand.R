fnForecastJobDemand <- function(jobs_data, time_interval = "day") {
  
  library(forecast)
  library(ggplot2)
  library(dplyr)
  
  # Ensure the necessary column exists
  if (!"published_date" %in% colnames(jobs_data)) {
    stop("The 'published_date' column is missing in the input dataset.")
  }
  
  # Convert published_date to POSIXct and aggregate data
  jobs_data <- jobs_data %>%
    mutate(published_date = lubridate::ymd_hms(published_date)) %>%
    mutate(time_group = lubridate::floor_date(published_date, unit = time_interval)) %>%
    group_by(time_group) %>%
    summarise(postings = n(), .groups = "drop")
  
  # Create a time series object
  ts_data <- ts(jobs_data$postings, frequency = 7) # Weekly seasonality
  
  # Fit an ARIMA model
  fit <- auto.arima(ts_data)
  
  # Forecast for the next 7 days
  forecast_result <- forecast(fit, h = 7)
  
  # Plot the forecast
  autoplot(forecast_result) +
    ggtitle("Forecast of Job Demand for the Next Week") +
    xlab("Time") +
    ylab("Number of Job Postings") +
    theme_minimal()
  
  # Return the mean forecasted values
  forecasted_values <- forecast_result$mean
  forecasted_values <- as.numeric(forecasted_values)
  return(forecasted_values)
}

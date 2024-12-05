fnGetOptimalPostingTimeLocal <- function(optimalPostingHour, timeZone = "UTC")
  
  # Load lubridate
  library(lubridate)

  # Get todays date
  dateToday <- Sys.Date()
  
  # Set a dummy time
  dummyDate <- as.POSIXct( sprintf("%02d:00:00", optimalPostingHour), format = "%H:%M:%S", tz = "UTC")
  dummyTime <- format(dummyDate, format = "%H:%M:%S" )
  
  # Convert to specified time zone
  localDate <- with_tz(dummyDate, tz = timeZone)
  localTime <- format(localDate, format = "%H:%M:%S %Z" )
  
  return(localTime)
  
  
source("UtilityFunctions/fnFlexiFilterJobData.R")
source("UtilityFunctions/fnAveragePriceRangeSingle.R")
source("UtilityFunctions/fnGetPriceRangesAcrossExp.R")
source("UtilityFunctions/fnCountryPercentage.R")

# Read CSV files
jobs_data <- read.csv('Data/Final_UpWork_Dataset_Cleaned_Stage2.csv', stringsAsFactors = FALSE)

# Get price ranges
price_ranges <- fnGetPriceRangesAcrossExp(jobs_data = jobs_data)

#
filter_criteria = list(Client_Country = "United Kingdom", Search_Keyword = "Developer")
flexiFilteredData1 <- fnFlexiFilterJobData(jobs_data = jobs_data, filter_criteria)

EL_data <- fnFlexiFilterJobData(jobs_data = flexiFilteredData1, filter_criteria = list(EX_level_demand = "Entry level"))
Im_data <- fnFlexiFilterJobData(jobs_data = flexiFilteredData1, filter_criteria = list(EX_level_demand = "Intermediate"))
XP_data <- fnFlexiFilterJobData(jobs_data = flexiFilteredData1, filter_criteria = list(EX_level_demand = "Expert"))

EL_range <- fnAveragePriceRange(filtered_data = EL_data)
Im_range <- fnAveragePriceRange(filtered_data = Im_data)
XP_range <- fnAveragePriceRange(filtered_data = XP_data)